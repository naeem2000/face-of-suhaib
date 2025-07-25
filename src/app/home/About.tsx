'use client';
import Image from 'next/image';
import React from 'react';

export default function About() {
	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const [showModal, setShowModal] = React.useState(false);

	const openModal = () => {
		setShowModal(true);
		setTimeout(() => setIsModalOpen(true), 10); // allow CSS transition to trigger
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setTimeout(() => setShowModal(false), 200); // matches fade duration
	};
	return (
		<section className='relative'>
			{showModal && (
				<div
					className={`fixed inset-0 z-50 flex items-center justify-center px-5 xl:px-0 transition-opacity duration-300 ${
						isModalOpen
							? 'opacity-100 pointer-events-auto'
							: 'opacity-0 pointer-events-none'
					}`}
				>
					<div className='relative w-full h-full max-w-[1200px] max-h-[700px] bg-[var(--dark-brown)] flex items-center justify-center rounded-[10px]'>
						<button
							className='cursor-pointer absolute right-5 top-5 z-50 mix-blend-difference'
							onClick={closeModal}
						>
							<Image
								src={'/images/close-icon.svg'}
								width={40}
								height={40}
								alt='close'
							/>
						</button>
						<video
							src='/videos/modal.mp4'
							autoPlay
							controls
							className='w-full h-full object-cover rounded-[10px]'
						/>
					</div>
				</div>
			)}

			<div className='hidden md:block bg-[image:var(--about-bg)] bg-cover'>
				<div className='max-width !p-0 h-screen flex items-end justify-start'>
					<div className='bg-[var(--light-brown)] p-12 w-[600px]'>
						<h2 className='font-[adevia] text-3xl leading-[100%] tracking-[0%] uppercase'>
							Hi, I’m Suhaib Haimur
						</h2>
						<p className='font-[poppins-light] font-[275] text-base leading-[25px] tracking-[0%] uppercase mt-10 '>
							A bilingual model and actor dedicated to embodying stories that
							resonate, both fluent in English and Arabic.
							<br /> <br />
							Working across brands has taught me the language of detail, and
							only few truly understand. Whether it’s movement, presence, or
							creativity infront of the lens, I know how to deliver nuance with
							intention.
							<br /> <br />
							Rooted in Jordan and educated in Environmental Geography (BCom), I
							carry with me both structure and soul — and I’m here to challenge
							what the world expects from Arab men in fashion, film, and
							storytelling.
							<br /> <br />
							I’m here to create work that transcends borders.
						</p>
						<button
							onClick={openModal}
							className='bg-black text-white cursor-pointer font-normal text-base leading-[100%] tracking-[0%] uppercase font-[poppins] px-11 py-5 rounded-[10px] mt-6'
						>
							Play Video
						</button>
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
						Hi, I’m Suhaib Haimur
					</h2>
					<p className='font-[poppins-light] font-[275] text-base leading-[25px] tracking-[0%] uppercase mt-8'>
						A bilingual model and actor dedicated to embodying stories that
						resonate, both fluent in English and Arabic.
						<br /> <br />
						Working across brands has taught me the language of detail, and only
						few truly understand. Whether it’s movement, presence, or creativity
						infront of the lens, I know how to deliver nuance with intention.
						<br /> <br />
						Rooted in Jordan and educated in Environmental Geography (BCom), I
						carry with me both structure and soul — and I’m here to challenge
						what the world expects from Arab men in fashion, film, and
						storytelling.
						<br /> <br />
						I’m here to create work that transcends borders.
					</p>
					<button
						onClick={openModal}
						className='bg-black text-white cursor-pointer font-normal text-base leading-[100%] tracking-[0%] uppercase font-[poppins] px-11 py-5 rounded-[10px] mt-6'
					>
						Play Video
					</button>
				</div>
			</div>
		</section>
	);
}
