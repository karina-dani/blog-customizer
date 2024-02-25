import type { Meta, StoryObj } from '@storybook/react';
import { fontFamilyOptions } from 'src/constants/articleProps';

import { Select } from './Select';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
	component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

const SelectWithState = () => {
	const [selected, setSelected] = useState(fontFamilyOptions[0]);

	return (
		<>
			<Select
				selected={selected}
				onChange={setSelected}
				options={fontFamilyOptions}
				title='Шрифт'
			/>
		</>
	);
};

export const SelectStory: Story = {
	render: () => <SelectWithState />,
};
