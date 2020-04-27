myData = `Demo`
let img, myFont;
let fontssss=['fontText','fontText1']
let change=1;
imgNum = 1
fontNum = 1
pageNum = 1
xaxis=20
yaxis=20
fontsize=0.4
w=700
linespacing=70
fontText = [];
dataAvailable = [32,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,97,98,99]
function incrementor(){
change=change+1;
change=change%fontssss.length;
console.log(change)
changeFont();
};
function preload() {
    changeFont();
    loadPage();
}

function setup(){
    canvas = createCanvas(750,1000)
    canvas.parent('contributing')
    rectMode(CORNER);
}

function draw(){
    background(255)
    // image(img, 0, 0, width, height)
    textSize(fontsize)
    fill('#264180')
    if(linespacing){
        textLeading(linespacing);
    }
    pos = createVector(xaxis, yaxis)
    data = "\n"+myData
    // text(data, xaxis, yaxis, w, 900);
    for(var i=0;i<=myData.length;i++){
        if(pos.x >= xaxis+w || myData[i]=='\n'){
            pos.x = xaxis
            pos.y += linespacing*fontsize
        }
        if('textImage'+myData[i] in fontText){
            image(fontText['textImage'+myData[i]], pos.x, pos.y,fontText['textImage'+myData[i]].width*fontsize,fontText['textImage'+myData[i]].height*fontsize)
            pos.x += fontText['textImage'+myData[i]].width*fontsize
        }
    }
}

function changeFont(){
    dataAvailable.forEach(i => {
        try {
            fontText['textImage'+String.fromCharCode(i)] = loadImage(str(fontssss[change])+'/'+str(i)+'.jpg')
        } catch (error) {
        }
    });
}

function loadPage(){
    img = loadImage('pages/page (2).jpg');
}