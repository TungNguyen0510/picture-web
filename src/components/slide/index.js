// Import Swiper React components
import { SLIDE_DATA } from "../../data/slide/"
import { Navigation, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles for moule
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
export function SliderComponent() {
    return (
        <Swiper
            modules={[Navigation, Scrollbar, A11y, Autoplay, EffectFade]}
            slidesPerView={1}
            navigation
            autoplay={true}
            effect="fade"
            scrollbar={{ draggable: true }}
            style={{
                padding: "32px 38px",
               
            }}
        >
            {SLIDE_DATA.map((img, index) => (
                <SwiperSlide key={index} >
                    <img src={img} width="100%" height="400px" alt={index} style={{ borderRadius: "16px",  boxShadow: "0 3px 6px rgba(0,0,0,.16)"}}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}