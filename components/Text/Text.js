import React, { PropTypes } from 'react'
import { Surface, Group, Image, Text, FontFace, measureText } from 'react-canvas'

const Text = ({top, left}) => {
    const style = {
        top,
        left,
        width: window.innerWidth,
        height: window.innerHeight,
        lineHeight: 50,
        fontSize: 18,
        color: '#222',
        fontFace: FontFace('Avenir Next Condensed, Helvetica, sans-serif', null, {weight: 500})
    }

    return (
        <Surface top={0} left={0} width={window.innerWidth} height={window.innerHeight}>
            <Text style={style}>{'Hello Canvas'}</Text>
        </Surface>
    )
}

Text.propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
}

export default Text