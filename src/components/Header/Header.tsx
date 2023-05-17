import styled from 'styled-components';
import img from '../../assets/mehu-2.jpg'

const Header: React.FC = () => {
    return (

        <Nav>

            <img src={img} alt="" />
            <span>Sabbir Chowdhury</span>

            <menu>

            </menu>

        </Nav>

    );
};

export default Header;

const Nav = styled.div`

`