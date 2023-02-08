import { useEffect, useState } from 'react'
import Moon1 from '../SVG/moon/Moon1'

export default function Sky(props) {
    const [stars, setStars] = useState([])
    useEffect(() => {
        const starsArr = [...Array(50).keys()].map((x, i) => {
            const top = Math.floor(Math.random() * 800)
            const left = Math.floor(Math.random() * 800)
            return <div key={i} style={{
                ...styles.star,
                top, left
            }} />
        })
        setStars(starsArr)
    }, [props.started])
    return (
        <div style={styles}>
            <div style={styles.sky}>
                {stars}
            </div>
            <Moon1 />
        </div>
    )
}

const styles = {
    container: {
        width: '100%',
        position: 'relative',
        height: 'auto',
    },
    sky: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    star: {
        width: 2,
        height: 2,
        backgroundColor: 'white',
        position: 'absolute'
    }
}