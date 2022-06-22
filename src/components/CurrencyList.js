import Currency from './Currency';

const CurrencyList = (props) => {

    return (
        <select onChange={(e) => props.change(e)} name={props.name} id={props.homeCurrrency}>
        {props.Currencies.map(currency=>(
            <option><Currency currency={currency}></Currency></option>
        ))}
        </select>
    )
}

export default CurrencyList;