import styled from "styled-components";
// import HeroImage from "../../Images/heroImage.jpeg";
import BackImage from '../../Images/two.jpeg';
import { Link } from "react-scroll";
import DiscountImage from '../../Images/25.png';
export default function HeroPage() {
    return (
        <Container>
            <ImageContainer>
                <img src={BackImage} alt='err' />
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
                        LNMIIT Central Library invites you to a <br/> "<b>Virtual
                        Book Exhibition and Selection Portal</b>"<br /> Here, you will
                        find thousands of books on a wide range of subjects
                        covering Computer Science, CommunicationTechnology,
                        Electronics & Communication, Mechanical Engineering,
                        Physics, Mathematics, Humanities & Social Sciences,
                        Literature, Biographies, Fiction, Dictionaries,
                        Encyclopedias, and many more !
                    </p>
                    <br />
                </AboutContainer>
                <ButtonCluster>
                    <CustomButton seco={true}>
                        <Link to = 'stalls' spy={true} smooth={true} >Explore Stalls</Link>
                    </CustomButton>
                    <CustomButton seco={true}>How to Use ?</CustomButton>
                </ButtonCluster>
            </HeroCard>
            <DiscountContainer>
                <img src = {DiscountImage} alt = '25off' />
                <p>25 % <br /> Off</p>
            </DiscountContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    position: relative;
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
    position: absolute;
    top: 0px;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100vw;
    margin-bottom: 100px;
    border-radius: 10px;
    padding: 10px 20px;
    border-radius: 18px;
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

const DiscountContainer = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    top: 30px;
    right: 100px;
    >img{
        width: 100%;
        height: 100%;
    }
    >p{
        text-align:center;
        position: absolute;
        top: 25%;
        left: 22%;
        font-size: 2rem;
        font-weight: bold;
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
        width: 76%;
        @media screen and (max-width)
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

