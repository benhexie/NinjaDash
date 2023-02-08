import { useState, Fragment, useEffect } from 'react'
import Grass1 from '../SVG/grass/Grass1'
export default function Grass (props) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [grassLeft, setGrassLeft] = useState(-20)
    
    let grass = [...Array(Math.ceil(screenWidth / 159) + 5).keys()].map((x, i) => (
        <Fragment key={i}>
            <Grass1 left={i * 120 - 20} />
        </Fragment>
    ))

    useEffect(() => {
        let grassMove;
        if (props.started) {
            grassMove = setInterval(() => {
                setGrassLeft(prevGrassLeft => {
                    if (prevGrassLeft <= -50) 
                        return -20
                    return prevGrassLeft - 10
                })

            }, 100)
        }
        return () => clearInterval(grassMove)
    }, [props.started])

    return (
        <div style={{...styles.grass, left: grassLeft}}>
            {grass}
        </div>
    )
}

const styles = {
    grass: {
        position: 'absolute',
        bottom: 36,
        display: 'flex',
        marginLeft: -20,
        columnGap: -20,
        zIndex: 10
    }
}