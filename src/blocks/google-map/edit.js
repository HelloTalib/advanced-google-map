import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import {
	Panel,
	PanelBody,
	RangeControl,
	TextControl,
	TextareaControl,
	SelectControl,
} from '@wordpress/components';
const { Fragment } = wp.element;

// editor style
import './editor.scss';

// colors
import colors from '../../utilities/colors-palette';

export default function Edit({ attributes, setAttributes, clientId }) {
	// const { content, color } = attributes;
	const { id, language, location, zoom, mapType,latitude, longitude, height } = attributes;
	const lang_par = language ? language : 'en';
	const encoded_address = encodeURI(location);
	const lat = latitude && longitude ? `&center=37.7749,-122.4194` : '';
	const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAsd_d46higiozY-zNqtr7zdA81Soswje4&q=${encoded_address}&zoom=${zoom}&maptype=${mapType}&language=${lang_par}${lat}`;

	setAttributes({ id: clientId.slice(0, 8) });
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Map Settings', 'advanced-google-map')}
					initialOpen={false}
				>
					<TextControl
						label={__('Location', 'advanced-google-map')}
						help={__(
							'Type the specified location name that you want to display on the map.',
							'advanced-google-map'
						)}
						value={location}
						placeholder={__(
							'Enter the Location Name',
							'advanced-goole-map'
						)}
						onChange={(location) => setAttributes({ location })}
					/>

					<RangeControl
						label={__('Zoom Level', 'advanced-google-map')}
						help={__(
							'Set the initial zoom level of the map. The higher the value will be the more zoomed in the map',
							'advanced-google-map'
						)}
						value={zoom}
						onChange={(zoom) => setAttributes({ zoom })}
						min={1}
						max={21}
					/>
					<SelectControl
						label={__('Map View Type', 'advanced-google-map')}
						help={__(
							'Set the type of map to be displayed, such as road map, satellite imagery, or terrain.',
							'advanced-google-map'
						)}
						value={mapType}
						options={[
							{
								label: __('Roadmap', 'advanced-google-map'),
								value: 'roadmap',
							},
							{
								label: __('Satellite', 'advanced-google-map'),
								value: 'satellite',
							},
						]}
						onChange={(mapType) => {
							setAttributes({ mapType });
						}}
					/>
					<SelectControl
						label={__('Select Language for your Location')}
						help={__(
							'Select the language of the map interface. such as for English select English or French select French',
							'advanced-google-map'
						)}
						value={language}
						options={[
							{
								value: 'af',
								label: __('Afrikaans', 'advanced-google-map'),
							},
							{
								value: 'sq',
								label: __('Albanian', 'advanced-google-map'),
							},
							{
								value: 'am',
								label: __('Amharic', 'advanced-google-map'),
							},
							{
								value: 'ar',
								label: __('Arabic', 'advanced-google-map'),
							},
							{
								value: 'hy',
								label: __('Armenian', 'advanced-google-map'),
							},
							{
								value: 'az',
								label: __('Azerbaijani', 'advanced-google-map'),
							},
							{
								value: 'eu',
								label: __('Basque', 'advanced-google-map'),
							},
							{
								value: 'be',
								label: __('Belarusian', 'advanced-google-map'),
							},
							{
								value: 'bn',
								label: __('Bengali', 'advanced-google-map'),
							},
							{
								value: 'bs',
								label: __('Bosnian', 'advanced-google-map'),
							},
							{
								value: 'bg',
								label: __('Bulgarian', 'advanced-google-map'),
							},
							{
								value: 'my',
								label: __('Burmese', 'advanced-google-map'),
							},
							{
								value: 'ca',
								label: __('Catalan', 'advanced-google-map'),
							},
							{
								value: 'zh',
								label: __('Chinese', 'advanced-google-map'),
							},
							{
								value: 'hr',
								label: __('Croatian', 'advanced-google-map'),
							},
							{
								value: 'cs',
								label: __('Czech', 'advanced-google-map'),
							},
							{
								value: 'da',
								label: __('Danish', 'advanced-google-map'),
							},
							{
								value: 'nl',
								label: __('Dutch', 'advanced-google-map'),
							},
							{
								value: 'en',
								label: __('English', 'advanced-google-map'),
							},
							{
								value: 'et',
								label: __('Estonian', 'advanced-google-map'),
							},
							{
								value: 'fa',
								label: __('Farsi', 'advanced-google-map'),
							},
							{
								value: 'fi',
								label: __('Finnish', 'advanced-google-map'),
							},
							{
								value: 'fr',
								label: __('French', 'advanced-google-map'),
							},
							{
								value: 'gl',
								label: __('Galician', 'advanced-google-map'),
							},
							{
								value: 'ka',
								label: __('Georgian', 'advanced-google-map'),
							},
							{
								value: 'de',
								label: __('German', 'advanced-google-map'),
							},
							{
								value: 'el',
								label: __('Greek', 'advanced-google-map'),
							},
							{
								value: 'gu',
								label: __('Gujarati', 'advanced-google-map'),
							},
							{
								value: 'iw',
								label: __('Hebrew', 'advanced-google-map'),
							},
							{
								value: 'hi',
								label: __('Hindi', 'advanced-google-map'),
							},
							{
								value: 'hu',
								label: __('Hungarian', 'advanced-google-map'),
							},
							{
								value: 'is',
								label: __('Icelandic', 'advanced-google-map'),
							},
							{
								value: 'id',
								label: __('Indonesian', 'advanced-google-map'),
							},
							{
								value: 'it',
								label: __('Italian', 'advanced-google-map'),
							},
							{
								value: 'ja',
								label: __('Japanese', 'advanced-google-map'),
							},
							{
								value: 'kn',
								label: __('Kannada', 'advanced-google-map'),
							},
							{
								value: 'kk',
								label: __('Kazakh', 'advanced-google-map'),
							},
							{
								value: 'km',
								label: __('Khmer', 'advanced-google-map'),
							},
							{
								value: 'ko',
								label: __('Korean', 'advanced-google-map'),
							},
							{
								value: 'ky',
								label: __('Kyrgyz', 'advanced-google-map'),
							},
							{
								value: 'lo',
								label: __('Lao', 'advanced-google-map'),
							},
							{
								value: 'lv',
								label: __('Latvian', 'advanced-google-map'),
							},
							{
								value: 'lt',
								label: __('Lithuanian', 'advanced-google-map'),
							},
							{
								value: 'mk',
								label: __('Macedonian', 'advanced-google-map'),
							},
							{
								value: 'ms',
								label: __('Malay', 'advanced-google-map'),
							},
							{
								value: 'ml',
								label: __('Malayalam', 'advanced-google-map'),
							},
							{
								value: 'mr',
								label: __('Marathi', 'advanced-google-map'),
							},
							{
								value: 'mn',
								label: __('Mongolian', 'advanced-google-map'),
							},
							{
								value: 'ne',
								label: __('Nepali', 'advanced-google-map'),
							},
							{
								value: 'no',
								label: __('Norwegian', 'advanced-google-map'),
							},
							{
								value: 'pl',
								label: __('Polish', 'advanced-google-map'),
							},
							{
								value: 'pt',
								label: __('Portuguese', 'advanced-google-map'),
							},
							{
								value: 'pa',
								label: __('Punjabi', 'advanced-google-map'),
							},
							{
								value: 'ro',
								label: __('Romanian', 'advanced-google-map'),
							},
							{
								value: 'ru',
								label: __('Russian', 'advanced-google-map'),
							},
							{
								value: 'sr',
								label: __('Serbian', 'advanced-google-map'),
							},
							{
								value: 'si',
								label: __('Sinhalese', 'advanced-google-map'),
							},
							{
								value: 'sk',
								label: __('Slovak', 'advanced-google-map'),
							},
							{
								value: 'sl',
								label: __('Slovenian', 'advanced-google-map'),
							},
							{
								value: 'es',
								label: __('Spanish', 'advanced-google-map'),
							},
							{
								value: 'sw',
								label: __('Swahili', 'advanced-google-map'),
							},
							{
								value: 'sv',
								label: __('Swedish', 'advanced-google-map'),
							},
							{
								value: 'ta',
								label: __('Tamil', 'advanced-google-map'),
							},
							{
								value: 'te',
								label: __('Telugu', 'advanced-google-map'),
							},
							{
								value: 'th',
								label: __('Thai', 'advanced-google-map'),
							},
							{
								value: 'tr',
								label: __('Turkish', 'advanced-google-map'),
							},
							{
								value: 'uk',
								label: __('Ukrainian', 'advanced-google-map'),
							},
							{
								value: 'ur',
								label: __('Urdu', 'advanced-google-map'),
							},
							{
								value: 'uz',
								label: __('Uzbek', 'advanced-google-map'),
							},
							{
								value: 'vi',
								label: __('Vietnamese', 'advanced-google-map'),
							},
							{
								value: 'zu',
								label: __('Zulu', 'advanced-google-map'),
							},
						]}
						onChange={(language) => {
							setAttributes({ language });
						}}
					/>
					<RangeControl
						label={__('Height', 'advanced-google-map')}
						help={__(
							'Specifies the height of the map in pixels.', 'advanced-google-map'
						)}
						value={height}
						onChange={(height) => setAttributes({ height })}
						min={200}
						max={1800}
					/>
				</PanelBody>
				<PanelBody
					title={__('Map Settings Additional')}
					initialOpen={false}
				>
					<p>
						{__(
							' This parameter sets the center of the map to a specific location. The format for this parameter is latitude and longitude, separated by a comma. For example: center=37.7749,-122.4194',
							'advanced-google-map'
						)}
					</p>
					<TextControl
						label={__('Latitude', 'advanced-google-map')}
						placeholder={__('37.7749', 'advanced-google-map')}
						value={latitude}
						onChange={(latitude) => setAttributes({ latitude })}
					/>
					<TextControl
						label={__('Longitude', 'advanced-google-map')}
						placeholder={__('-122.4194', 'advanced-google-map')}
						value={longitude}
						onChange={(longitude) => setAttributes({ longitude })}
					/>
				</PanelBody>
			</InspectorControls>

			<div
				{...useBlockProps({
					className: 'agm-google-map agm-google-map-' + id,
				})}
			>
				<iframe
					className="agm-google-map__iframe"
					title={__('Advanced Google Map', 'advanced-google-map')}
					src={url}
					width="100%"
					height={height}
					loading="lazy"
				></iframe>
			</div>
		</Fragment>
	);
}
