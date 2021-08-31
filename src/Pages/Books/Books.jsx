import { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../api/api";
import Loading from "../../Components/Loading/Loading";
import useQuery from "../../Hooks/useQuery";
import queryCleaner from "../../Utils/queyCleaner";
import Filter from "../../Images/filter.png";
import { toast } from "react-toastify";
import BookWrapper from "../../Components/BookWrapper/BookWrapper";
export default function Books() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    let query = useQuery();
    let search = query.get("search");
    let searchArr = queryCleaner(search);

    useEffect(() => {
        setLoading(true);
        const fetchBooks = async () => {
            await api
                .post("/search/", searchArr)
                .then((res) => {
                    setLoading(false);
                    const data = res.data.data;
                    setData(data);
                })
                .catch((err) => {
                    toast.error('Somthing went Wrong.')
                });
        };
        fetchBooks();
    }, [search]);
    if (loading) return <Loading />;
    return (
        <Container>
            <TopContainer>
                <HeaderContainer>
                    <h2>{`Showing Results for : "${searchArr[0].value}"`}</h2>
                    <p>Total {data?.length} Books Found</p>
                </HeaderContainer>
                <FilterButton>
                    <FilterContainer>
                        <img src={Filter} alt='err' />
                    </FilterContainer>
                    <p>Advanced Filters</p>
                </FilterButton>
            </TopContainer>
            {data.length > 0 ? (
                <BookWrapper data = {data} />
            ) : (
                <BooksContainer>
                    <NothingFound>
                        Nothing Found
                    </NothingFound>
                </BooksContainer>
            )}
        </Container>
    );
}

const Container = styled.div`
    padding: 2% 5%;
    @media screen and (max-width:1250px){
        padding: 2% 2%;
    }
`;
const TopContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;
const HeaderContainer = styled.div`
    font-size: 22px;
    > p {
        font-size: 18px;
        font-family: var(--font-text);
        letter-spacing: 1.4px;
        margin-top: 8px;
        color: blueviolet;
    }
`;
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

const BooksContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 50px;
    margin: 50px 0px 0px 0px;
    transition: all 0.3s ease-in-out;
    @media screen and (max-width:560px){
        padding: 0% 5%;
    }
    @media screen and (max-width:1170px){
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width:870px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width:560px){
        grid-template-columns: 1fr;
    }
`;

const NothingFound = styled.div``;
