import { BsFacebook, BsLinkedin , BsGithub} from 'react-icons/bs';
import './Home.css'
import { Fade } from 'react-awesome-reveal';

const Social = () => {
    return (
        <div className='social-icon'>
            <Fade direction='up' triggerOnce delay={100}> <a href="" > <BsFacebook/>  </a></Fade> 
            <Fade direction='up' triggerOnce delay={200}><a href="">  <BsLinkedin/></a></Fade> 
            <Fade direction='up' triggerOnce delay={300}> <a href=""> <BsGithub/></a></Fade> 
        </div>
    );
};

export default Social;