import styled from "styled-components";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../api/api";
import BookWrapper from "../../Components/BookWrapper/BookWrapper";
import Loading from "../../Components/Loading/Loading";
import Filter from "../../Images/filter.png";
import FilterModal from "../../Components/FilterModal/FilterModal";
import useQuery from "../../Hooks/useQuery";
import { useHistory } from "react-router";
import queryString from "../../Utils/queryString";

export default function Stall({ match }) {
    const history = useHistory();
    const [books, setBooks] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [sellerName, setSellerName] = useState("");
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(0);
    const [open, setOpen] = useState(false);

    let query = useQuery();
    let qid = query.get("qid");
    let page_number = query.get("page_number");
    let filter_by_subject = query.get("filter_by_subject");
    let sort_by = query.get("sort_by");
    let order_by = query.get("order_by");

    let context = {
        qid: qid,
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

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const fetchBooks = async () => {
            await api
                .post("/stalls/", context)
                .then((res) => {
                    setLoading(false);
                    const data = res.data;
                    setCount(data.count);
                    setBooks(data.data);
                    setTotalPage(data.total_page);
                    setPage(page_number);
                    setSellerName(data.seller);
                })
                .catch((err) => {
                    toast.error(
                        "Something Went Wrong, Maybe the Server is down."
                    );
                });
        };
        fetchBooks();
    }, [page, qid, filter_by_subject, sort_by, order_by]);

    const handlePage = (page) => {
        setPage(page);
        context = {
            ...context,
            page_number: page,
        };
        const query = queryString(context);
        history.push({
            pathname: "/stalls",
            search: "?" + query,
        });
    };

    console.log(books);

    return (
        <Container>
            <TitleContainer>
                <h2>{sellerName}</h2>
            </TitleContainer>
            <TopContainer>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <TotalContainer>
                            <p>Total Books Found {count}</p>
                            <FilterButton onClick={() => setOpen(true)}>
                                <FilterContainer>
                                    <img src={Filter} alt='err' />
                                </FilterContainer>
                                <p>Advanced Filters</p>
                            </FilterButton>
                        </TotalContainer>
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
                    </>
                )}
            </TopContainer>
            <FilterModal
                redirectUri='stalls'
                context={context}
                open={open}
                handleClose={handleClose}
            />
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
    margin-top: 30px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    > p {
        font-size: 28px;
    }
    letter-spacing: 1.4px;
    margin-bottom: 100px;
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
