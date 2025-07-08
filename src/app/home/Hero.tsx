import Image from 'next/image';
import React from 'react';

export default function Hero() {
	return (
		<section className='min-h-screen bg-[var(--coal)] flex items-center justify-center'>
			<div className='max-width flex items-center justify-center'>
				<Image src={'/images/logo.png'} alt='logo' height={127} width={132} />
			</div>
		</section>
	);
}
