import React, { useEffect, useState } from "react";
import { useEasybase } from "easybase-react";
import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import BlockIcon from "@material-ui/icons/Block";
import Footer from "./Footer";
import "./Actor.css";
import moment from "moment";

const ActorContainer = () => {
  const GUESSES = 5;
  const [easybaseData, setEasybaseData] = useState([]);
  const [firstNameAnswer, setFirstNameAnswer] = useState([]);
  const [lastNameAnswer, setLastNameAnswer] = useState([]);
  const [firstNameGuess, setFirstNameGuess] = useState([]);
  const [lastNameGuess, setLastNameGuess] = useState([]);
  const [hints, setHints] = useState([]);
  const [guessesLeft, setGuessesLeft] = useState(GUESSES);
  const [firstNameInput, setFirstNameInput] = useState([]);
  const [lastNameInput, setLastNameInput] = useState([]);

  const { db } = useEasybase();

  const fetchPerson = async () => {
    const randNum = Math.floor(Math.random() * (900 + 1));
    const ebData = await db("CELEB").return().limit(1).offset(randNum).all();
    if (ebData.length) {
      console.log("EB", ebData);
      const data = ebData[0];
      setEasybaseData(data);
      setFirstNameAnswer(data.firstname.toUpperCase().split(""));
      setLastNameAnswer(data.lastname.toUpperCase().split(""));
      setFirstNameGuess(
        data.firstname
          .toUpperCase()
          .split("")
          .map((l, i) => (i === 0 ? l : "-"))
      );
      setLastNameGuess(
        data.lastname
          .toUpperCase()
          .split("")
          .map((l, i) => (i === 0 ? l : "-"))
      );
      const years = moment().diff(data.dob, "years");
      setHints([
        {
          title: "reveal date of birth",
          hint: `${moment(data.dob).format("MMMM Do, YYYY")} (${years} years)`,
          revealed: false,
        },
        {
          title: "reveal acting credit",
          hint: `${data.firsttitle} (${data.firstyear})`,
          revealed: false,
        },
        {
          title: "reveal acting credit",
          hint: `${data.lasttitle} (${data.lastyear})`,
          revealed: false,
        },
      ]);
    }
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  console.log(easybaseData);

  const revealHandler = (index) => {
    setGuessesLeft(guessesLeft - 1);
    const newHints = [...hints];
    newHints[index].revealed = true;
    setHints(newHints);
  };

  return (
    <>
      {easybaseData.firstname && (
        <>
          <Typography>{`Guesses Left: ${guessesLeft}`}</Typography>
          <Box display="flex">
            {firstNameGuess.map((letter) => (
              <Box className="letter">{letter}</Box>
            ))}
          </Box>
          <Box display="flex">
            {lastNameGuess.map((letter) => (
              <Box className="letter">{letter}</Box>
            ))}
          </Box>
          {hints.map((hint, index) =>
            hint.revealed ? (
              <Box> {hint.hint}</Box>
            ) : (
              <Box onClick={() => revealHandler(index)}> {hint.title}</Box>
            )
          )}
        </>
      )}
      <Footer text={"Just as fun as wordle right?"} />
    </>
  );
};

export default ActorContainer;
