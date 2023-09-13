import React, { useState } from 'react';
import ImageSlider from '../image-slider/image-slider';
import { ImageData } from '../../interfaces/global';
import CardsContainer from './cards-container/cards-container';

type Props = {};

function Overview({}: Props) {
	const [images, setImages] = useState<ImageData[]>([]);
	return (
		<>
			<div className='relative'>
				<ImageSlider slides={images} />
			</div>
			<CardsContainer />

			<button
				className={`p-3 mb-8 w-28 disableToSelect mx-auto rounded-3xl shadow-lg bg-white text-orange-600`}
			>
				Settle up
			</button>
		</>
	);
}

export default Overview;
