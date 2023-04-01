import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	// const { content, color } = attributes;
	const { id, language } = attributes;
	const lang_par = language ? language : 'en';
	const encoded_address = encodeURI('Bogura');
	const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAsd_d46higiozY-zNqtr7zdA81Soswje4&q=${encoded_address}&zoom=18&language=${lang_par}`;

	return (
		<div {...useBlockProps.save({
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
	);
}
