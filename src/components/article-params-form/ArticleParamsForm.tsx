import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';

import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import { Spacing } from 'components/spacing';
import { Separator } from 'components/separator';
import {
	defaultArticleState,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	OptionType,
} from '../../constants/articleProps';
import { useClose } from '../../hooks/useClose';
import { useState, useRef, SyntheticEvent } from 'react';

type ArticleParamsFormProps = {
	pageState: {
		fontFamilyOption: OptionType;
		fontColor: OptionType;
		backgroundColor: OptionType;
		contentWidth: OptionType;
		fontSizeOption: OptionType;
	};
	setPageState: React.Dispatch<
		React.SetStateAction<{
			fontFamilyOption: OptionType;
			fontColor: OptionType;
			backgroundColor: OptionType;
			contentWidth: OptionType;
			fontSizeOption: OptionType;
		}>
	>;
};

export const ArticleParamsForm = ({
	pageState,
	setPageState,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [state, setState] = useState(defaultArticleState);

	const formRef = useRef<HTMLDivElement | null>(null);

	useClose({
		isOpen,
		onClose: () => setIsOpen(false),
		rootRef: formRef,
	});

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		setPageState({ ...pageState, ...state });
	};

	const handleReset = () => {
		setState(defaultArticleState);
		setPageState(defaultArticleState);
	};

	return (
		<>
			<ArrowButton open={isOpen} onClick={() => setIsOpen(!isOpen)} />
			<aside
				ref={formRef}
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Spacing size={50} />
					<Select
						selected={state.fontFamilyOption}
						onChange={(selected: OptionType) => {
							setState({ ...state, fontFamilyOption: selected });
						}}
						options={fontFamilyOptions}
						title='Шрифт'
					/>
					<Spacing size={50} />
					<RadioGroup
						selected={state.fontSizeOption}
						name='radio'
						onChange={(selected: OptionType) => {
							setState({ ...state, fontSizeOption: selected });
						}}
						options={fontSizeOptions}
						title='Размер шрифта'
					/>
					<Spacing size={50} />
					<Select
						selected={state.fontColor}
						onChange={(selected: OptionType) => {
							setState({ ...state, fontColor: selected });
						}}
						options={fontColors}
						title='Цвет шрифта'
					/>
					<Spacing size={50} />
					<Separator />
					<Spacing size={50} />
					<Select
						selected={state.backgroundColor}
						onChange={(selected: OptionType) => {
							setState({ ...state, backgroundColor: selected });
						}}
						options={backgroundColors}
						title='Цвет фона'
					/>
					<Spacing size={50} />
					<Select
						selected={state.contentWidth}
						onChange={(selected: OptionType) => {
							setState({ ...state, contentWidth: selected });
						}}
						options={contentWidthArr}
						title='Ширина контента'
					/>
					<Spacing size={207} />
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handleReset} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
