import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		id,
		language,
		location,
		zoom,
		mapType,
		height,
		latitude,
		longitude,
	} = attributes;
	const lang_par = language ? language : 'en';
		const lat = latitude && longitude ? `&center=${latitude},${longitude}` : '';

	const encoded_address = encodeURI(location);
	const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAsd_d46higiozY-zNqtr7zdA81Soswje4&q=${encoded_address}&maptype=${mapType}&zoom=${zoom}&language=${lang_par}${lat}`;

	return (
		<div {...useBlockProps.save()}>

			<iframe
				className='agm-google-map__iframe'
				title={__('Advanced Google Map', 'advanced-google-map')}
				src={url}
				width="100%" height={height}
				loading="lazy"
			>
			</iframe>
		</div>
	);
}
