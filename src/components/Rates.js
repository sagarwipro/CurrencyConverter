import React, { useEffect, useState } from 'react';
import Card from './Card';
import "./Rate.css";

function Rates() {

  const [getRate, setRate] = useState(null);
  const [getCurrencyName, setCurrencyName] = useState([]);
  const [getFromHcurrency, setFromHcurrency] = useState(1);
  const [getFromFcurrency, setFromFcurrency] = useState(1);
  const [convertResult, setConvertResult] = useState(0);
  const [convCurName, setConCurName] = useState("USD");
  const [inputValue, setInputValue] = useState(0);

  const fromChange = e => {
    let cur = e.target.value;
    for (var i = 0; i < getCurrencyName.length; i++) {
      if (cur == getCurrencyName[i]) {
        setFromHcurrency(getRate[i]);
        indirectConvert(inputValue);
      }
    }
  }
  const toChange = e => {
    let cur = e.target.value;
    for (var i = 0; i < getCurrencyName.length; i++) {
      if (cur == getCurrencyName[i]) {
        setConCurName(getCurrencyName[i]);
        setFromFcurrency(getRate[i]);
        indirectConvert(inputValue);
      }
    }
  }

  function indirectConvert(value) {
    setInputValue(value);
    let cur = (getFromFcurrency / getFromHcurrency) * value;
    setConvertResult(cur);
  }
  function convertHandler(e) {
    setInputValue(e.target.value);
    let cur = (getFromFcurrency / getFromHcurrency) * e.target.value;
    setConvertResult(cur);
  }

  function currencies() {
    var para = "";
    for (var i = 0; i < getCurrencyName.length; i++) {
      para += getCurrencyName[i] + " " + getRate[i] + "; ";
    }
    return para;
  }

  useEffect(() => {
    async function getFetch() {
      const url = 'https://open.er-api.com/v6/latest/USD';
      let res = await fetch(url);
      res = await res.json();
      const result = res.rates;
      setCurrencyName(Object.keys(result));
      setRate(Object.values(result));
    }
    getFetch();
  }, []);

  return (
    <div>
      <Card className1="container" className2="text-block" className3="movable" className4="currencies" currencies={currencies}
      className5="Card" h2="Money Exchange" className6="flex-container" for="omeCurrency" label1="Choose a currrency to convert from:"
      for1="foreignCurrency"  labelU={getFromHcurrency} change={convertHandler} label2="To:" label3={getFromFcurrency} label4={"Converted : "} label4F={convertResult} label4S={convCurName}
      getCurrencyName={getCurrencyName} Fchange={fromChange} Tchange={toChange}></Card>
    </div>
  )
}
export default Rates;