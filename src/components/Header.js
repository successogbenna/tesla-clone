import React,{useState} from 'react';
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
function Header() {
    const  [burgerStatus,setBurgerStatus] = useState(false)
    return (
        <Container>
            <a href="/">
                <img src='/images/logo.svg' alt="" />
            </a>
            <Menu>
              <p><a href="#">Model S</a></p>
                <p><a href="#">Model 3</a></p>
                <p><a href="#">Model X</a></p>
                <p><a href="#">Model Y</a></p>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Telsa Account</a>
                <CustomMenu onClick={()=>{setBurgerStatus(true)}}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper onClick={() => { setBurgerStatus(false) }}>
                    <CustomClose />
                </CloseWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Insurance</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Powerall</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Investors Relationship</a></li>
            </BurgerNav>
        </Container>
    );
}


export default Header;

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 20px;
top:0;
left:0;
right:0;
z-index: 1
`
const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;

a{
  font-weight: 600;
  text-transform: uppercase;
  padding: 0px 10px; 
}
@media (max-width:768px){
    display:none
}
`
const RightMenu = styled.div`
display: flex;
align-items: center;
a{
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px
}
`
const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav = styled.div`
position: fixed;
top:0;
right:0;
bottom: 0;
background:white;
z-index: 16;
width: 300px;
list-style:none;
padding: 20px;
text-align: start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 1s ease-in;
li{
    padding: 13px 0px;

}
`
const CustomClose = styled(CloseIcon)`
float: right;
cursor:pointer;
`

const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`