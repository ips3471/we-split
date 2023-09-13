import React from 'react';
import { Category } from '../../../interfaces/global';
import AccomodationIcon from 'jsx:./assets/accomodation.svg';
import EntertainmentIcon from 'jsx:./assets/entertainment.svg';
import TransportIcon from 'jsx:./assets/transport.svg';
import GroceriesIcon from 'jsx:./assets/groceries.svg';
import RestaurantsIcon from 'jsx:./assets/restaurants.svg';
type Props = {
	category: Category;
};

function CategoryIcon({ category }: Props) {
	const generateIcon = () => {
		switch (category.id) {
			case 'accomodation':
				return <AccomodationIcon />;
			case 'entertainment':
				return <EntertainmentIcon />;
			case 'transport':
				return <TransportIcon />;
			case 'groceries':
				return <GroceriesIcon />;
			case 'restaurants':
				return <RestaurantsIcon />;
		}
	};

	const icon = generateIcon();

	return icon;
}

export default CategoryIcon;
