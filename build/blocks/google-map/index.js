/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/google-map/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/google-map/edit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/google-map/editor.scss");
/* harmony import */ var _utilities_colors_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/colors-palette */ "./src/utilities/colors-palette.js");




const {
  Fragment
} = wp.element;

// editor style


// colors

function Edit(_ref) {
  let {
    attributes,
    setAttributes,
    clientId
  } = _ref;
  // const { content, color } = attributes;
  const {
    id,
    language,
    location,
    zoom,
    mapType,
    latitude,
    longitude,
    height
  } = attributes;
  const lang_par = language ? language : 'en';
  const encoded_address = encodeURI(location);
  const lat = latitude && longitude ? `&center=37.7749,-122.4194` : '';
  const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAsd_d46higiozY-zNqtr7zdA81Soswje4&q=${encoded_address}&zoom=${zoom}&maptype=${mapType}&language=${lang_par}${lat}`;
  setAttributes({
    id: clientId.slice(0, 8)
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Map Settings', 'advanced-google-map'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Location', 'advanced-google-map'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Type the specified location name that you want to display on the map.', 'advanced-google-map'),
    value: location,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter the Location Name', 'advanced-goole-map'),
    onChange: location => setAttributes({
      location
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zoom Level', 'advanced-google-map'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set the initial zoom level of the map. The higher the value will be the more zoomed in the map', 'advanced-google-map'),
    value: zoom,
    onChange: zoom => setAttributes({
      zoom
    }),
    min: 1,
    max: 21
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Map View Type', 'advanced-google-map'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set the type of map to be displayed, such as road map, satellite imagery, or terrain.', 'advanced-google-map'),
    value: mapType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Roadmap', 'advanced-google-map'),
      value: 'roadmap'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Satellite', 'advanced-google-map'),
      value: 'satellite'
    }],
    onChange: mapType => {
      setAttributes({
        mapType
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Language for your Location'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select the language of the map interface. such as for English select English or French select French', 'advanced-google-map'),
    value: language,
    options: [{
      value: 'af',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Afrikaans', 'advanced-google-map')
    }, {
      value: 'sq',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Albanian', 'advanced-google-map')
    }, {
      value: 'am',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Amharic', 'advanced-google-map')
    }, {
      value: 'ar',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Arabic', 'advanced-google-map')
    }, {
      value: 'hy',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Armenian', 'advanced-google-map')
    }, {
      value: 'az',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Azerbaijani', 'advanced-google-map')
    }, {
      value: 'eu',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Basque', 'advanced-google-map')
    }, {
      value: 'be',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Belarusian', 'advanced-google-map')
    }, {
      value: 'bn',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bengali', 'advanced-google-map')
    }, {
      value: 'bs',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bosnian', 'advanced-google-map')
    }, {
      value: 'bg',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bulgarian', 'advanced-google-map')
    }, {
      value: 'my',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Burmese', 'advanced-google-map')
    }, {
      value: 'ca',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Catalan', 'advanced-google-map')
    }, {
      value: 'zh',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Chinese', 'advanced-google-map')
    }, {
      value: 'hr',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Croatian', 'advanced-google-map')
    }, {
      value: 'cs',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Czech', 'advanced-google-map')
    }, {
      value: 'da',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Danish', 'advanced-google-map')
    }, {
      value: 'nl',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Dutch', 'advanced-google-map')
    }, {
      value: 'en',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('English', 'advanced-google-map')
    }, {
      value: 'et',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Estonian', 'advanced-google-map')
    }, {
      value: 'fa',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Farsi', 'advanced-google-map')
    }, {
      value: 'fi',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Finnish', 'advanced-google-map')
    }, {
      value: 'fr',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('French', 'advanced-google-map')
    }, {
      value: 'gl',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Galician', 'advanced-google-map')
    }, {
      value: 'ka',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Georgian', 'advanced-google-map')
    }, {
      value: 'de',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('German', 'advanced-google-map')
    }, {
      value: 'el',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Greek', 'advanced-google-map')
    }, {
      value: 'gu',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Gujarati', 'advanced-google-map')
    }, {
      value: 'iw',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hebrew', 'advanced-google-map')
    }, {
      value: 'hi',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hindi', 'advanced-google-map')
    }, {
      value: 'hu',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hungarian', 'advanced-google-map')
    }, {
      value: 'is',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icelandic', 'advanced-google-map')
    }, {
      value: 'id',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Indonesian', 'advanced-google-map')
    }, {
      value: 'it',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Italian', 'advanced-google-map')
    }, {
      value: 'ja',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Japanese', 'advanced-google-map')
    }, {
      value: 'kn',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Kannada', 'advanced-google-map')
    }, {
      value: 'kk',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Kazakh', 'advanced-google-map')
    }, {
      value: 'km',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Khmer', 'advanced-google-map')
    }, {
      value: 'ko',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Korean', 'advanced-google-map')
    }, {
      value: 'ky',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Kyrgyz', 'advanced-google-map')
    }, {
      value: 'lo',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lao', 'advanced-google-map')
    }, {
      value: 'lv',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Latvian', 'advanced-google-map')
    }, {
      value: 'lt',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lithuanian', 'advanced-google-map')
    }, {
      value: 'mk',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Macedonian', 'advanced-google-map')
    }, {
      value: 'ms',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Malay', 'advanced-google-map')
    }, {
      value: 'ml',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Malayalam', 'advanced-google-map')
    }, {
      value: 'mr',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Marathi', 'advanced-google-map')
    }, {
      value: 'mn',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Mongolian', 'advanced-google-map')
    }, {
      value: 'ne',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Nepali', 'advanced-google-map')
    }, {
      value: 'no',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Norwegian', 'advanced-google-map')
    }, {
      value: 'pl',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Polish', 'advanced-google-map')
    }, {
      value: 'pt',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Portuguese', 'advanced-google-map')
    }, {
      value: 'pa',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Punjabi', 'advanced-google-map')
    }, {
      value: 'ro',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Romanian', 'advanced-google-map')
    }, {
      value: 'ru',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Russian', 'advanced-google-map')
    }, {
      value: 'sr',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Serbian', 'advanced-google-map')
    }, {
      value: 'si',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sinhalese', 'advanced-google-map')
    }, {
      value: 'sk',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slovak', 'advanced-google-map')
    }, {
      value: 'sl',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slovenian', 'advanced-google-map')
    }, {
      value: 'es',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spanish', 'advanced-google-map')
    }, {
      value: 'sw',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Swahili', 'advanced-google-map')
    }, {
      value: 'sv',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Swedish', 'advanced-google-map')
    }, {
      value: 'ta',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tamil', 'advanced-google-map')
    }, {
      value: 'te',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Telugu', 'advanced-google-map')
    }, {
      value: 'th',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Thai', 'advanced-google-map')
    }, {
      value: 'tr',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Turkish', 'advanced-google-map')
    }, {
      value: 'uk',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ukrainian', 'advanced-google-map')
    }, {
      value: 'ur',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Urdu', 'advanced-google-map')
    }, {
      value: 'uz',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Uzbek', 'advanced-google-map')
    }, {
      value: 'vi',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Vietnamese', 'advanced-google-map')
    }, {
      value: 'zu',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Zulu', 'advanced-google-map')
    }],
    onChange: language => {
      setAttributes({
        language
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Height', 'advanced-google-map'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Specifies the height of the map in pixels.', 'advanced-google-map'),
    value: height,
    onChange: height => setAttributes({
      height
    }),
    min: 200,
    max: 1800
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Map Settings Additional'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(' This parameter sets the center of the map to a specific location. The format for this parameter is latitude and longitude, separated by a comma. For example: center=37.7749,-122.4194', 'advanced-google-map')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Latitude', 'advanced-google-map'),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('37.7749', 'advanced-google-map'),
    value: latitude,
    onChange: latitude => setAttributes({
      latitude
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Longitude', 'advanced-google-map'),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('-122.4194', 'advanced-google-map'),
    value: longitude,
    onChange: longitude => setAttributes({
      longitude
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'agm-google-map agm-google-map-' + id
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    className: "agm-google-map__iframe",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced Google Map', 'advanced-google-map'),
    src: url,
    width: "100%",
    height: height,
    loading: "lazy"
  })));
}

/***/ }),

/***/ "./src/blocks/google-map/index.js":
/*!****************************************!*\
  !*** ./src/blocks/google-map/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/google-map/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/google-map/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/google-map/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/google-map/save.js");




/**
 * Internal dependencies
 */



/**
 * Block Registration
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/google-map/save.js":
/*!***************************************!*\
  !*** ./src/blocks/google-map/save.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    id,
    language,
    location,
    zoom,
    mapType,
    height,
    latitude,
    longitude
  } = attributes;
  const lang_par = language ? language : 'en';
  const lat = latitude && longitude ? `&center=${latitude},${longitude}` : '';
  const encoded_address = encodeURI(location);
  const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAsd_d46higiozY-zNqtr7zdA81Soswje4&q=${encoded_address}&maptype=${mapType}&zoom=${zoom}&language=${lang_par}${lat}`;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    className: "agm-google-map__iframe",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced Google Map', 'advanced-google-map'),
    src: url,
    width: "100%",
    height: height,
    loading: "lazy"
  }));
}

