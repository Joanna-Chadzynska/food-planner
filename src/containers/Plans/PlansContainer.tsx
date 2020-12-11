import React from 'react';
import { Buttons } from './components';

export interface PlansContainerProps {}

const PlansContainer: React.SFC<PlansContainerProps> = () => {
	return (
		<div>
			<Buttons />
		</div>
	);
};

export default PlansContainer;
