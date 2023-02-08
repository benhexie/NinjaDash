import { useState } from "react"
import Ground from "./Ground"
import Main from "./Main"
import Sky from "./Sky"

export default (props) => {

    const [keyPressed, setKeyPressed] = useState('q')

    function keyHandler(event) {
        if (props.started) {
            switch(event.key.toLowerCase()) {
                case 'q':   // quits game
                case 'Escape':
                    event.preventDefault()
                    setKeyPressed('q')
                    props.setStarted(false)
                    break;
                case 'Enter':   // throws star
                case 'e':
                    event.preventDefault()
                    setKeyPressed('e')
                    break;
                case 'w':
                case 'ArrowUp':
                    event.preventDefault()
                    setKeyPressed('w')
                    break;
                case 'Spacebar':    // Pause
                case 'p':
                    event.preventDefault()
                    setKeyPressed('p')
                    break;
                default:
                    break;
            }
        }
    }

    const startGame = () => {
        props.setStarted(true)
        setKeyPressed('')
    }

    return (
        <div style={styles.container} onKeyDown={keyHandler} tabIndex='0'>
            {!props.started && <button
                style={styles.start}
                onClick={startGame}
            >START</button>}
            <Sky started={props.started} />
            <Main 
                started={props.started} 
                keyPressed={keyPressed}
                setKeyPressed={setKeyPressed}
            />
            <Ground started={props.started} />
        </div>
    )
}

const styles = {
    container: {
        height: '50rem',
        width: '50rem',
        maxHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#3C3E3F',
        border: 'solid 1px black',
    },
    start: {
        position: 'absolute',
        zIndex: 100,
        bottom: 50,
        right: 50,
        padding: '1rem',
        width: '7rem',
        borderRadius: '2rem',
        border: 'none',
    }
}