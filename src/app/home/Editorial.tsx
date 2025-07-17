'use client';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import React from 'react';
import { marqueeImages } from '../../../public/data';

export default function Editorial() {
	return (
		<section className='bg-[var(--light-brown)] py-10 lg:py-20'>
			<div className='max-width flex items-center lg:items-end justify-between'>
				<Image
					src={'/images/arrow-left.png'}
					alt='left'
					width={46}
					height={46}
					className='w-[30px] lg:w-[46px]'
				/>
				<div className='flex items-center justify-center flex-col'>
					<h1 className='font-[adevia] text-xl text-center lg:text-[50px] leading-[100%] tracking-[0%] uppercase'>
						Hi, My name is SuhaiB HAIMUR
					</h1>
					<p className='font-[275] font-[poppins-light] text-xl leading-[100%] tracking-[0%] uppercase mt-5'>
						editorial
					</p>
				</div>
				<Image
					src={'/images/arrow-left.png'}
					alt='right'
					width={46}
					height={46}
					className='rotate-180 w-[30px] lg:w-[46px]'
				/>
			</div>
			<Marquee className='mt-20' speed={60}>
				{marqueeImages.map((item, index) => {
					return (
						<Image
							className='mx-5 w-[350px] h-[411px] object-cover'
							key={index}
							src={item.image}
							alt={item.alt}
							width={350}
							height={411}
						/>
					);
				})}
			</Marquee>
		</section>
	);
}
