'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import React from 'react';
import 'swiper/css';

export default function Editorial() {
	return (
		<section className='bg-[var(--light-brown)] relative py-20 overflow-hidden'>
			<div className='max-width'>
				<div className='flex items-center justify-center flex-col relative'>
					<h1 className='font-[adevia] text-[50px] leading-[100%] tracking-[0%] uppercase'>
						Hi, My name is SuhaiB HAIMUR
					</h1>
					<p className='font-[275] text-xl leading-[100%] tracking-[0%] uppercase mt-5'>
						editorial
					</p>
				</div>
				<div className='relative'>
					<Swiper
						modules={[Navigation]}
						spaceBetween={50}
						slidesPerView={3}
						navigation
						className='!overflow-visible mt-20'
					>
						<SwiperSlide>Slide 1</SwiperSlide>
						<SwiperSlide>Slide 2</SwiperSlide>
						<SwiperSlide>Slide 3</SwiperSlide>
						<SwiperSlide>Slide 4</SwiperSlide>
						<SwiperSlide>Slide 1</SwiperSlide>
						<SwiperSlide>Slide 2</SwiperSlide>
						<SwiperSlide>Slide 3</SwiperSlide>
						<SwiperSlide>Slide 4</SwiperSlide>
						<SwiperSlide>Slide 1</SwiperSlide>
						<SwiperSlide>Slide 2</SwiperSlide>
						<SwiperSlide>Slide 3</SwiperSlide>
						<SwiperSlide>Slide 4</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
}
