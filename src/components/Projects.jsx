import {Parallax} from 'react-parallax';
import Me from '../img/project.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
function Projects(){
    return (
        <div>
        <Parallax className='image' bgImage={Me} strength={800}>
            <div className='content'>
                <span className='img-txt'>My Projects</span>
            </div>
            
        </Parallax>
        <div className='text-box'>
            <ul>
                <li>
                    <h4>Travel Log App | <a href='https://github.com/hm-16/travel-log-app'><GitHubIcon/></a></h4>
                    <b>Key Skills : </b> HTML , CSS , Node.js , React.Js , MongoDB<br></br>
                    <b>Desc : </b>The simple to use web app allows users to create accounts, log in, and double-click on locations to create personal log entries with title, review, rating, and visit date. Users can only view and delete their own entries.
                </li>
                <li>
                    <h4>Blogz | <a href='https://github.com/hm-16/Blogz'><GitHubIcon/></a></h4>
                    <b>Key Skills : </b>  HTML , CSS , Node.js , Express.js , MongoDB , EJS <br></br>
                    <b>Desc : </b>Developed a website for daily blogging, featuring a home page showcasing concise blog excerpts limited to 50 words. Utilized EJS to establish personalized user dashboards with secure logins for individualized access and discussions.
                </li>
                <li>
                    <h4>CollabText | <a href='https://github.com/hm-16/CollabText'><GitHubIcon/></a></h4>
                    <b>Key Skills : </b>   HTML , CSS , React.js , Socket.io <br></br>
                    <b>Desc : </b>Built a real-time collaborative text editor using React and Socket.IO, allowing multiple users to edit and view changes simultaneously. Integrated CodeMirror editor, ensuring a responsive interface with dynamic text rendering for an intuitive user experience.
                </li>
            </ul>
        </div>
        </div>
        
    );
    
}

export default Projects;