'use strict';
const opentype   = require('opentype.js');
const charPreset = require('./char-preset');
const fontData   = require('./Comismsh.ttf?embed').default;

function nodeBufferToArrayBuffer(buffer) {
    const ab = new ArrayBuffer(buffer.length);
    const view = new Uint8Array(ab);
    for (let i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
    }
    return ab;
}


function stringToArrayBuffer(str) {
	const data= Buffer.from(str,"base64")
    return nodeBufferToArrayBuffer(data)
}

const font = opentype.parse(stringToArrayBuffer(fontData));
const ascender  = font.ascender;
const descender = font.descender;

const options = {
	width      : 150,
	height     : 50,
	noise      : 1,
	color      : false,
	background : '',
	size       : 4,
	ignoreChars: '',
	fontSize   : 56,
	charPreset, font, ascender, descender
};

const loadFont = filepath => {
	const font = opentype.loadSync(filepath);
	options.font      = font;
	options.ascender  = font.ascender;
	options.descender = font.descender;
};


module.exports = {
	options, loadFont
};
