import styled from "styled-components";
import { device, devicesSmall } from "../../devices";

export default function SectionCard({children, title, desc, heading}) {
    return (
        <Wrapper heading = {heading} >
            <ContainerTitle>
                <span>{title}</span>
                <h1>{desc}</h1>
            </ContainerTitle>
            <ChildrenComponent>
                {children}
            </ChildrenComponent>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 15px;
    margin: 180px 30px 30px 30px;
    margin-top: ${props => props.heading && "40px"};
    border-width: 10px;
    box-shadow: 4px 4px 24px rgba(25, 25, 25, 0.2);
    backdrop-filter: blur(4px);
    /* background: rgba(251, 251, 252, 0.15);
     */
    background-color: white !important;
    border-radius: 48px;
    height: auto;
    transition: all 0.4s ease-in-out;
    border-image-source: linear-gradient(329.91deg, #00FFFF 0.98%, rgba(251, 251, 252, 0) 54.26%, #9E23FF 98.77%);
    @media ${device.tablet}
    {
        margin: 150px 10px 30px 10px;
        margin-top: ${props => props.heading && "40px"};
    }
    @media ${devicesSmall.tablet}
    {
        padding: 25px;
    }
    @media ${devicesSmall.laptop}
    {
        padding: 40px;
    }
`;

const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    >span{
        font-family: var(--font-main);
        font-style: normal;
        font-weight: normal;
        font-size: 21px;
        line-height: 31px;
        letter-spacing: -0.002em;
        color: #9E23FF;
        margin-bottom: 10px;
    }
    >h1{
        width: 100%;
        max-width: 428px;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
    }
`;

const ChildrenComponent = styled.div`
    margin-top: 50px;
`;