import styled from "styled-components";
import BookCard from "../BookCard/BookCard";
import { Pagination } from "@material-ui/lab";
import { useState } from "react";
import { USER_PER_PAGE } from "../../Utils/constants";

export default function BookWrapper({ data }) {
    let totalPages = Math.ceil(data.length / USER_PER_PAGE);
    const [page, setPage] = useState(1);

    const startIndex = (page - 1) * USER_PER_PAGE;
    const currentBooks = data.slice(startIndex, startIndex + USER_PER_PAGE);

    const handlePagination = (event, page) => {
        scrollToTop();
        setPage(page);
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
    };

    return (
        <>
            <BooksContainer>
                {currentBooks?.map((item) => (
                    <BookCard key={item.id} {...item} />
                ))}
            </BooksContainer>
            <PaginationContainer>
                <Pagination
                    size='large'
                    count={totalPages}
                    onChange={handlePagination}
                    variant='outlined'
                    color='primary'
                    showFirstButton
                    showLastButton
                />
            </PaginationContainer>
        </>
    );
}

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

const PaginationContainer = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
`;
