import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "../../assets/img/slider-bg.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
export default function Banner() {

  const [isPrevSlide, setIsPrevSlide] = useState(true);
  const [isNextSlide, setIsNextSlide] = useState(false);
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      setIsPrevSlide(swiperInstance.isBeginning);
      setIsNextSlide(swiperInstance.isEnd);
    }
  }, []);
  const prevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const nextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const handleSlideChange = () => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      setIsPrevSlide(swiperInstance.isBeginning);
      setIsNextSlide(swiperInstance.isEnd);
    }
  };
  const bannercards = [
    {
      title: "A golden opportunity!",
      des: "Precious metal reaches a historic high. Trade Gold CFDs with ultra low spreads and optimal tradingconditions",
      img: image1,
      url: ""
    },
    {
      title: "A golden opportunity!",
      des: "Precious metal reaches a historic high. Trade Gold CFDs with ultra low spreads and optimal tradingconditions",
      img: image1,
      url: ""
    },
    {
      title: "A golden opportunity!",
      des: "Precious metal reaches a historic high. Trade Gold CFDs with ultra low spreads and optimal tradingconditions",
      img: image1,
      url: ""
    },
    {
      title: "A golden opportunity!",
      des: "Precious metal reaches a historic high. Trade Gold CFDs with ultra low spreads and optimal tradingconditions",
      img: image1,
      url: ""
    },
    {
      title: "A golden opportunity!",
      des: "Precious metal reaches a historic high. Trade Gold CFDs with ultra low spreads and optimal tradingconditions",
      img: image1,
      url: ""
    },
  ]
  return (
    <div className="banner">
      <div className="banner-area w-100 position-relative z-0">
        <Swiper pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          loop={true}
          onSlideChange={handleSlideChange}
          ref={swiperRef}
          centeredSlides={false}
          className="mySwiper">
          {bannercards?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="main-section" style={{backgroundImage: `url(${item.img})`}}>
                  <div className="slider-content d-flex align-items-center mx-auto ">
                    <div className='slider-content-text '>
                      <h2 className='mb-2 mb-md-3'>{item?.title}</h2>
                      <p className='mb-3 mb-md-4'>{item?.des}</p>
                      <Link  to={`${item?.url}`} className='btn mx-auto mx-xl-0 '>Seize your golden chance!</Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="swiper-nav d-flex align-items-center justify-content-center gap-2" data-aos="fade-up" data-aos-duration="" data-aos-delay="" data-aos-offset="0">
          <button className="  nav1 position-absolute z-2 top-50 translate-middle-y border-0 d-flex align-items-center justify-content-center me-1 p-0" title='previous' onClick={prevSlide} disabled={isPrevSlide}>
          <svg width="22" height="36" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.7168 18.0117L4.2168 0.511719L0.716797 4.01172L14.7168 18.0117L0.716797 32.0117L4.2168 35.5117L21.7168 18.0117Z" fill="white" />
            </svg>
          </button>
          <button className="nav2 position-absolute z-2  top-50 translate-middle-y d-flex align-items-center justify-content-center p-0 border-0" title='previous' onClick={nextSlide} disabled={isNextSlide}>
            <svg width="22" height="36" viewBox="0 0 22 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.7168 18.0117L4.2168 0.511719L0.716797 4.01172L14.7168 18.0117L0.716797 32.0117L4.2168 35.5117L21.7168 18.0117Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
