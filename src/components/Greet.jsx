import {Parallax} from 'react-parallax';
import Me from '../img/me.JPG';
function Greet(){
    return (
        <div>
        <Parallax className='image' bgImage={Me} strength={800}>
            <div className='content'>
                <span className='img-txt'>Hi! I'm <b>Harshul Mathur</b></span>
            </div>
        </Parallax>
        <div className='text-box'>
        <p>
        I'm a <b>final year</b> undergraduate student of <b>LNMIIT,Jaipur</b>, pursuing <b>B.Tech in Communication and Computer
        Engineering</b> . I aspire to be a <b>full-stack software developer</b> and my technical interest revolves around 
        <b> C++ programming</b>, <b>Full-Stack Web Development</b> and <b>Problem Solving</b> .
        </p>
        </div>
        </div>
    );
    
}

export default Greet;