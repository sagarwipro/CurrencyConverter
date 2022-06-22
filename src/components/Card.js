
import React from 'react'
import CurrencyList from "./CurrencyList";

function Card(props) {
  return (
    <div>
        <div className={props.className1}>
        <img alt=''></img>
        <h1 className={props.className2}>Live</h1>
      </div>
      <div className={props.className3}>
        <marquee style={{ hspace: 5 }} className={props.className4}>{props.currencies()}</marquee>
      </div>

      <div className={props.className5}>
        <h2>{props.h2}</h2>
        <div className={props.className6}>
          <div>
            <label for={props.for}>{props.label1}</label>
          </div>
          <div>
            <CurrencyList Currencies={props.getCurrencyName} change={props.Fchange} name={"homeCurrrency"} id={"homeCurrrency"}></CurrencyList>

            &nbsp;
            <label for={props.for1} >{props.labelU}</label>
            <input onChange={(e) => props.change(e)} />
            <br></br>
            <br></br>
            <label for={props.for1}>{props.label2}</label>
            <CurrencyList Currencies={props.getCurrencyName} change={props.Tchange} name={"foreignCurrency"} id={"foreignCurrency"}></CurrencyList>
            &nbsp;
            <label >{props.label3}</label>
            <br></br>
            <br></br>
            <br></br>
            <br></br>      <label >{props.label4} {props.label4F} {props.label4S}</label>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Card;

