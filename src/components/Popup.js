import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './popup.css'
export default function Popup() {
    const balance = useSelector(state => state.playerReducer.balance);
    const dispatch = useDispatch()
    return (
        <div className="bgPopup" style={{ display: `${balance > 0 ? 'none' : 'block'}` }}>
            <div className="modal">
                <p className="message">Bạn đã hết tiền !!</p>
                <div className="options">
                    <button className="btn"
                        onClick={() => {
                            dispatch({
                                type:'PLAY_AGAIN'
                            })
                        }}
                    >Chơi lại</button>
                </div>
            </div>
        </div>
    )
}
