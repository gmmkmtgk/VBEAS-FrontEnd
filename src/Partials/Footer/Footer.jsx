import styled from "styled-components";
import Logo from '../../Images/logo_dark.png'
import {device} from '../../devices';
export default function Footer() {
    return (
        <Container>
            <ImageContainer>
                <img src = {Logo} alt = 'logo' />
            </ImageContainer>
            <LinksContainer>
                <Title>
                    <p>Resources</p>
                    <DataContainer>
                        <p>Publisher / Sellers</p>
                        <p>Book Collection</p>
                    </DataContainer>
                </Title>

                <Title>
                    <p>Contact Us</p>
                    <DataContainer>
                        <p>Visit: <a style = {{textDecoration:"underline", color:"blue"}} href = 'https://lnmiit.ac.in' >LNMIIT</a></p>
                        <p>+91 - 9999999999</p>
                        <p>Test@test.com</p>
                    </DataContainer>
                </Title>

            </LinksContainer>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 100px;
    background: black;
    padding: 30px 80px;
    display: flex;
    flex-wrap: wrap;
    color: whitesmoke;
    justify-content: space-between;
    @media ${device.tablet}{
        justify-content: center;
    }
`;

const ImageContainer = styled.div`
    width: 250px;
    >img{
        width: 100%;
    }
    @media ${device.tablet}{
        margin-bottom: 30px;
    }
`;

const LinksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


const Title = styled.div`
    margin: 3px 50px;
    cursor: pointer;
    margin-bottom: 40px;
    >p{
        font-size: 20px;
        font-weight: bold;
        font-family: var(--font-main);
        margin-bottom: 10px;
    }
`;
const DataContainer = styled.div`
    >p{
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 10px;
    }
`;


