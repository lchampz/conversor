import React from 'react'
import './App.css'

import Card from './components/layout/Card'

import Conversor from './components/logic/Conversor'


export default () => {

    return( 
        <div className="app">

            <h1>Conversor</h1>

            <div className="cards">
                <Card title={'Converta aqui!'}>
                    <Conversor />
                </Card> 
             </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> {/*just ignore it, i was too lazy to edit the css XD*/}
            <a className="copy" href="https://github.com/lchampz" target="_blank">&copy; github/lchampz</a>
        </div>
    )
}
