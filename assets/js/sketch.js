let textData = `Demo`;
let img, myFont;
let fontssss = ['fontText', 'fontText1', 'fontText2'];
let change = 1;

let xaxis = 20;
let yaxis = 20;
let pageNum = 1;
let fontsize = 0.4;
let w = 700;
let linespacing = 70;
let fontText = [];

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
	noLoop();
}

function draw() {
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
		if ('textImage' + textData[i] in fontText) {
			// console.log(textData[i]);
			if (textData[i])
				image(
					fontText['textImage' + textData[i]],
					pos.x,
					pos.y,
					fontText['textImage' + textData[i]].width * fontsize,
					fontText['textImage' + textData[i]].height * fontsize
				);
			pos.x += fontText['textImage' + textData[i]].width * fontsize;
		}
	}
}

function changeFont() {
	dataAvailable.forEach((i) => {
		try {
			console.log(str(fontssss[change]) + '/' + str(i) + '_t.png');
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
