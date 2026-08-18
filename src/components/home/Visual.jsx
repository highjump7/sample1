import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const slides = [1, 2, 3, 4];

const Visual = () => (
    <section className="visual" aria-label="주요 상품 이미지">
        <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        >
            {slides.map((number) => (
                <SwiperSlide key={number}>
                    <img
                        src={`${import.meta.env.BASE_URL}images/visual${number}.webp`}
                        alt={`주요 상품 이미지 ${number}`}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
);

export default Visual;
