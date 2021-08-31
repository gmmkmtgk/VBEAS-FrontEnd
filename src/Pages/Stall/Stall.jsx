import styled from "styled-components";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../api/api";
import BookWrapper from "../../Components/BookWrapper/BookWrapper";
import Loading from "../../Components/Loading/Loading";

export default function Stall({ match }) {
    const id = match.params.id;
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sellerName, setSellerName] = useState("");

    const fetchBooks = async () => {
        setLoading(true);
        await api
            .get(`/seller/filter/${id}`)
            .then((res) => {
                const values = res.data;
                setSellerName(values.seller);
                setBooks(values.data);
                setLoading(false);
            })
            .catch((err) => toast.error("Something Went Wrong"));
    };

    useEffect(() => {
        fetchBooks(); // eslint-disable-next-line
    }, []);

    return (
        <Container>
            <TitleContainer>
                <h2>{`${sellerName} Books`}</h2>
            </TitleContainer>
            <TopContainer>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <TotalContainer>
                            <p>Total Books Found {books.length}</p>
                        </TotalContainer>
                        <BookWrapper data={books} />
                    </>
                )}
            </TopContainer>
        </Container>
    );
}

const Container = styled.div`
    margin-top: 20px;
    padding: 2% 5%;
    @media screen and (max-width: 1250px) {
        padding: 2% 2%;
    }
`;

const TitleContainer = styled.div`
    text-align: center;
    color: blueviolet;
    font-weight: 500;
`;

const TotalContainer = styled.div``;
const TopContainer = styled.div``;



