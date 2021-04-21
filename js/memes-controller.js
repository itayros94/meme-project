'use strict'

function onInit() {
    init()
}

// Render Img Text
function onSetImgText(text) {
    setImgText(text)
}

// Move Text Up
function onTextDown() {
    increaseYindex()
}

// Move Text Up
function onTextUp() {
    decreaseYindex()
}

// Move Text Right
function onTextRight() {
    increaseXindex()
}

// Move Text Left
function onTextLeft() {
    decreaseXindex()
}

// Switching The Control Between The lines
function onSwitchLine() {
    switchLines()
}

// Change The Text Color
function onChangeTextColor(color) {
    changeTextColor(color)
}

// Adding A New Line
function onAddLine() {
    addLine()
    document.querySelector('.img-text').value = '';
}

// Delete Line
function onDeleteLine() {
    deleteLine()
}

// Changing Font Type
function onChangeFont(font) {
    changeFont(font)
}

// Turn On/Off Stroke
function onToggleStroke() {
    toggleStroke()
}

// Add Imojie To The Canvas
function onImojieClick(elEmojie) {
    imojieClick(elEmojie.innerHTML)
}