import React, { useState } from 'react'
import { GetConversor } from './FuncConversor'

import './loading.css'

const Currency = [
    {value: 0, title: 'USD'}, 
    {value: 1, title: 'EUR'}, 
    {value: 2, title: 'GBP'}, 
    {value: 3, title:'BRL'}
]

export default () => {
    const [ value, setValue ] = useState(0)
    const [ currency, setCurrency ] = useState(0)
    const [ res, setRes ] = useState(0)
    const [ curr, setCurr ] = useState({
        a: 'USD', 
        b: 'USD',
    })
    
    const selectCurr = Currency.map((curr) => {
        return(
            <option key={curr.value} value={curr.title}>{curr.title}</option>
        )
    })

    function reset(){
        setValue(0)
        setCurrency(0)
        setRes(0)
        setCurr({ a: 'USD', b: 'USD'})
    }

    function handleChange(e, letter) {
        if(letter == 'a'){  
            setCurr({ ...curr, a: e.target.value })
        } else {
            setCurr({ ...curr, b: e.target.value })
        }

        console.log({curr})
      }

    async function click(coinA, coinB, value) {
       const promise = await GetConversor(coinA, coinB, value)
       setCurrency(promise)
       setRes(coinB + ': ' + parseFloat(value * currency).toFixed(2))
    }

    return(
        <div>

            <div>
                De:
                <select onChange={e => handleChange(e,'a')}> 
                    {selectCurr}
                </select>
                <div></div>
                Para:
                <select onChange={e => handleChange(e, 'b')}>
                    {selectCurr}
                </select>
            </div>

            <input type="number" value={value} onChange={e => setValue(e.target.value)} />
            <div>
                <button onClick={() => click(curr.a, curr.b, value)}>Change</button>
                <button onClick={() => reset()}>reset</button>
            </div>
            <div>
                {res ? res : <div className="spinner"></div>}
            </div>
            
        </div>
    )
}