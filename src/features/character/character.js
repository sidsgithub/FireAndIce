import React, { useCallback, useState, useMemo, useEffect } from "react";
import { getCharacter } from "./character-api";
import useAsync from "react-use-async-hook";
import CharacterComponent from "./character-component";
import { generateRandomId } from "../../common/utils";
import { useDispatch } from 'react-redux';

const Character = () => {
  const dispatch = useDispatch();
  // state to save the character
  const [character, setCharacter] = useState({});
  // state change on button click
  const [clicked, setClicked] = useState(false);
  // reveal answer
  const [showAnswer, setShowAnswer] = useState(false);

  // async function call to get the character
  const {
    data: characterInfo,
    execute: getCharacterInfo,
    loading: characterDataLoading
  } = useAsync({
    task: useCallback((characterId) => getCharacter(characterId), []),
    dataLoader: useCallback((response) => response.data, []),
    initialData: useMemo(() => {
      return {};
    }, []),
    autoExecute: false,
  });

  // update the backdrop state 
  useEffect(() => {
    if (characterDataLoading) {
      dispatch({type:'SET_BACK_DROP', payload: { value: true }})
    } else {
      dispatch({type:'SET_BACK_DROP', payload: { value: false }})
    }
  }, [characterDataLoading, dispatch]);

  // set character info when the data loads
  useEffect(() => {
    if (characterInfo) {
      setCharacter(characterInfo);
    }
  }, [characterInfo]);

  // get a random character
  const generateRandomCharacterHandler = () => {
    setShowAnswer(false);
    // get a random character from a list of 583 characters
    getCharacterInfo(generateRandomId(583, 1));
  };

  return (
    <CharacterComponent
      character={character}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      clicked={clicked}
      setClicked={setClicked}
      generateRandomCharacterHandler={generateRandomCharacterHandler}
    />
  );
};

export default Character;
