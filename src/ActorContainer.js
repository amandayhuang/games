import React, { useEffect, useState } from "react";
import { useEasybase } from "easybase-react";
import { Box, Typography, TextField, Button } from "@material-ui/core";
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
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [isWinner, setIsWinner] = useState(false);

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

  const checkName = (answer, input, guess, type) => {
    const newGuess = [...guess];
    let matches = 0;
    answer.forEach((letter, i) => {
      if (letter === input[i]) {
        newGuess[i] = letter;
        matches = matches + 1;
      }
    });
    if (type === "first") {
      setFirstNameGuess(newGuess);
    } else {
      setLastNameGuess(newGuess);
    }

    return matches === answer.length ? true : false;
  };

  const checkGuess = () => {
    const checkFirst = checkName(
      firstNameAnswer,
      firstNameInput,
      firstNameGuess,
      "first"
    );
    const checkLast = checkName(
      lastNameAnswer,
      lastNameInput,
      lastNameGuess,
      "last"
    );

    if (checkFirst && checkLast) setIsWinner(true);
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  useEffect(() => {
    if (firstNameAnswer.length > 1) checkGuess();
  }, [firstNameInput, lastNameInput]);

  if (easybaseData)
    console.log("ANSWER", easybaseData.firstname, easybaseData.lastname);

  const revealHandler = (index) => {
    setGuessesLeft(guessesLeft - 1);
    const newHints = [...hints];
    newHints[index].revealed = true;
    setHints(newHints);
  };

  const guessHandler = (e) => {
    e.preventDefault();
    const guess = e.target.guess.value;
    const parts = guess.split(" ");
    if (parts.length !== 2) {
      setError(true);
      setErrorText("submit a first and last name please");
    } else {
      setError(false);
      setErrorText("");
      setFirstNameInput(parts[0].toUpperCase());
      setLastNameInput(parts[1].toUpperCase());
      setGuessesLeft(guessesLeft - 1);
    }
    const guessInput = document.getElementById("guess");
    guessInput.value = "";
    console.log("SUBMITTED", e.target.guess.value);
  };

  return (
    <>
      {easybaseData.firstname && (
        <>
          <Typography>{`Guesses Left: ${guessesLeft}`}</Typography>
          <Typography>{`Winner? ${isWinner}`}</Typography>
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
      {guessesLeft > 0 && !isWinner && (
        <form onSubmit={(e) => guessHandler(e)}>
          <TextField
            label="enter guess"
            variant="outlined"
            name="guess"
            error={error}
            helperText={errorText}
            id="guess"
          />
          <Button type="submit">submit</Button>
        </form>
      )}

      <Footer text={"Just as fun as wordle right?"} />
    </>
  );
};

export default ActorContainer;
