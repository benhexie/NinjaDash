import { useState } from "react"

export default function Header () {

    const [score, setScore] = useState(0)

    return (
        <nav style={styles.container}>
            <h1 style={styles.title}>Ninja Dash</h1>
            <div style={styles.score}>
                <p style={styles.scoreDummyText}>Score</p>
                <div style={styles.delimeter} />
                <p style={styles.scoreText}>{score}</p>
            </div>
        </nav>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        width: 'fit-content'
    },
    score: {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#394b6e',
        height: '2rem',
        borderRadius: '1rem'
    },
    scoreDummyText: {
        width: 'fit-content',
        padding: '10px',
        backgroundColor: '#282c34',
        borderRadius: '1rem',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    scoreText: {
        marginRight: '10px',
        padding: '10px',
        paddingLeft: '10px',
        marginRight: '5px',
    },
    delimeter: {
        width: '3px',
        height: '100%',
        backgroundColor: 'black'
    }
}