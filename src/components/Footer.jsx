import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';
function Footer(){
    return(
        <div className="footer">
        <a href="https://www.linkedin.com/in/harshul-mathur-099286141/"><LinkedInIcon/></a>
        <a href="https://github.com/hm-16"><GitHubIcon/></a>
        <a href="https://leetcode.com/harshul16/"><CodeIcon/></a>
        <a href="mailto:harshulmathur2k@gmail.com"><EmailIcon/></a>
        </div>
    );
};
export default Footer;