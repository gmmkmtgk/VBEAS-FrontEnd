import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import api from "../../api/api";
import Loading from "../../Components/Loading/Loading";
import { useDispatch, useSelector } from 'react-redux';
import { setBook } from "../../redux/book/book.actions";
import { device } from "../../devices";

export default function Book() {
    const user = useSelector(state => state.user);
    let { id } = useParams();
    const book = useSelector(state => state.book);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchBook = () => {
            api.get(`book/${id}`)
            .then(res => {
                dispatch(setBook(res.data.data[0]));
                setLoading(false);
            })
            .catch(err => {
                toast.error("Something Went Wrong")
            })
        }
        if(book === null) fetchBook();
    }, []);
    const handleClick = () => {
        if( !user ) {
            return toast.error("You must login with your LNMIIT ID to recommend the Book. ")
        }
        else {
            const data = {
                book_id:book.id,
                email:user.email,
                name:user.full_name,
            }
            api
            .post('/recommend/', data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            return toast.info("Thanks for recommending the Book, Library authority will get back to you soon.")
        }
    }
    console.log(book);
    if( !loading ) <Loading />
    return (
        <Container>
            <ImageContainer>
                <img src = {book?.image} alt = 'err' />
            </ImageContainer>
            <DataContainer>
                <h1>{book?.title}</h1>
                <p>by {book?.author}</p>
                <p>Year: {book?.year_of_publication}</p>
                <PriceContainer>
                    <Price>&#x20B9;{book?.expected_price}</Price>
                    <Mrp>&#x20B9;{book?.price}</Mrp>
                    <Discount>{book?.discount}% off</Discount>
                </PriceContainer>
                <RecommendButton onClick = {handleClick} >Recommend to Library</RecommendButton>
            </DataContainer>
        </Container>
    )
};

const Container = styled.div`
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);
    margin: 40px 5%;
    border-radius: 20px;
    padding: 30px 30px;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-gap: 30px;
    @media ${device.tablet}{
        display: flex;
        flex-direction:column;
        align-items: center;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height:550px;
    >img{
        width: 100%;
        height:100%;
        object-fit: fill;
        border-radius: 20px;
    }
    @media ${device.tablet}{
        >img{
            width: 100%;
            height:100%;
            object-fit: fill;
            border-radius: 20px;
            max-height: 320px;
        }
        max-height: 320px;
    }
`;
const DataContainer = styled.div`
    text-align:center;
    padding-bottom: 80px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    >h1{
        margin-bottom: 20px;
        letter-spacing: 1.2px;
    }
    >p{
        font-size: 18px;
        letter-spacing: 1.2px;
        margin-bottom: 8px;
    }
`;
const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 25px;
    > p {
        letter-spacing: 1.2px;
        margin: 5px 8px;
    }
`;
const RecommendButton = styled.button`
    background-color: white;
    padding: 10px 12px;
    font-size: 20px;
    letter-spacing: 2px;
    border-radius: 10px;
    border: 1px solid blueviolet;
    color: blueviolet;
    cursor: pointer;
    transition: all 0.2s ease-in;
    :hover{
        color: white;
        background-color: blueviolet;
    }
`;

const Price = styled.p`
    font-size: 20px;
    font-weight: bold;
`;
const Mrp = styled.p`
    color: #a5a5a5;
    text-decoration: line-through;
    font-size: 16px;
`;
const Discount = styled.span`
    margin-left: 20px;
    color: orange;
    font-weight: bold;
    font-size: 16px;
`;


