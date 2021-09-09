import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import styled from "styled-components";
import AdminHeading from "../../../Components/AdminHeading/AdminHeading";
import Loading from "../../../Components/Loading/Loading";
import { SERVER_LINK } from "../../../Utils/constants";

export default function Recommendation() {
    const [subject, setSubject] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(true), 1200);
    }, []);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'subject'){
            setSubject(value.toLowerCase())
        }
    };
    return (
        <Container>
            <AdminHeading title='Recommendations' />
            {!loading ? (
                <Loading />
            ) : (
                <MainContainer>
                    <a
                        href={`${SERVER_LINK}/api/recommended/all/excel/`}
                        download>
                        <Button variant='contained' color='primary'>
                            Export All Recommendation
                        </Button>
                    </a>

                    <SelectContainer>
                        <DropDownContainer>
                        <label htmlFor='Select Subject'> Select Subject </label>
                        <CustomSelect onChange={handleChange} name='subject'>
                            <option value='' selected disabled hidden>
                                {" "}
                                --Select Here--
                            </option>
                            <option value='computer science'>
                                {" "}
                                computer science{" "}
                            </option>
                            <option value='physics'> Physics </option>
                            <option value='mechanical engineering'>
                                {" "}
                                mechanical engineering{" "}
                            </option>
                        </CustomSelect>
                        </DropDownContainer>
                        {subject.length > 0 && (<a
                            href={`${SERVER_LINK}/api/recommended/all/excel/${subject}`}
                            download >
                            <Button variant='contained' color='primary'>
                                Export Recommendation
                            </Button>
                        </a>)}
                    </SelectContainer>
                    
                </MainContainer>
            )}
        </Container>
    );
}

const Container = styled.div``;
const MainContainer = styled.div``;
const DropDownContainer = styled.div``;

const SelectContainer = styled.div`
    margin-top: 40px;
    display: flex;
`;

const CustomSelect = styled.select`
    font-size: 18px;
    padding: 5px;
    text-transform: capitalize;
    margin-left: 20px;
    margin-right: 40px;    
`;
