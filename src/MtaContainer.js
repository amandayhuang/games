import React, { useEffect, useState } from "react";
import { Box, LinearProgress, Table, TableBody, TableCell, TableContainer, Chip, TableRow, Paper, Button } from "@material-ui/core";
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
    "G S": "Court Sq",
    "A S": "Inwood-207 St",
    "A N": "Far Rockaway / Ozone Park",
    "C S": "Euclid Ave",
    "C N": "168 St",
    "F N": "Jamaica-179 St",
    "F S": "Coney Island-Stillwell Av",
    "R S": "Bay Ridge-95 St",
    "R N": "Forest Hills-71 Av",
}

const MtaContainer = () => {
  const [data, setData] = useState([]);
  const [stationNames, setStationNames] = useState([]);
  const [filter, setFilter] = useState('All')
  const [num, setNum] = useState(0);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://my-mta.herokuapp.com/`
      );
      const [formattedData, names] = formatMtaData(response.data)
      setData(formattedData)
      setStationNames(names)
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
    <Box display='flex' justifyContent='center' mb={2}> <Box>({data.length}) <Button onClick={refreshHandler} variant='outlined'>Refresh</Button></Box></Box>
    <Box display='flex' justifyContent='space-around' alignItems='space-around' mb={2} color='primary'>
        {
            ['All',...stationNames].map((name) =>{
                return name === filter ? 
                <Chip label={name}  color='primary' key={name}/> 
                : <Chip label={name} variant="outlined" onClick={() => setFilter(name)} color='primary' key={name}/> 
            })
        }
    </Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350, width:'60%' }} aria-label="simple table">     
        <TableBody>
          {data.map((row, index) => {
            return filter === 'All' || filter=== row.stationName ? 
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell align="right"><Box className='mtaLine' style={{backgroundColor:`${mtaColors[row.trainId]}`}}><span className='innerMtaLine'>{`${row.trainId}`}</span></Box></TableCell>
              <TableCell align="left">
                <Box display='flex' flexDirection='column'>
                  <Box><span className='stationName'>{row.stationName}</span></Box>
                  <Box>{stationDirections[`${row.trainId} ${row.direction}`]}</Box>
                </Box></TableCell>
              <TableCell align="right">{row.minAway}</TableCell>
              {/* <TableCell align="right">{row.eta}</TableCell> */}
            </TableRow> : <></>
        })}
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
