import { useEffect, useState } from 'react'
import {Ninja1, Ninja2, Ninja3} from '../SVG/character'

export default function Ninja(props) {
    if (props.started) {
        switch(props.keyPressed) {
            case 'w':
                return <Ninja1 bottom={props.bottom} />
            case 'e':
                return <Ninja3 bottom={props.bottom} />
            default:
                break;
        }
    
        if (props.costume) return <Ninja1 bottom={props.bottom} />
        else return <Ninja2 bottom={props.bottom} />
        
    } else return <Ninja1 bottom={props.bottom} />
}

const styles = {
    ninja: {

    }
}