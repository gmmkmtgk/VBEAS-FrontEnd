import GridWrapper from "../GridWrapper/GridWrapper";
import SectionCard from "../SectionCard/SectionCard";
import StallsCard from "../StallsCard/StallsCard";
import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";
import api from "../../api/api";
import { toast } from "react-toastify";
export default function StallsComponent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchSeller = async () => {
            api
            .get('/sellers/all')
            .then(res => {
                console.log(res);
                const data = res.data.data;
                setData(data);
                setLoading(false);
            })
            .catch(err => toast.error('Something went wrong, Maybe the Server is down!'));
        }
        fetchSeller();
    }, []);
    console.log(data);
    return (
        <SectionCard
            title='Virtual Stalls'
            desc='All the Participating Book Sellers'>
            <GridWrapper>
                {loading ? (
                    <Loading />
                ) : (
                    data?.map((item) => (
                        <StallsCard key={item.id} {...item} />
                    ))
                )}
            </GridWrapper>
        </SectionCard>
    );
}
