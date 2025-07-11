import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
	return (
		<footer className='bg-[var(--black)]'>
			<div className='max-width flex items-center justify-center flex-col pt-11 pb-6'>
				<Image src={'/images/logo.png'} alt='logo' height={74} width={77} />
				<p className='font-[poppins] text-sm leading-[100%] tracking-[3%] text-white my-7 max-w-[150px] text-center lg:max-w-full'>
					The Face Behind Every Frame
				</p>
				<div className='flex gap-6'>
					<Link href={''} target='_blank'>
						<Image
							src={'/images/Instagram.svg'}
							alt='Instagram'
							height={16}
							width={16}
						/>
					</Link>
					<Link href={''} target='_blank'>
						<Image
							src={'/images/Facebook.svg'}
							alt='Facebook'
							height={16}
							width={9}
						/>
					</Link>
				</div>
				<div className='w-full border-t border-t-[var(--border)] h-[1px] my-6' />
				<p className='text-xs leading-5 tracking-[0%] uppercase font-[poppins] font-normal text-white'>
					2025 © Face of suhaib
				</p>
			</div>
		</footer>
	);
}
