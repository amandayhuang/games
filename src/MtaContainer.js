import React, { useEffect, useState } from "react";
import { Box, LinearProgress, Table, TableBody, TableCell, TableContainer, Typography, TableHead, TableRow, Paper, Button } from "@material-ui/core";
import Footer from "./Footer";
import axios from "axios";
import {formatMtaData} from './Util'

export const mtaColors = {
    "A": "#0039A6",
    "B": "#FF6319",
    "C": "#0039A6",
    "D": "#FF6319",
    "E": "#0039A6",
    "F": "#FF6319",
    "G": "#6CBE45",
    "J": "#996633",
    "L": "#A7A9AC",
    "M": "#FF6319",
    "N": "#FCCC0A",
    "Q": "#FCCC0A",
    "R": "#FCCC0A",
    "S": "#808183",
    "1": "#EE352E",
    "2": "#EE352E",
    "3": "#EE352E",
    "4": "00933C",
    "5": "00933C",
    "6": "00933C",
    "7": "#B933AD",
}

export const stationDirections = {
    "G N": "Church Ave",
    "A S": "Inwood-207 St",
    "A N": "Far Rockaway / Ozone Park",
    "C S": "Euclid Ave",
    "F N": "Jamaica-179 St",
    "F S": "Coney Island-Stillwell Av",
}

const MtaContainer = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(0);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://my-mta.herokuapp.com/`
      );
      const formattedData = formatMtaData(response.data)
      console.log(formattedData)
      setData(formattedData);
      setLoading(false)
    } catch (e) {
      setLoading(false)
      setError(true)
      console.log("ERROR", e);
    }
  };

  const refreshHandler = () =>{
      setLoading(true)
      setNum(num +1)
  }

  useEffect(() => {
    fetchData();
  }, [num]);

  return (
    <>
      <Box>
        <p variant="outlined" className="title game">
          {" "}
          arriving trains near boerum hill
        </p>
        {
            loading ? <LinearProgress/> : error ? <Box>Error loading arrival times</Box> :
    <>
    <Box display='flex' justifyContent='center'> <Box>({data.length}) <Button onClick={refreshHandler} variant='outlined'>Refresh</Button></Box></Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350, width:'60%' }} aria-label="simple table">     
        <TableBody>
          {data.map((row, index) => (
            
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell align="right"><Box className='mtaLine' style={{backgroundColor:`${mtaColors[row.trainId]}`}}><span className='innerMtaLine'>{`${row.trainId}`}</span></Box></TableCell>
              <TableCell align="left">
                <Box display='flex' flexDirection='column'>
                  <Box>{row.stationName}</Box>
                  <Box>{row.direction} {stationDirections[`${row.trainId} ${row.direction}`]}</Box>
                </Box></TableCell>
              <TableCell align="right">{row.minAway}</TableCell>
              <TableCell align="right">{row.eta}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
        }
      </Box>
      <Footer text={"May you arrive on time."} />
    </>
  );
};

export default MtaContainer;
