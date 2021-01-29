import Box from './Box';
import {useState} from 'react';
import randIdx from './helper';

const Boxes = ({colors}) => {
    const [colorState, setColorState] = useState(colors);
    const change = () => {
        setColorState(colorState => {
            let colorCopy = [...colorState];
            colorCopy[randIdx(colors)] = colorState[randIdx(colors)];
            return colorCopy;
        })
    }

    const boxes = colorState.map(c => (
        <Box color={c}/>
    ))

    return(
        <div>
            {boxes}
            <button onClick={change}>Change</button>
        </div>
    )
}

Boxes.defaultProps = {
    colors: [
        'red',
        'blue',
        'pink',
        'grey',
        'gold',
        'yellow',
        'brown',
        'purple'
    ]
}

export default Boxes;
