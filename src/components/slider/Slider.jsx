import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './slider.css'
import pixel9Pro from '../../assets/images/Google-Pixel-9-Pro-Fold_1.webp'
import appleWatch from '../../assets/images/347259085956453.jpeg'
import asus from '../../assets/images/a0f9645cba65c730a4d31062d86df557.jpg'
import samsung from '../../assets/images/71f9394afceb1e0141aae34f6693224cf022c1f6.jpg'
import macBook from '../../assets/images/7132675644.jpg'

export const Slider = () => {
    return (
        <div className="slider_container">
            <h3 className="slider_title">Новинки и предложения</h3>
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                pagination={{ clickable: true }}
                className="swiper"
            >
                <SwiperSlide>
                    <img src={pixel9Pro} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={appleWatch} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={asus} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={samsung} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={macBook} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={appleWatch} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
