import React from 'react';

export default function Hero() {
	return (
		<section className='relative min-h-screen bg-black overflow-hidden'>
			<video
				className='absolute inset-0 w-full h-full object-cover z-0'
				src='/videos/hero.mp4'
				autoPlay
				loop
				muted
				playsInline
			/>
		</section>
	);
}
