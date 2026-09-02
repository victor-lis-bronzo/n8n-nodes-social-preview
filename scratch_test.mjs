import { html } from 'satori-html';

const template = `
	<div style="display: flex;">
		<!-- Tech accents -->
		<div>hi</div>
	</div>
`;

console.log(JSON.stringify(html(template.trim()), null, 2));
