import styled from "styled-components";
import HeroPage from "../../Components/HeroPage/HeroPage";
import PastEdition from "../../Components/PastEdition/PastEdition";
import StallsComponent from "../../Components/StallsComponent/StallsComponent";

export default function Home() {
    return (
        <Container>
            <HeroPage />
            <PastEdition />
            <StallsComponent />
        </Container>
    )
}

const Container = styled.div``;
