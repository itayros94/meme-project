'use strict'

function onInit() {
    init()
}

// Set the img text
function onSetImgText(text) {
    setImgText(text)
}

function onTextDown() {
    increaseYindex()
}

function onTextUp() {
    decreaseYindex()
}

function onTextRight() {
    increaseXindex()
}

function onTextLeft() {
    decreaseXindex()
}

function onSwitchLine() {
    switchLines()
}

function onChangeTextColor(color) {
    changeTextColor(color)
}

function onAddLine() {
    addLine()
    document.querySelector('.img-text').value = '';
}

function onDeleteLine() {
    deleteLine()
}

function onChangeFont(font) {
    changeFont(font)
}

function onToggleStroke() {
    toggleStroke()
}

function onImojieClick(elEmojie) {
    imojieClick(elEmojie.innerHTML)

}