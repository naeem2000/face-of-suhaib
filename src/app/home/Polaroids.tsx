import Image from 'next/image';
import React from 'react';
import { polaroidImages } from '../../../public/data';

export default function Polaroids() {
	return (
		<section className='bg-[var(--light-brown)] py-12'>
			<div className='max-w-screen-xl mx-auto px-4'>
				<h2 className='text-center text-[50px] leading-none tracking-tight uppercase font-[adevia] mb-12'>
					Polaroids
				</h2>

				<div className='grid grid-cols-2 md:grid-cols-5 justify-items-center'>
					{polaroidImages.slice(0, 5).map((item, index) => (
						<div
							key={index}
							className={`w-full aspect-[3/4] overflow-hidden ${
								index === 4 ? 'hidden md:block' : 'block'
							}`}
						>
							<Image
								width={500}
								height={500}
								src={item.image}
								alt={item.alt}
								className='w-full h-full object-cover hover:scale-125 transition-all duration-300'
							/>
						</div>
					))}
				</div>

				<div className='hidden lg:grid grid-cols-1 sm:grid-cols-3 justify-items-center'>
					{polaroidImages.slice(5).map((item, index) => (
						<div key={index} className='w-full aspect-[3/4] overflow-hidden'>
							<Image
								width={500}
								height={500}
								src={item.image}
								alt={item.alt}
								className='w-full h-full object-cover hover:scale-125 transition-all duration-300'
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
