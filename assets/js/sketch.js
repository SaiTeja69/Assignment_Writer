let textData = `Demo`;
let img, myFont;
let fontssss = ['fontText', 'fontText1', 'fontText2'];
let change = 1;

let xaxis = 20;
let yaxis = 20;
let fontsize = 0.4;
let w = 700;
let linespacing = 70;
let fontText = [];

tmpOffsetMap = [
	6,
	-2,
	-1.11111111,
	-0.22222222,
	0.66666667,
	1.55555556,
	2.44444444,
	3.33333333,
	4.22222222,
	5.11111111,
];

// elements of list(range(32, 126)) minus the element '96'
let dataAvailable = Array.from(new Array(94), (x, i) => i + 32);
dataAvailable.splice(64, 1); // remove item '96'

// this function has binding in index.html
function incrementor() {
	change = (change + 1) % fontssss.length;
	// console.log(change);
	changeFont();
}

function textChanged(text) {
	textData = text;
	loop();
}

function preload() {
	changeFont();
	loadPage();
	loop();
}

function setup() {
	canvas = createCanvas(750, 1000);
	canvas.parent('contributing');
	rectMode(CORNER);
	
}

function draw() {
    noLoop();
	//background(255);
	image(img, 0, 0, width, height);
	textSize(fontsize);
	fill('#264180');
	if (linespacing) textLeading(linespacing);
	pos = createVector(xaxis, yaxis);

	// text(data, xaxis, yaxis, w, 900);

	for (var i = 0; i <= textData.length; i++) {
		if (pos.x >= xaxis + w || textData[i] == '\n') {
			pos.x = xaxis;
			pos.y += linespacing * fontsize;
		}

		let y_offset = 0;
		y_scale = 1;
		y_shift_flag = 0;

		if ('textImage' + textData[i] in fontText) {
			// console.log(fontText);
			if (change < 2 && !isNaN(textData[i])) {
				y_shift_flag = 1;
				y_scale = 2;
				y_offset = y_scale * tmpOffsetMap[Number(textData[i])];
			}
			if (textData[i])
				image(
					fontText['textImage' + textData[i]],
					pos.x,
					pos.y + -28 * y_shift_flag,
					fontText['textImage' + textData[i]].width * fontsize,
					fontText['textImage' + textData[i]].height *
						fontsize *
						y_scale
				);
			pos.x += fontText['textImage' + textData[i]].width * fontsize;
		}
	}
}

function changeFont() {
	console.log(change);
	dataAvailable.forEach((i) => {
		try {
			fontText['textImage' + String.fromCharCode(i)] = loadImage(
				str(fontssss[change]) + '/' + str(i) + '_t.png'
			);
		} catch (error) {}
	});
	loop();
}

function loadPage() {
	img = loadImage('pages/page (2).jpg');
	loop();
}
