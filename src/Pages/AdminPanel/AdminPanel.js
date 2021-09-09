import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Books from "./Books/Books";
import Admin from "./Admin";
import Recommendation from "./Recommendation/Recommendation";
import SideBar from "./SideBar";

export default function AdminPanel({match}) {
    console.log(match);
    return (
        <Container>
            <SideBar match = {match} />
            <DashSide>
                <Switch>
                    <Route exact path = {`${match.path}`} component = {Admin} />
                    <Route path = {`${match.path}/books`} component = {Books} />
                    <Route path = {`${match.path}/recommendation`} component = {Recommendation} />
                </Switch>
            </DashSide>
        </Container>
    )
}


const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
`;

const DashSide = styled.div`
    padding: 30px 0px 0px 30px;
    background-color: #EAEDED;
`;