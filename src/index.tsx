import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState, SyntheticEvent } from 'react';
import clsx from 'clsx';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
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
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [articleState, setArticleState] = useState(defaultArticleState);

	const [fontFamily, setFontFamily] = useState(fontFamilyOptions[0]);
	const [fontSize, setFontSize] = useState(fontSizeOptions[0]);
	const [fontColor, setFontColor] = useState(fontColors[0]);
	const [contentWidth, setContentWidth] = useState(contentWidthArr[0]);
	const [backgroundColor, setBackgroundColor] = useState(backgroundColors[0]);

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();

		setArticleState({
			...articleState,
			fontFamilyOption: fontFamily,
			fontColor: fontColor,
			fontSizeOption: fontSize,
			contentWidth: contentWidth,
			backgroundColor: backgroundColor,
		});
	};

	const handleReset = () => {
		setFontFamily(fontFamilyOptions[0]);
		setFontSize(fontSizeOptions[0]);
		setFontColor(fontColors[0]);
		setContentWidth(contentWidthArr[0]);
		setBackgroundColor(backgroundColors[0]);
		setArticleState(defaultArticleState);
	};

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				content={
					<>
						<Text as='h2' size={31} weight={800} uppercase>
							Задайте параметры
						</Text>
						<Spacing size={50} />
						<Select
							selected={fontFamily}
							onChange={setFontFamily}
							options={fontFamilyOptions}
							title='Шрифт'
						/>
						<Spacing size={50} />
						<RadioGroup
							selected={fontSize}
							name='radio'
							onChange={setFontSize}
							options={fontSizeOptions}
							title='Размер шрифта'
						/>
						<Spacing size={50} />
						<Select
							selected={fontColor}
							onChange={setFontColor}
							options={fontColors}
							title='Цвет шрифта'
						/>
						<Spacing size={50} />
						<Separator />
						<Spacing size={50} />
						<Select
							selected={backgroundColor}
							onChange={setBackgroundColor}
							options={backgroundColors}
							title='Цвет фона'
						/>
						<Spacing size={50} />
						<Select
							selected={contentWidth}
							onChange={setContentWidth}
							options={contentWidthArr}
							title='Ширина контента'
						/>
					</>
				}>
				<Button title='Сбросить' type='reset' onClick={handleReset} />
				<Button title='Применить' type='submit' onClick={handleSubmit} />
			</ArticleParamsForm>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
