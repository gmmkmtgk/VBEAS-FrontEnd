import styled from "styled-components";
import { GoogleLogin } from 'react-google-login';
import { toast } from 'react-toastify';
import jwt from 'jwt-simple';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setCurrentUser} from "../../../redux/user/user.actions";
import User from "../User/User";
const CustomButton = (props) => {
    return(
        <Container>
            <Button {...props} >LNMIIT ID Login</Button>
        </Container>
    )
}

export default function Login() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const handleSuccess = (res) => {
        const data = {
            email: res.profileObj.email,
            first_name: res.profileObj.givenName,
            last_name: res.profileObj.familyName,
            full_name: res.profileObj.givenName + " "+res.profileObj.familyName
        };
        const domain = data.email.split("@");
        if(domain[1] === 'lnmiit.ac.in') {
            toast.success(`Welcome ${data.full_name}`);
            let token = jwt.encode(data, process.env.REACT_APP_JWT_SECRET);
            localStorage.setItem('_qid', token);
            dispatch(setCurrentUser(data));
        }
        else toast.error("Login Failed, Please Use LNMIIT ID only")
    }
    const handleFailure = (res) => {
        if( res.error === "popup_closed_by_user" ) toast.error("Login Failed");
        else toast.error("Login Failed !, Retry")
    }
    useEffect(() => {
        let token = localStorage.getItem('_qid');
        if( token ){
            let data = jwt.decode(token, process.env.REACT_APP_JWT_SECRET);
            if( data ) dispatch(setCurrentUser(data));
            else toast.error("Session Expired Login again")
        }
    }, []);
    if( user!== null ) {
        return (
            <User />
        )
    }
    else{
    return (
        <GoogleLogin 
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} // your Google app client ID
            render={renderProps => (
                <CustomButton onClick={renderProps.onClick} disabled={renderProps.disabled} />
        )}
        cookiePolicy={"single_host_origin"}
        onSuccess = {handleSuccess}
        onFailure = {handleFailure}
        />
        )   
    }
};

const Container = styled.div`
    width: 100%;
    cursor: pointer;
`;
const Button = styled.button`
    width: 100%;
    font-family: var(--font-text);
    font-weight: 500;
    font-size: 18px;
    outline: none;
    background-color: blueviolet;
    color: white;
    border-radius: 5px;
    padding: 8px 15px;
    border: none;
`;