/***/ }),

/***/ "./src/utilities/colors-palette.js":
/*!*****************************************!*\
  !*** ./src/utilities/colors-palette.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  __
} = wp.i18n;
const colors = [{
  name: __('Black', 'boilerplate'),
  color: '#000000'
}, {
  name: __('White', 'boilerplate'),
  color: '#ffffff'
}, {
  name: __('Red', 'boilerplate'),
  color: '#ff0000'
}, {
  name: __('Green', 'boilerplate'),
  color: '#00ff00'
}, {
  name: __('Blue', 'boilerplate'),
  color: '#0000ff'
}, {
  name: __('Yellow', 'boilerplate'),
  color: '#ffff00'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (colors);

/***/ }),

/***/ "./src/blocks/google-map/editor.scss":
/*!*******************************************!*\
  !*** ./src/blocks/google-map/editor.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/google-map/style.scss":
/*!******************************************!*\
  !*** ./src/blocks/google-map/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/google-map/block.json":
/*!******************************************!*\
  !*** ./src/blocks/google-map/block.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"advanced-google-map/google-map","version":"1.0.0","title":"Google Map","category":"advanced-google-map","icon":"location","description":"Advanced google Map for WordPress Users.","supports":{"html":false,"anchor":true},"keywords":["google","map","location","address","place","maps","google map"],"attributes":{"id":{"type":"string"},"location":{"type":"string","default":"Nasa"},"zoom":{"type":"number","default":12},"mapType":{"type":"string","default":"roadmap"},"language":{"type":"string","default":"en"},"width":{"type":"number","default":450},"height":{"type":"number","default":350}},"textdomain":"advanced-google-map","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/google-map/index": 0,
/******/ 			"blocks/google-map/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkadvanced_google_map"] = globalThis["webpackChunkadvanced_google_map"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/google-map/style-index"], () => (__webpack_require__("./src/blocks/google-map/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map