import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import { PanelBody, ColorPalette } from '@wordpress/components';
const { Fragment } = wp.element;

// editor style
import './editor.scss';

// colors
import colors from '../../utilities/colors-palette';

export default function Edit({ attributes, setAttributes, clientId }) {
	// const { content, color } = attributes;
	const { id, language} = attributes;
	const lang_par = language ? language : 'en';
	const encoded_address = encodeURI('Bogura');
	const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAsd_d46higiozY-zNqtr7zdA81Soswje4&q=${encoded_address}&zoom=18&language=${lang_par}`;

	setAttributes({ id: clientId.slice(0, 8) });
	// console.log(attributes);
	return (
		<Fragment>


			<div {...useBlockProps({
				className: 'agm-google-map agm-google-map-' + id,
			})}>

			<iframe
			className='agm-google-map__iframe'
			title={__('Advanced Google Map', 'advanced-google-map')}
					src={url}
					width="640" height="450"
					loading="lazy"
			>


			</iframe>
			</div>
		</Fragment>
	);
}
