import styled from "styled-components";
import HeroImage from "../../Images/heroImage.jpeg";
export default function HeroPage() {
    return (
        <Container>
            <ImageContainer>
                <img src={HeroImage} alt='err' />
            </ImageContainer>
            <HeroCard>
                <Title>
                    <p>LNMIIT Library</p>
                    <span>Presents</span>
                </Title>
                <HeadingContainer>
                    <p>Virtual Book Exhibition and Selection (VBEAS) Portal</p>
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
                    <span>
                        Let's add enriching contents to our Library collection.{" "}
                    </span>
                </AboutContainer>
                <ButtonCluster>
                    <CustomButton seco={true}>Explore Stalls</CustomButton>
                    <CustomButton seco={false}>How to Use ?</CustomButton>
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
`;
const ImageContainer = styled.div`
    width: 100vw;
    height: 60vh;
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
    width: 80vw;
    margin-top: -400px;
    margin-bottom: 100px;
    border-radius: 10px;
    padding: 40px 20px;
    background: rgba(251, 251, 252, 0.6);
    box-shadow: -6px -6px 24px rgba(25, 25, 25, 0.1),
        6px 6px 24px rgba(25, 25, 25, 0.1);
    backdrop-filter: blur(3px);
    border-radius: 18px;
    @media screen and (max-width: 500px) {
        padding: 40px 10px;
        width: 90vw;
    }
`;

const ButtonCluster = styled.div``;
const CustomButton = styled.button`
    font-size: 20px;
    font-family: var(--font-text);
    font-weight: 200;
    letter-spacing: 1.5px;
    border-radius: 20px;
    padding: 8px 10px;
    border: none;
    outline: none;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
    margin: 3px 15px;
    cursor: pointer;
    color: ${(props) => props.seco && "white"};
    background-color: ${(props) => props.seco && "blueviolet"};
`;
const Title = styled.div`
    p {
        font-size: 30px;
        font-family: var(--font-text);
        font-weight: 400;
        color: blueviolet;
        letter-spacing: 2px;
    }
    > span {
        font-size: 20px;
        color: blueviolet;
        letter-spacing: 2px;
    }
    @media screen and (max-width: 500px) {
        > p {
            font-size: 24px;
            font-family: var(--font-text);
            font-weight: 400;
            color: blueviolet;
            letter-spacing: 2px;
        }
        > span {
            font-size: 16px;
            color: blueviolet;
            letter-spacing: 2px;
        }
    }
`;
const HeadingContainer = styled.div`
    font-size: 40px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 20px;
    text-decoration: underline;
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
        font-size: 22px;
        width: 80%;
    }
    > span {
        text-decoration: underline;
        color: blueviolet;
        font-size: 22px;
        letter-spacing: 2px;
    }
    margin-bottom: 30px;
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
