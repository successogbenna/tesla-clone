import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Section = ({ title, description, backgroundImg, leftBtnText, rightBtnText,id }) => {
    return (
        <div className="container">
            <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText &&
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </ButtonGroup>
                    </Fade>
                    {title === 'Model S' && <a href="#section_y"><DownArrow src='/images/down-arrow.svg' href='' /></a>}
                    
            </Buttons>
        </Wrap>
        </div>
        
    );
};

export default Section;

const Wrap = styled.div`
height: 100vh;
width:100vw;
background-size: cover;
background-position: center;
background-repeat: no-repeat;

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image : ${props =>`url("/images/${props.bgImage}")`}
`
const ItemText = styled.div`
 padding-top: 15vh;
 text-aligned: center
`
const ButtonGroup = styled.div`
display:flex;
margin-bottom: 30px;
gap: 1rem;
@media (max-width:768px){
    flex-direction: column
}

`
const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height: 40px;
width: 256px;
color:white;
display: flex;
justify-content: center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform: uppercase;
font-size: 12px;
cursor:pointer

`
const RightButton = styled(LeftButton)`
background-color: white;
color:black;
opacity: 0.65

`
const DownArrow = styled.img`
height: 40px;
margin-top: 20px;
animation: animateDown infinite 1.5s
`
const Buttons =styled.div``