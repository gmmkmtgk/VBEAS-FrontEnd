import styled from "styled-components";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../api/api";
import BookWrapper from "../../Components/BookWrapper/BookWrapper";
import Loading from "../../Components/Loading/Loading";
import Filter from "../../Images/filter.png";


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
                            <FilterButton>
                                <FilterContainer>
                                    <img src={Filter} alt='err' />
                                </FilterContainer>
                                <p>Advanced Filters</p>
                            </FilterButton>
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

const TotalContainer = styled.div`
    margin-top: 30px ;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    >p{
        font-size: 28px;
    }
    letter-spacing: 1.4px;
    margin-bottom: 100px ;
`;
const TopContainer = styled.div``;

const FilterButton = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 1px solid blueviolet;
    padding: 8px 10px;
    font-size: 18px;
    cursor: pointer;
`;
const FilterContainer = styled.div`
    width: 18px;
    margin-right: 10px;
    > img {
        width: 100%;
        object-fit: contain;
        margin-top: 3px;
    }
`;
