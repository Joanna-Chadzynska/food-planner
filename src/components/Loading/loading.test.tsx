import { render } from '@testing-library/react';
import { Loading } from 'components';
import React from 'react';
import Theme from 'theme/theme';

describe('<Loading/>', () => {
	it('renders the <Loading/> component as Bouncer', () => {
		const { container } = render(
			<Theme>
				<Loading>
					<Loading.Bouncer />
				</Loading>
			</Theme>
		);

		expect(container.firstChild?.firstChild?.firstChild).toBeEmpty();
		expect(container.firstChild).toMatchSnapshot();
	});

	it('renders the <Loading/> component as Spinner', () => {
		const { container } = render(
			<Theme>
				<Loading>
					<Loading.Spinner />
				</Loading>
			</Theme>
		);

		expect(container.firstChild?.firstChild?.firstChild).toBeEmpty();
		expect(container.firstChild).toMatchSnapshot();
	});

	it('renders the <Loading/> component as Square', () => {
		const { container } = render(
			<Theme>
				<Loading>
					<Loading.Square />
				</Loading>
			</Theme>
		);

		expect(container.firstChild?.firstChild?.firstChild).toBeEmpty();
		expect(container.firstChild).toMatchSnapshot();
	});
});
