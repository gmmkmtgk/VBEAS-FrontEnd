import Drawer from '@material-ui/core/Drawer';
import { useState } from "react";
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

export default function DrawerComponent() {
    const[ open, setOpen ] = useState(false);

    return (
        <Container>
            <IconButton onClick = {() => setOpen(true)} >
                <MenuIcon fontSize = 'large' color = 'primary' />
            </IconButton>
            <Drawer anchor={'top'} open={open} onClose={() => setOpen(false)}>
                <p>Hey I am here</p>
            </Drawer>
        </Container>
    )
}

const Container = styled.div`
    
`;
