import { useEffect, useState } from 'react'
import {Obstacle2, Obstacle3} from '../SVG/obstacles'
import Blade from './Blade'

export default function Obstacle(props) {

    const [right, setRight] = useState(-200)
    const [isDone, setIsDone] = useState(false)

    useEffect(() => {
        if (!props.started) {
            setRight(-200)
        }
    }, [props.started])

    useEffect(() => {
        let moveObstacle;
        if (props.started) {
            moveObstacle = setInterval(() => {
                setRight(prevRight => {
                    if (prevRight >= 820) {
                        setIsDone(true)
                        return prevRight
                    }
                    return prevRight + 20
                })
            }, 100);
        }
        return () => clearInterval(moveObstacle)
        
    }, [props.started])

    return (
        <Blade started={props.started} right={right} isDone={isDone} />
    )
}

const styles = {

}