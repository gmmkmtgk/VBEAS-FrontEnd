import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { logOutUser } from '../../../redux/user/user.actions';
import { toast } from 'react-toastify';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useState } from 'react';
export default function User() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleLogout = () => {
        dispatch(logOutUser());
        toast.success("Logout Success")
    }
    return (
        <Container>
            <CartButton>
                <ShoppingBasketIcon color = 'primary' />
            </CartButton>
            <ProfileContainer onMouseEnter = {() => setShow(true)} onMouseLeave = {() => setShow(false)} >
                <InnerContainer>
                    <h2>{ user.first_name === 'OM' ? user.full_name : user.first_name}</h2>
                </InnerContainer>
                <ArrowDown>
                    <ArrowDownwardIcon fontSize = 'small' />
                </ArrowDown>
                <DropDownContainer onClick = {handleLogout} show = {show} >
                    <p>Logout</p>
                    <ExitToAppIcon />
                </DropDownContainer>
            </ProfileContainer>
            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
const ArrowDown = styled.div`
    transform: translateY(15%);
    margin-left: 10px;
`;

const CartButton = styled.div`
    color: 'white';
    margin-right: 20px;
`;

const DropDownContainer = styled.div`
    position: absolute;
    background: #EDEDED;
    color: black;
    font-family: var(--font-text);
    font-size: 15px;
    padding: 10px 12px;
    bottom: -40px;
    width: 100%;
    transition: all 0.2s ease-in-out;
    display: ${props => props.show ? 'flex' : 'none'};
    align-items: center;
    justify-content: space-around;
`;

const ProfileContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    padding: 10px ;
    justify-content: space-evenly;
    border: 1px solid blueviolet;
    align-items: center;
    border-radius: 3px;
    color: white;
`;

const InnerContainer = styled.div`
    display: flex;
    align-items: center;
    >h2{
        margin-left: 10px;
    }
`;
