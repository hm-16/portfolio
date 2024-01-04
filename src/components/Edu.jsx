import {Parallax} from 'react-parallax';
import Me from '../img/edu.jpg';
function Edu(){
    return (
        <div>
        <Parallax className='image' bgImage={Me} strength={800}>
            <div className='content'>
                <span className='img-txt'>My Education</span>
            </div>
        </Parallax>
        <div className='text-box'>
        <ul>
            <li>
            <b>B.Tech CCE | LNMIIT,Jaipur</b> : 2020 - 2024(expected)
            <p>Grade : 8.27 CGPA (till 6th semester)</p>
            </li>
            <li>
            <b>CBSE 12th | Tilak Public School,Jaipur</b> : 2017 - 2019
            <p>Grade : 93.8 %</p>
            </li>
            <li>
            <b>CBSE 10th | Gyan Vihar School,Jaipur</b> : 2006 - 2017
            <p>Grade : 10 CGPA</p>
            </li>
        </ul>
        </div>
        </div>
    );
    
}

export default Edu;