import React from 'react';

type ClickingTypes = "rock" | "paper" | "scissor";
type ResultTypes = "You Won!" | "You Lost!" | "It's a Tie!";
type WinnerFuncType = (result: ResultTypes) => void

export const getResult = (userPick : ClickingTypes, computerPick : ClickingTypes, setWinner : WinnerFuncType ) : void => {
    if(userPick === 'rock') {
        if(computerPick === 'rock') {
          setWinner('It\'s a Tie!')
        }
        if(computerPick === 'paper') {
          setWinner('You Lost!')
        }
        if(computerPick === 'scissor') {
          setWinner('You Won!')
        }
    }
    if(userPick === 'paper') {
      if(computerPick === 'rock') {
        setWinner('You Won!')
      }
      if(computerPick === 'paper') {
        setWinner('It\'s a Tie!')
      }
      if(computerPick === 'scissor') {
        setWinner('You Lost!')
      }
  } if(userPick === 'scissor') {
    if(computerPick === 'rock') {
      setWinner('You Lost!')
    }
    if(computerPick === 'paper') {
      setWinner('You Won!')

    }
    if(computerPick === 'scissor') {
      setWinner('It\'s a Tie!')
    }
}
}