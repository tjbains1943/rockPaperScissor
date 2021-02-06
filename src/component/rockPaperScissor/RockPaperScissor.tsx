import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import MyButton from "../Buttons";
import { getResult } from "../utils";

type ClickingTypes = "rock" | "paper" | "scissor";
type ResultTypes = "You Won!" | "You Lost!" | "It's a Tie!";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  gameContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  user: {
    width: "50%",
  },
  computer: {
    width: "50%",
  },
});

const RockPaperScissor = () : JSX.Element => {
  const classes = useStyles();
  const [compChoice, setCompChoice] = useState<string>();
  const [winner, setWinner] = useState<ResultTypes>()

  const values: ClickingTypes[] = ["rock", "paper", "scissor"];
  const getRandomCompChoice = () : ClickingTypes => {
    const randomIndex = Math.floor(Math.random() * 3);
    return values[randomIndex];
  };
  
  const clickOn = (type: ClickingTypes) => () : void => {
    console.log(type);
    const getCompValue : ClickingTypes = getRandomCompChoice();
    setCompChoice(getCompValue);
    getResult(type, getCompValue, setWinner)
  };
  return (
    <Container>
      <div className={classes.container}>
        <h1>Rock Paper Scissors Game</h1>
        <h2>Result: {winner && <span>{winner}</span>}</h2>
        <div className={classes.gameContainer}>
          <div className={classes.user}>
            <h2>User</h2>
            <MyButton onClick={clickOn("rock")}>Rock</MyButton>
            <MyButton onClick={clickOn("paper")}>Paper</MyButton>
            <MyButton onClick={clickOn("scissor")}>Scissors</MyButton>
          </div>
          <div className={classes.computer}>
            <h2> Computer</h2>
            <h3>Computer Selects: </h3>
            {compChoice && <h3>{compChoice.toUpperCase()}</h3>}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RockPaperScissor;
