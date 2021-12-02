import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./Dice.css"
export default function Dice(props) {
    // const [face, setFace] = useState(1);
    const ref = useRef(null);
    const dispatch = useDispatch();
    const { face, status } = useSelector(state => state.diceReducer[props.dice])
    // const { status } = useSelector(state => state.diceReducer)
    useEffect(() => {
        var startTime = performance.now();
        let intervalCode = null;
        if (status === 'play') {
            intervalCode = setInterval(() => {
                let currentFace = +ref.current.className.substring(4);
                let newFace = Math.floor(Math.random() * 6) + 1;
                while (newFace === currentFace) {
                    newFace = Math.floor(Math.random() * 6) + 1;;
                }
                if (performance.now() - startTime >= 3000) {
                    clearInterval(intervalCode);
                    dispatch({
                        type: 'STOP',
                        data: props.dice
                    })
                } else {
                    dispatch({
                        type: props.actionType,
                        data: newFace,
                    })
                }

            }, 500)
        }

        return () => {
            clearInterval(intervalCode)
        }
    }, [status])

    return (
        <div id="container_dice">
            <div id="cube" ref={ref} className={'show' + face}>
                <div className="top" />
                <div className="front" />
                <div className="left" />
                <div className="back" />
                <div className="right" />
                <div className="bottom" />
            </div>
            <div />
        </div>

    )
}
