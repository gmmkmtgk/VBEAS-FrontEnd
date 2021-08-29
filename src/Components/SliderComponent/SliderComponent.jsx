import styled from "styled-components";
import Slider from "react-slick";
import One from "../../Images/slider/one.jpeg";
import Two from "../../Images/slider/two.jpeg";
import Three from "../../Images/slider/three.jpeg";
import Four from "../../Images/slider/four.jpeg";
import Five from "../../Images/slider/five.jpeg";
import Six from "../../Images/slider/six.jpeg";
import Seven from "../../Images/slider/seven.jpeg";

export default function SliderComponent() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        lazyLoad: true,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const Data = [
        {
            id: Math.random() * 1000,
            img: One,
        },
        {
            id: Math.random() * 1000,
            img: Two,
        },
        {
            id: Math.random() * 1000,
            img: Three,
        },
        {
            id: Math.random() * 1000,
            img: Four,
        },
        {
            id: Math.random() * 1000,
            img: Five,
        },
        {
            id: Math.random() * 1000,
            img: Six,
        },
        {
            id: Math.random() * 1000,
            img: Seven,
        },
    ];
    return (
        <Container>
            <Slider {...settings}>
                {Data?.map((item) => (
                    <Slide>
                        <img src={item.img} alt='err' />
                    </Slide>
                ))}
            </Slider>
        </Container>
    );
}

const Container = styled.div`
    margin-bottom: 30px;
`;
const Slide = styled.div`
    width: 100%;
    height: 300px;
    padding: 20px;
    > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
