import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api/api";
import { openAlert } from "../../redux/alert/alert.actions";
import {setStalls} from "../../redux/stalls/stalls.actions";
import GridWrapper from "../GridWrapper/GridWrapper";
import SectionCard from "../SectionCard/SectionCard";
import StallsCard from "../StallsCard/StallsCard";
import Loading from '../Loading/Loading';

export default function StallsComponent() {
    const stalls = useSelector(state => state.stalls);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const fetchStalls = () => {
        if( stalls.data === null  ){
            api.get('seller/')
            .then(res => {
                dispatch(setStalls(res.data))
                setLoading(false)
            })
            .catch(err => {
                console.log(err.message)
                dispatch(openAlert({
                    open:true,
                    severity:"error",
                    text:"Something Wrong with the Server, Contact Library Adminstration."
                }))
            })
        }
    }
    useEffect(()=> {
        fetchStalls();// eslint-disable-next-line
    },[]);
    return (
        <SectionCard
            title='Virtual Stalls'
            desc='All the Participating Book Sellers'>
            
                { loading 
                ?
                    <Loading />
                :(
                    <GridWrapper>
                        {stalls.data?.map(item => <StallsCard key = {item.id} id = {item.id} name = {item.name} logo = {item.logo} />)}
                    </GridWrapper>
                ) }
        </SectionCard>
    );
}

