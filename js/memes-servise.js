'use strict'
var gCanvas;
var gCtx;
var elImgText = document.querySelector('.img-text')
var gXindex = 40;
var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gSavedMemes = [];

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I never eat Falafel',
        size: 40,
        align: 'left',
        color: 'black',
        x: 250,
        y: 100,
        font: 'Impact',
        isStroke: true

    }, {
        txt: 'i like hamburger',
        size: 40,
        align: 'left',
        color: 'black',
        x: 250,
        y: 350,
        font: 'Impact',
        isStroke: true

    }]
}

var gImgs = [
    { id: 0, url: './imgs/1.jpg', keywords: ['happy'] },
    { id: 1, url: './imgs/2.jpg', keywords: ['happy'] },
    { id: 2, url: './imgs/3.jpg', keywords: ['happy'] },
    { id: 3, url: './imgs/4.jpg', keywords: ['happy'] },
    { id: 4, url: './imgs/5.jpg', keywords: ['happy'] },
    { id: 5, url: './imgs/6.jpg', keywords: ['happy'] },
    { id: 6, url: './imgs/7.jpg', keywords: ['happy'] },
    { id: 7, url: './imgs/8.jpg', keywords: ['happy'] },
    { id: 8, url: './imgs/9.jpg', keywords: ['happy'] },
    { id: 9, url: './imgs/10.jpg', keywords: ['happy'] },
    { id: 10, url: './imgs/11.jpg', keywords: ['happy'] },
    { id: 11, url: './imgs/12.jpg', keywords: ['happy'] },
    { id: 12, url: './imgs/13.jpg', keywords: ['happy'] },
    { id: 13, url: './imgs/14.jpg', keywords: ['happy'] },
    { id: 14, url: './imgs/15.jpg', keywords: ['happy'] },
    { id: 15, url: './imgs/16.jpg', keywords: ['happy'] },
    { id: 16, url: './imgs/17.jpg', keywords: ['happy'] },
];

var gCurrImg = gImgs[0];

function init() {
    gCanvas = document.getElementById('memes-canvas');
    gCtx = gCanvas.getContext('2d');
    gCtx.fillStyle = 'pink';
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
    renderCanvas()
    renderGallery()
    onGalleryClick()
}

function renderCanvas(img) {
    if (!img) {
        drawImage(gImgs[0])
    } else {
        drawImage(img)
    }
}

// Drawing the img on the canvas 
function drawImage(img) {
    const memeImg = new Image();
    memeImg.src = img.url
    memeImg.addEventListener('load', function() {
        gCtx.drawImage(memeImg, 0, 0);
        gMeme.lines.forEach(function(line) {
            drawText(line.txt, line.x, line.y, line.size, line.font, line.color, line.isStroke)
        })
    }, false);
}

// Draw the text no the canvas
function drawText(text, x, y, size, font, color, isStroke) {
    gCtx.fillStyle = 'white'
    gCtx.font = size + `px ${font}`;
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    if (isStroke) {
        gCtx.strokeStyle = color;
        gCtx.lineWidth = 2
        gCtx.strokeText(text, x, y)
    }
}

function drawImgText(elText) {
    drawImage(gCurrImg)
}

function setImgText(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text;
    drawImage(gCurrImg)
}

function increaseFontSize() {
    gMeme.lines[gMeme.selectedLineIdx].size += 10
    drawImage(gCurrImg)
}

function decreaseFontSize() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 10
    drawImage(gCurrImg)
}

function increaseYindex() {
    gMeme.lines[gMeme.selectedLineIdx].y += 10
    drawImage(gCurrImg)
}

function decreaseYindex() {
    gMeme.lines[gMeme.selectedLineIdx].y -= 10
    drawImage(gCurrImg)
}

function increaseXindex() {
    gMeme.lines[gMeme.selectedLineIdx].x += 10
    drawImage(gCurrImg)
}

function decreaseXindex() {
    gMeme.lines[gMeme.selectedLineIdx].x -= 10
    drawImage(gCurrImg)
}

function getImgToDislay() {
    let imgs = [];
    gImgs.forEach(img => {
        imgs.push(img)
    })
    let displayImg = imgs.slice(0, 16);
    return displayImg
}


function switchLines() {
    gMeme.selectedLineIdx++
        if (gMeme.selectedLineIdx === gMeme.lines.length) {
            gMeme.selectedLineIdx = 0;
        }
}

function changeTextColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
    drawImgText(elImgText)
}

function addLine() {
    gMeme.lines.push({
        txt: 'new line',
        size: 20,
        align: 'left',
        color: 'red',
        x: 250,
        y: 300
    }, )
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    drawImgText(elImgText)
}

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    if (gMeme.selectedLineIdx >= gMeme.lines.length) {
        gMeme.selectedLineIdx = gMeme.lines.length - 1
    }
    drawImgText(elImgText)
}

function changeFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font
    drawImgText(elImgText)
}

function toggleStroke() {
    gMeme.lines[gMeme.selectedLineIdx].isStroke = !gMeme.lines[gMeme.selectedLineIdx].isStroke
    drawImgText(elImgText)
    console.log(gMeme)
}

function imojieClick(emojie) {
    gMeme.lines.push({
        txt: `${emojie}`,
        size: 20,
        align: 'left',
        color: 'red',
        x: 250,
        y: 300
    }, )
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    drawImgText(elImgText)

}




// Get img by id - 
function getImageById(imgId) {
    let img = gImgs.find(function(img) {
        if (img.id === imgId) return img
    })
    return img
}

// Download canvas - 
const download = document.getElementById('download')
download.addEventListener('click', function(e) {
    var link = document.createElement('a');
    link.download = 'download.png';
    link.href = gCanvas.toDataURL()
    link.click();
    link.delete;
});