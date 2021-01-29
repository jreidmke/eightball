import {useState} from 'react';
import './EightBall.css';
import randIdx from './helper';

const EightBall = ({answers}) => {
    const [answer, setAnswer] = useState(null);
    const [isAnswering, setIsAnswering] = useState(false);
    const [count, setCount] = useState(0);

    const shake = () => {
        setIsAnswering(!isAnswering);
        setCount(count + .5);
    }
    const color = isAnswering ? 'green' : 'black'
    const idx = randIdx(answers);
    console.log(answers[idx])
    return(
        <div id="ball" style={{backgroundColor:color}}>
            <h1 id="ball-text">{isAnswering ? answers[idx].msg : 'Ask Me A Question'}</h1>
            <button onClick={shake}>{isAnswering ? 'Ask another question' : 'Gimmie a shake'}</button>
            {console.log(answers)}
            {!isAnswering ? <h3>You have asked {count} questions.</h3> : ""}
        </div>
    )
} 

EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]
}

export default EightBall;