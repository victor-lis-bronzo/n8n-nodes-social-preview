import { html } from 'satori-html';

const template = `
	<div style="display: flex; flex-direction: row; position: relative;">
		<div style="position: absolute; top: 0; left: 0;"></div>
		<div style="position: absolute; bottom: 0;"></div>
	</div>
`;

console.log(JSON.stringify(html(template), null, 2));
