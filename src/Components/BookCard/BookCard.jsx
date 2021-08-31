import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { CLIENT_LINK } from "../../Utils/constants";
import useWindowDimensions from "../../Hooks/useDimensions";
import { useDispatch } from 'react-redux';
import { setBook } from "../../redux/book/book.actions";

export default function BookCard(props) {
    const { height , width } = useWindowDimensions();
    const history = useHistory();
    const dispatch = useDispatch();
    const handleClick = () => {
        if( width > 768 ) window.open(`${CLIENT_LINK}/book/${id}`);
        else {
            dispatch(setBook(props));
            history.push(`book/${id}`)
        }
    }
    const {image, subject, title, author, price, expected_price, discount, id} = props;
    return (
        <Container onClick = {handleClick} >
            <ImageContainer>
                <img src={image} alt='err' />
            </ImageContainer>
            <BookDetails>
                <p>{subject}</p>
                <h2>{title.length > 42 ? title.substring(0, 40)+'...' : title}</h2>
                <Author>{author}</Author>
                <PriceContainer>
                    <Price>&#x20B9;{Math.round(expected_price)}</Price>
                    <Mrp>&#x20B9;{Math.round(price)}</Mrp>
                    <Discount>{discount}% off</Discount>
                </PriceContainer>
            </BookDetails>
        </Container>
    );
}

const Container = styled.div`
    /* box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3); */
    padding: 2px 2px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    :hover{
        box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 350px;
    > img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        border-radius: 10px;
    }
`;

const BookDetails = styled.div`
    margin-top: 15px;
    > p:nth-child(1) {
        color: blueviolet;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1.4px;
    }
    > p:nth-child(2) {
        color: blueviolet;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1.4px;
    }
    > h2 {
        font-family: var(--font-text);
        font-size: 20px;
        font-weight: 600;
        margin-top: 6px;
    }
`;

const Author = styled.p`
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #a5a5a5;
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    > p {
        letter-spacing: 1.2px;
        margin: 5px 8px;
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
