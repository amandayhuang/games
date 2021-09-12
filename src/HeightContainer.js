import React, { useEffect, useState } from "react";
import { useEasybase } from "easybase-react";
import { Box, Grid, Paper, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const HeightContainer = () => {
  const [easybaseData, setEasybaseData] = useState([]);
  const [showHeight, setShowHeight] = useState(false);
  const [numPeople, setNumPeople] = useState(0);
  const { db } = useEasybase();
  const history = useHistory();

  const fetchPerson = async () => {
    const randNum = Math.floor(Math.random() * (640 - 0 + 1)) + 0;
    const ebData = await db("PEOPLE").return().limit(1).offset(randNum).all();
    setEasybaseData(ebData);
  };

  const skipHandler = () => {
    setShowHeight(false);
    setNumPeople(numPeople + 1);
  };

  const revealHandler = () => {
    setShowHeight(true);
  };

  const addDefaultSrc = (ev) => {
    ev.target.src =
      "https://t3.ftcdn.net/jpg/02/53/27/72/240_F_253277232_w0KhD626du0CeTExyY9HV5wANXHRjswV.jpg";
  };

  useEffect(() => {
    fetchPerson();
  }, [numPeople]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {easybaseData.map((ele) => {
        console.log(ele);
        return (
          <Box
            display="flex"
            flexDirection="column"
            margin="0 auto"
            alignItems="flex-start"
          >
            <h4>{ele.name}</h4>
            <img
              src={ele.imglink}
              width="200"
              alt={ele.name}
              onError={(e) => {
                setNumPeople(numPeople + 1);
              }}
            />

            {showHeight ? (
              <>
                <p>{`${ele.heightfeet}' ${ele.heightinches}"`}</p>
                <Button onClick={skipHandler}>Next</Button>
              </>
            ) : (
              <>
                <Button onClick={revealHandler}>Reveal Height</Button>
                <Button onClick={skipHandler}>Skip</Button>
              </>
            )}
          </Box>
        );
      })}
    </div>
  );
};

export default HeightContainer;
