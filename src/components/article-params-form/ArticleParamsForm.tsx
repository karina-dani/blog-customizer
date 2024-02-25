import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';

import { ArrowButton } from 'components/arrow-button';
import { useEffect, useState, useRef, ReactNode } from 'react';

type ArticleParamsFormProps = {
	content: ReactNode;
	children: ReactNode;
};

export const ArticleParamsForm = ({
	content,
	children,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handler = (event: Event) => {
			if (
				isOpen &&
				ref.current &&
				!ref.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handler);
		return () => {
			document.removeEventListener('mousedown', handler);
		};
	}, [isOpen]);

	return (
		<>
			<ArrowButton
				open={isOpen}
				onClick={isOpen ? () => setIsOpen(false) : () => setIsOpen(true)}
			/>
			<aside
				ref={ref}
				className={clsx(
					styles.container,
					isOpen ? styles.container_open : styles.container
				)}>
				<form className={styles.form}>
					{content}
					<div className={styles.bottomContainer}>{children}</div>
				</form>
			</aside>
		</>
	);
};
