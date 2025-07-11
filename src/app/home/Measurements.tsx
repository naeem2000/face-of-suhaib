import Image from 'next/image';
import React from 'react';
import { measurementData } from '../../../public/data';

export default function Measurements() {
	return (
		<section className='max-width !p-0 flex flex-col xl:flex-row bg-[var(--light-brown)] !pb-10 lg:!pb-14'>
			<div className='w-full xl:w-1/2 object-fill order-2 xl:order-1'>
				<div className='relative w-full hidden lg:block'>
					<Image
						src='/images/measurement-left.png'
						alt='measurement'
						width={785}
						height={772}
						className='w-full xl:max-w-[785px]'
					/>
				</div>
			</div>
			<div className='w-full xl:w-1/2 order-1 lg:order-2'>
				<div className='bg-[var(--black)] pt-8 pb-16 w-full'>
					<div className='border-t ml-auto border-t-white max-w-[200px] lg:max-w-[418px]' />
					<div className='flex items-center justify-center flex-col w-full text-white px-5'>
						<h2 className='text-[28px] lg:text-[55px] leading-[100%] tracking-[0%] uppercase font-[adevia] mt-8'>
							Measurements
						</h2>
						<div className='flex justify-between items-start w-[366px]'>
							<div className='flex flex-col justify-between'>
								{measurementData.firstCol.map((item, index) => {
									return (
										<div
											key={index}
											className={`${index > 0 ? 'mt-8' : 'mt-6'}`}
										>
											<p className='font-medium text-[15px] lg:text-base leading-[100%] tracking-[0%]'>
												{item.label}
											</p>
											<p className='font-light text-[15px] lg:text-base leading-[100%] tracking-[0%] mt-2.5'>
												{item.value}
											</p>
										</div>
									);
								})}
							</div>
							<div className='flex flex-col justify-between'>
								{measurementData.secondCol.map((item, index) => {
									return (
										<div
											key={index}
											className={`${index > 0 ? 'mt-8' : 'mt-6'}`}
										>
											<p className='font-medium text-[15px] lg:text-base leading-[100%] tracking-[0%]'>
												{item.label}
											</p>
											<p className='font-light text-[15px] lg:text-base leading-[100%] tracking-[0%] mt-2.5'>
												{item.value}
											</p>
										</div>
									);
								})}
							</div>
							<div className='flex flex-col justify-between'>
								{measurementData.thirdCol.map((item, index) => {
									return (
										<div
											key={index}
											className={`${index > 0 ? 'mt-8' : 'mt-6'}`}
										>
											<p className='font-medium text-[15px] lg:text-base leading-[100%] tracking-[0%]'>
												{item.label}
											</p>
											<p className='font-light text-[15px] lg:text-base leading-[100%] tracking-[0%] mt-2.5'>
												{item.value}
											</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
				<div className='block lg:hidden w-full'>
					<Image
						src='/images/measurement-left.png'
						alt='measurement'
						width={390}
						height={505}
						className='object-contain w-full'
					/>
				</div>
				<div className='flex w-full justify-end order-1 xl:order-2'>
					<Image
						src='/images/measurement-1.png'
						alt='measurement'
						width={338}
						height={363}
						className='w-1/2 xl:w-full h-auto xl:h-[330px]'
					/>

					<Image
						src='/images/measurement-2.png'
						alt='measurement'
						width={338}
						height={363}
						className='w-1/2 xl:w-full h-auto xl:h-[330px]'
					/>
				</div>
			</div>
		</section>
	);
}
