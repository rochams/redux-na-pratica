import React from "react";
import '../styles/Card.css';
import Escudo from "./Escudo";


export default function Card (props) {

    const golsTime1 = props.golsTime1
    const golsTime2 = props.golsTime2
    const escanteios1 = props.escanteios1
    const escanteios2 = props.escanteios2
    const cartoesAmarelos1 = props.cartoesAmarelos1
    const cartoesAmarelos2 = props.cartoesAmarelos2
    const cartoesVermelhos1 = props.cartoesVermelhos1
    const cartoesVermelhos2 = props.cartoesVermelhos2

    return (
        <>        
        <div className="card">
            <div className="card-header align-center">
                <Escudo source={props.source1} width={props.with} height={props.height}></Escudo>
                <h1>{ golsTime1 }</h1>
            </div>
            <div className="card-body">
                <h4>Escanteios: { escanteios1 }</h4>
                <h4>Cartões Amarelos: { cartoesAmarelos1 }</h4>
                <h4>Cartões Vermelhos: { cartoesVermelhos1 }</h4>
                <button className="btn-goal" onClick={() => props.updateGoal(1)}>GOL</button>
            </div>
        </div>
        <div className="card">
            <div className="card-header align-center">
                <h1>{ golsTime2 }</h1>
                <Escudo source={props.source2} width={props.with} height={props.height}></Escudo>
            </div>
            <div className="card-body">
                <h4>Escanteios: { escanteios2 }</h4>
                <h4>Cartões Amarelos: { cartoesAmarelos2 }</h4>
                <h4>Cartões Vermelhos: { cartoesVermelhos2 }</h4>
                <button className="btn-goal" onClick={() => props.updateGoal(2)}>GOL</button>
            </div>
        </div>
        </>
    )

}