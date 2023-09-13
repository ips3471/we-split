import React, { useState } from 'react';
import { ImageData } from '../../interfaces/global';
import Placeholder from 'jsx:./assets/placeholder.svg';
import Carousel from 'nuka-carousel';

type Props = {
	slides: ImageData[];
};

function ImageSlider({ slides }: Props) {
	return (
		<Carousel withoutControls disableEdgeSwiping wrapAround={slides.length > 1}>
			{slides.length > 0 ? (
				slides.map(slide => (
					<img className='max-h-44 object-cover w-full' src={slide.url} />
				))
			) : (
				<Placeholder />
			)}
		</Carousel>
	);
}

export default ImageSlider;
