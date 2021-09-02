import styled from "styled-components";
import HeroImage from "../../Images/heroImage.jpeg";
import BgBack from '../../Images/bg_back.jpeg';
import { device } from "../../devices";
export default function HeroPage() {
    return (
        <Container>
            <ImageContainer>
                <img src={BgBack} alt='err' />
            </ImageContainer>
            <HeroCard>
                <Title>
                    <p>LNMIIT Central Library</p>
                    <span>welcomes you to</span>
                </Title>
                <HeadingContainer>
                    <h2>Virtual Book Exhibition & Selection</h2>
                    <p> VBEAS - 2021 </p>
                </HeadingContainer>
                <AboutContainer>
                    <p>
                        LNMIIT Central Library invites you all to a "Virtual
                        Book Exhibition and Selection Portal." Here you will
                        find thousands of books on a wide range of subjects
                        covering Computer Science, CommunicationTechnology,
                        Electronics and Communication, Mechanical Engineering,
                        Physics, Mathematics, Humanities and Social Sciences,
                        Literature, Biography, Fiction, Dictionaries,
                        Encyclopedias, and many more !
                    </p>
                    <br />
                </AboutContainer>
                <ButtonCluster>
                    <CustomButton seco={true}>Explore Stalls</CustomButton>
                    <CustomButton seco={true}>How to Use ?</CustomButton>
                </ButtonCluster>
            </HeroCard>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
`;
const ImageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const HeroCard = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 90vw;
    margin-top: -800px;
    margin-bottom: 100px;
    border-radius: 10px;
    padding: 10px 20px;
    backdrop-filter: blur(3px);
    border-radius: 18px;
    @media ${device.laptop}{
        margin-top: -700px;
    }
    @media ${device.tablet}{
        margin-top: -650px;
    }
    @media screen and (max-width: 500px) {
        padding: 40px 10px;
        width: 90vw;
        margin-top: -500px;
    }
`;

const ButtonCluster = styled.div``;
const CustomButton = styled.button`
    font-size: 30px;
    font-family: var(--font-main);
    font-weight: 400;
    letter-spacing: 1.5px;
    border-radius: 20px;
    padding: 8px 10px;
    border: none;
    outline: none;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
    margin: 0px 15px;
    cursor: pointer;
    color: ${(props) => props.seco && "black"};
    background-color: ${(props) => props.seco && "#f2c531"};
`;
const Title = styled.div`
    p {
        font-size: 60px;
        font-family: var(--font-text);
        font-weight: bold;
        letter-spacing: 2px;
        color: #f2c531;
    }
    > span {
        font-size: 50px;
        letter-spacing: 2px;
    }
    @media screen and (max-width: 500px) {
        > p {
            font-size: 24px;
            font-family: var(--font-text);
            font-weight: 400;
            letter-spacing: 2px;
        }
        > span {
            font-size: 16px;
            letter-spacing: 2px;
        }
    }
`;
const HeadingContainer = styled.div`
    font-size: 40px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 20px;
    >h2{
        font-family: var(--font-text);
        text-transform: uppercase;

    }
    >p{
        font-size: 50px;
        font-weight: 700;
    }
    @media screen and (max-width: 500px) {
        font-size: 30px;
    }
`;
const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
        text-align: center;
        letter-spacing: 2px;
        font-size: 32px;
        width: 90%;
    }
    > span {
        text-decoration: underline;
        color: blueviolet;
        font-size: 22px;
        letter-spacing: 2px;
    }
    @media screen and (max-width: 500px) {
        > p {
            font-size: 18px;
            width: 100%;
        }
        > span {
            font-size: 18px;
        }
    }
`;
