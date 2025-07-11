import Image from 'next/image';
import React from 'react';

export default function About() {
	return (
		<section>
			<div className='hidden md:block bg-[image:var(--about-bg)] bg-cover'>
				<div className='max-width !p-0 h-screen flex items-end justify-start'>
					<div className='bg-[var(--light-brown)] px-20 py-20'>
						<h2 className='font-[adevia] text-3xl leading-[100%] tracking-[0%] uppercase'>
							Hi, I’m Suhaib Humair
						</h2>
						<p className='font-[poppins-light] font-[275] text-base leading-[25px] tracking-[0%] uppercase mt-10 max-w-[400px]'>
							Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
							mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
							fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
							vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
							auctor ornare leo, non suscipit magna interdum eu. Curabitur
							pellentesque nibh nibh, at maximus ante.
						</p>
					</div>
				</div>
			</div>
			<div className='block md:hidden'>
				<div>
					<Image
						width={513}
						height={449}
						alt='about image'
						src={'/images/about-bg-mobile.png'}
						className='w-full'
					/>
				</div>
				<div className='bg-[var(--light-brown)] px-5 py-12'>
					<h2 className='font-[adevia] text-3xl leading-[100%] tracking-[0%] uppercase'>
						Hi, I’m Suhaib Humair
					</h2>
					<p className='font-[poppins-light] font-[275] text-base leading-[25px] tracking-[0%] uppercase mt-8'>
						Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
						mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
						fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
						vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
						ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
						nibh nibh, at maximus ante.
					</p>
				</div>
			</div>
		</section>
	);
}
