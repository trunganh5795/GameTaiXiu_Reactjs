import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./game.css"
export default function Game() {
    const dispatch = useDispatch();
    const score = useSelector(state => state.diceReducer.score)
    const { result, choose, balance } = useSelector(state => state.playerReducer);
    const [bet, setBet] = useState('');
    useEffect(() => {
        if (score) {
            dispatch({
                type: 'RESULT',
                data: score
            })
        }

    }, [score])
    const chooseTaiXiu = (choose) => {
        dispatch({
            type: 'CHOOSE',
            data: choose
        })

    }
    const changeBetHandle = (value) => {
        if (value > balance) {
            setBet(balance)
        } else {
            setBet(value)
        }
    }
    return (
        <div style={{ width: '60%' }}>
            {console.log(122121)}
            <h1 className="textGame">Kết quả: {result}</h1>
            <div className="row">
                <div className="card col-6">
                    <button className="btn btn-warning" style={{ width: '100%', height: '100%' }}
                        onClick={() => chooseTaiXiu('tai')}
                    >Tài</button>
                </div>
                <div className="card col-6">
                    <button className="btn btn-primary" style={{ width: '100%', height: '100%' }}
                        onClick={() => chooseTaiXiu('xiu')}
                    >Xỉu</button>
                </div>
            </div>
            <h1 className="textGame">Bạn Chọn: {choose === 'tai' ? "Tài" : choose === 'xiu' ? "Xỉu" : ""}</h1>
            <div className="d-flex align-items-center ">
                <h1 className="me-3 textGame">Cược: </h1>
                <div className="input-group ">
                    <span className="input-group-text" style={{ color: 'rgb(221, 58, 21)' }}>$</span>
                    <input type="number" className="form-control" value={bet} style={{ height: '100%', fontSize: '30px', color: 'rgb(221, 58, 21)' }} aria-label="Dollar amount (with dot and two decimal places)"
                        onChange={(e) => {
                            changeBetHandle(+e.target.value)
                        }}
                    />
                </div>
            </div>
            <h1 className="textGame">Tiền của bạn: $ {balance}</h1>
            <div className="d-flex justify-content-center">
                <button className="btn btn-success" style={{ display: 'block', width: '140px', fontSize: '36px' }} type="button"
                    onClick={() => {
                        dispatch({
                            type: 'PLAY',
                            data: 'play'
                        })
                        dispatch({
                            type: 'BET',
                            data: bet
                        })


                    }}
                >Play</button>
            </div>


        </div>
    )
}
