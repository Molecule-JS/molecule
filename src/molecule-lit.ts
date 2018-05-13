import { html, svg, render, TemplateResult, SVGTemplateResult } from '../node_modules/lit-html/lit-html';
import { Molecule, HTMLCollectionByID, PropConfig, Properties, camelCaseToKebab } from './molecule';

export const MoleculeLit = Molecule(render);

export { html, svg, TemplateResult, SVGTemplateResult };
export { HTMLCollectionByID, PropConfig, Properties, camelCaseToKebab };

export default { MoleculeLit, Molecule, html, svg, render };