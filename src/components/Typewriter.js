import { useState, useEffect } from 'react';
import './Typewriter.css';

const Typewriter = ({ titles = [], typingSpeed = 200, deletingSpeed = 30, pauseTime = 1500 }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [speed, setSpeed] = useState(typingSpeed);

    useEffect(() => {
        const handleType = () => {
            if (titles.length === 0) return;
            
            const i = loopNum % titles.length;
            const fullText = titles[i];

            setText(isDeleting 
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setSpeed(isDeleting ? deletingSpeed : typingSpeed);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, speed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, speed, titles, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className="typewriter-text">
            {text}
            <span className="typewriter-cursor">|</span>
        </span>
    );
};

export default Typewriter;