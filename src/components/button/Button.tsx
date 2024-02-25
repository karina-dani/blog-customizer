import clsx from 'clsx';
import { Text } from 'components/text';
import styles from './Button.module.scss';
import { SyntheticEvent } from 'react';

export const Button = ({
	title,
	onClick,
	type,
}: {
	title: string;
	onClick?: (e: SyntheticEvent) => void;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}) => {
	const getButtonColor = () => {
		if (type === 'submit') {
			return styles.submit;
		}
		if (type === 'reset') {
			return styles.reset;
		}
		return '';
	};

	return (
		<button
			className={clsx(styles.button, getButtonColor())}
			type={type}
			onClick={onClick}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
