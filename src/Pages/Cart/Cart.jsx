import { useEffect } from "react";
import api from "../../api/api";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../../redux/cart/cart.actions";
import styled from "styled-components";
import { CLIENT_LINK } from "../../Utils/constants";

export default function Cart() {
    const user = useSelector(state => state.user);
    const cart = useSelector(state => state.cart.data);
    const dispatch = useDispatch();
    const handleClick = (id) => {
        window.open(`${CLIENT_LINK}/book/${id}`);
    }
    useEffect(() => {
        const fetchCart = async () => {
            const sendData = {
                email : user.email,
            }
            api.post('/cart/', sendData)
            .then(res => {
                let cartItem = res.data.data;
                dispatch(setCart(cartItem));
            })
            .catch(err => {
                return toast.error("Something Went Wrong")
            })
        }
        if( user!==null ) fetchCart();
    }, [user])
    return (
        <Container>
            <Title>
                Your Cart Items
            </Title>
            <CartItem>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Seller</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>View</TableHead>
                </TableRow>
                <br />
                {
                    cart?.map(item => (
                        <>
                        <TableRow key = {item.id} >
                            <TableData>{item.title}</TableData>
                            <TableData>{item.author}</TableData>
                            <TableData>{item.subject}</TableData>
                            <TableData>{item.seller_name}</TableData>
                            <TableData> {item.price_denomination} {item.price}</TableData>
                            <TableData><ViewButton onClick = {() => handleClick(item.book_id)} >View</ViewButton></TableData>
                        </TableRow>
                        <br />
                        </>
                    ) )
                }
                
            </CartItem>
        </Container>
    );
}

const Container = styled.div`
    margin: 30px 5%;
    background-color: white;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.3);
    padding: 20px;
    border-radius: 20px;
    overflow-x: scroll;
    min-height: 55vh;
`;

const Title = styled.div`
    text-align:center;
    font-weight: 600;
    color: blueviolet;
    margin-bottom: 20px;
    font-size: 18px;
`;

const CartItem = styled.table`
    overflow-x: scroll;
    
`;
const TableRow = styled.tr`
    margin-bottom: 30px;
    text-align:center;
    overflow-x: scroll;
    cursor: pointer;
`;

const TableHead = styled.th`
    min-width: 200px;
    width: 100%;
    max-width: 320px;
    overflow-x: scroll;
`;

const TableData = styled.td`
    overflow-x: scroll;
`;


const ViewButton = styled.button`
    padding: 5px 12px;
    color : white;
    background-color: orange;
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
`;