import { Rotate ,Fade} from 'react-awesome-reveal';
import Button from '../../Button/Button';
import './Home.css'

const Content = () => {
    return (
        <div className='content'>
          <Rotate triggerOnce>
          <p className='text_title'>Sabbir Chowdhury</p>
          </Rotate>
          <Fade triggerOnce delay={200}>  <p className='text_heading'>Full-stack Developer</p></Fade>
            <Fade delay={400} triggerOnce><p className='text_content'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur est nesciunt delectus, impedit nulla cumque vel illum illo velit harum deleniti odit recusandae. Quibusdam ratione possimus eveniet esse, porro harum!</p></Fade>

            <Fade triggerOnce delay={300} direction='up'><Button></Button></Fade>
        </div>
    );
};

export default Content;