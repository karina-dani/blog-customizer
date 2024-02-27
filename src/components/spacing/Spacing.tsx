import styles from './index.module.scss';
import clsx from 'clsx';

type SpacingProps = {
	size: 4 | 24 | 50 | 90 | 207;
};

export const Spacing = ({ size }: SpacingProps) => {
	const className = clsx(styles.spacing, styles[`size${size}`]);

	return <div className={className}></div>;
};
