import { Link, useHistory } from "react-router-dom";
import styled from "styled-components"
import LogoImage from '../../Images/logo.png';
export default function SideBar({match}) {
    const history = useHistory();
    return (
        <Container>
            <ImageContainer onClick = {()=>history.push('/admin')} >
                <img src = {LogoImage} alt = 'logo' />
            </ImageContainer>
            <LinksContainer>
                <LinksOptions to = {`${match.path}`} >
                    Admin Controls
                </LinksOptions>
                <LinksOptions to = {`${match.path}/books`} >
                    View Books
                </LinksOptions>
                <LinksOptions to = {`${match.path}/publisher`} >
                    View Publishers
                </LinksOptions>
                <LinksOptions to = {`${match.path}/recommendation`} >
                    Recommendations
                </LinksOptions>
            </LinksContainer>
        </Container>
    )
}

const Container = styled.div`
    position: sticky;
    top: 0px;
    height: 100vh;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
    color: black;
    font-family: var(--font-main);
    font-weight: 300;
    font-size: 1.2rem;
    padding:3px 3px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 110px;
    >img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    border-bottom: 2px solid black;
    margin-bottom: 30px;
`;
const LinksContainer = styled.div`
    text-align: start;
    width: 100%;
    padding-right: 20px;
`;
const LinksOptions = styled(Link)`
    display: inline-block;
    cursor: pointer;
    padding-bottom: 10px;
    margin: 0px 0px 20px 10px;
    border-bottom: 2px solid #EAEDED;
    width: 100%;
    text-decoration: none;
    color: inherit;
`;

