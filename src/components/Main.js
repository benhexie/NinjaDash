import { useEffect, useState } from "react"
import Ninja from "./Ninja"
import Obstacle from "./Obstacle"

const distanceOfChange = 6
const timeForChange = 5
let cycles = 0
let level = 0

export default function Main (props) {
    const [firstCostume, setFirstCostume] = useState(true)
    const [bottom, setBottom] = useState(0)

    let rise;
    let fall;

    useEffect(() => {

        const gravity = () => {
            clearInterval(rise)
            clearInterval(fall)
        }
        
        const jump = () => {
            console.log({
                level, cycles
            });
            if (level < 2) {
                cycles = 0
                clearInterval(rise)
                clearInterval(fall)
                rise = setInterval(() => {
                    setBottom(prevBottom => {
                        if (cycles < 75) {
                            cycles++
                            return prevBottom + distanceOfChange
                        } else {
                            gravity()
                            return prevBottom
                        }
                    })
                }, timeForChange)
                level++
            }
        }


        let changeCostume;
        if (props.started && props.keyPressed === 'w') {   // Jump
            jump()
            return () => clearInterval(rise)
        }
        if (props.started && props.keyPressed === 'e') {   // Star throw
            changeCostume = setTimeout(() => props.setKeyPressed(''), 70)
            return () => clearTimeout(changeCostume)
        }
        if (props.started) {
            changeCostume = setInterval(() =>
                setFirstCostume(prevCostume => !prevCostume)
            , 50)
            return () => clearInterval(changeCostume)
        }
    }, [props.started, props.keyPressed])
    

    return (
        <div style={styles.container}>
            <Ninja 
                started={props.started}
                keyPressed={props.keyPressed}
                setKeyPressed={props.setKeyPressed}
                costume={firstCostume}
                bottom={bottom}
            />
            <Obstacle started={props.started} />
        </div>
    )
}

const styles = {
    container: {
        // backgroundColor: 'blue',
        width: '100%',
        height: '100%',
        zIndex: 5
    }
}