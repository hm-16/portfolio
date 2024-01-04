import {Parallax} from 'react-parallax';
import Me from '../img/skills.jpg';
function Skills(){
    return (
        <div>
        <Parallax className='image' bgImage={Me} strength={800}>
            <div className='content'>
                <span className='img-txt'>My Skill Set</span>
            </div>
            
        </Parallax>
        <div className='text-box'>
            <ul>
                <li>
                    <h4>Technical Skills :</h4>
                    C++ , React.js , Node.js , HTML , CSS , SQL , Object-Oriented Programming
                </li>
                <li>
                    <h4>Tools/Technologies :</h4>
                    MySQL , Git , GitHub
                </li>
                <li>
                    <h4>Relevant Course Work :</h4>
                    Data Structures and Algorithms , Database Management Systems , Operating Systems , Computer Networks
                </li>
            </ul>
        </div>
        </div>
        
    );
    
}

export default Skills;