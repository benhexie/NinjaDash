import { useEffect, useState } from "react"
import { Obstacle1 } from "../SVG/obstacles"

export default function Blade (props) {
    const [rotate, setRotate] = useState(-25)

    useEffect(() => {
        if (!props.started) {
            setRotate(-25)
        }
    }, [props.started])

    useEffect(() => {
        let startRotation;
        if (props.started) {
            startRotation = setInterval(() => {
                setRotate(prevRotate => {
                    if (props.isDone) {
                        return prevRotate
                    }
                    return prevRotate - 25
                });
            }, 50)
        }
        return () => clearInterval(startRotation)
    }, [props.started, props.isDone])

    return (
        <Obstacle1 deg={rotate} right={props.right} />
    )
}

const styles = {

}