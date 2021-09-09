import { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../api/api";
import Loading from "../../Components/Loading/Loading";
import useQuery from "../../Hooks/useQuery";
import Filter from "../../Images/filter.png";
import { toast } from "react-toastify";
import BookWrapper from "../../Components/BookWrapper/BookWrapper";
import { useHistory } from "react-router";
import queryString from "../../Utils/queryString";
import FilterModal from "../../Components/FilterModal/FilterModal";
export default function Books() {
    const history = useHistory();
    const [books, setBooks] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(0);
    const [open, setOpen] = useState(false);
    let query = useQuery();
    let q = query.get("q");
    let page_number = query.get("page_number");
    let filter_by_subject = query.get("filter_by_subject");
    let sort_by = query.get("sort_by");
    let order_by = query.get("order_by");

    let context = {
        q: q,
        page_number: page_number,
    };
    if (filter_by_subject !== null) {
        context = {
            ...context,
            filter_by_subject: filter_by_subject,
        };
    }

    if (sort_by !== null && order_by !== null) {
        context = {
            ...context,
            sort_by: sort_by,
            order_by: order_by,
        };
    }
    useEffect(() => {
        const fetchBooks = async () => {
            await api
                .post("/books/", context)
                .then((res) => {
                    setLoading(false);
                    const data = res.data;
                    setCount(data.count);
                    setBooks(data.data);
                    setTotalPage(data.total_page);
                    setPage(page_number);
                })
                .catch((err) => {
                    toast.error(
                        "Something Went Wrong, Maybe the Server is down."
                    );
                });
        };
        fetchBooks();
    }, [page, q, filter_by_subject, sort_by, order_by]);

    const handlePage = (page) => {
        setPage(page);
        context = {
            ...context,
            page_number: page,
        };
        const query = queryString(context);
        history.push({
            pathname: "/books",
            search: "?" + query,
        });
    };

    const handleClose = () => {
        setOpen(false);
    };

    if (loading) return <Loading />;
    return (
        <Container>
            <TopContainer>
                <HeaderContainer>
                    <h2>{`Showing Results for : ${q} `}</h2>
                    {count > 0 ? (<p>Total {count} Books Found</p>) : <p>Total 0 Books Found</p>}
                </HeaderContainer>
                <FilterButton onClick={() => setOpen(true)}>
                    <FilterContainer>
                        <img src={Filter} alt='err' />
                    </FilterContainer>
                    <p>Advanced Filters</p>
                </FilterButton>
            </TopContainer>
            {count > 0 ? (
                <BookWrapper
                    page={page}
                    totalPage={totalPage}
                    handlePage={handlePage}
                    data={books}
                />
            ) : (
                <BooksContainer>
                    <NothingFound>Nothing Found</NothingFound>
                </BooksContainer>
            )}
            <FilterModal
                redirectUri='books'
                context={context}
                open={open}
                handleClose={handleClose}
            />
        </Container>
    );
}

const Container = styled.div`
    padding: 2% 5%;
    @media screen and (max-width: 1250px) {
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
    @media screen and (max-width: 560px) {
        padding: 0% 5%;
    }
    @media screen and (max-width: 1170px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 870px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 560px) {
        grid-template-columns: 1fr;
    }
`;

const NothingFound = styled.div``;
