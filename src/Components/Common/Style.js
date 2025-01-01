import { getColorsCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { colors ,titleStyle,answerStyle} = attributes;

	const mainSl = `#${id}`;
	const accordionContainer = `${mainSl} .accordion-container`;
	const accordionClock = `${accordionContainer} .accordion-block`;
	const accordionBlockHeader = `${accordionClock} .accordion-block__header`;
	const titleColor=`${accordionBlockHeader} h4`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		
		${accordionBlockHeader}{
		background-color:${titleStyle?.titleBg};
		border-radius:${titleStyle.border}
		}
		${accordionClock}{
		background-color:${answerStyle?.answerBg};
		
		}
		${titleColor}{
		color:${titleStyle.titleColor};
		}
		
	`}} />;
}
export default Style;