import React, { useCallback, useState, useMemo, useEffect } from "react";
import { getHouse } from "./house-api";
import useAsync from "react-use-async-hook";
import HouseComponent from "./house-component";
import { generateRandomId } from "../../common/utils";
import { useDispatch } from 'react-redux';

const House = () => {
  const dispatch = useDispatch();
  // state to save the house
  const [house, setHouse] = useState({});
  // state change on button click
  const [clicked, setClicked] = useState(false);
  // reveal answer
  const [showAnswer, setShowAnswer] = useState(false);

  // async function call to get the house
  const {
    data: houseInfo,
    execute: getHouseInfo,
    loading: houseDataLoading,
  } = useAsync({
    task: useCallback((houseId) => getHouse(houseId), []),
    dataLoader: useCallback((response) => response.data, []),
    initialData: useMemo(() => {
      return {};
    }, []),
    autoExecute: false,
  });

 // update the backdrop state 
 useEffect(() => {

  if (houseDataLoading) {
    dispatch({type:'SET_BACK_DROP', payload: { value: true }})
  } else {
    dispatch({type:'SET_BACK_DROP', payload: { value: false }})
  }
}, [houseDataLoading, dispatch]);

  // set house info when the data loads
  useEffect(() => {
    if (houseInfo) {
      setHouse(houseInfo);
    }
  }, [houseInfo]);

  // get a random house
  const generateRandomHouseHandler = () => {
    setShowAnswer(false);
    // get a random house from a list of 378 houses
    getHouseInfo(generateRandomId(378, 1));
  };

  return (
    <HouseComponent
      house={house}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      clicked={clicked}
      setClicked={setClicked}
      generateRandomHouseHandler={generateRandomHouseHandler}
    />
  );
};

export default House;
