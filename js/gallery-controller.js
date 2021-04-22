'use strict'

// Render The Gallery To the Page
function renderGallery() {
    var img = getImgToDislay()
    var strHTML = '';
    strHTML += img.map(img => {
        return `<img src="${img.url}" onclick="onImgClick(${img.id})">`
    }).join('')
    console.log(strHTML)
    document.querySelector('.imgs-gallery').innerHTML = strHTML
}

// Move To The Canvas / Editor page
function onImgClick(imgId) {
    var elGallery = document.querySelector('.imgs-gallery')
    var elCanvas = document.querySelector('.canvas-container')
    var elEditor = document.querySelector('.editor-container')
    elCanvas.style.display = 'block';
    elGallery.style.display = 'none'
    elEditor.style.display = 'block'
    gCurrImg = gImgs[imgId]
    drawImage(gImgs[imgId])
    let image = getImageById(imgId)
}

// Move To The Gallery Page
function onGalleryClick() {
    var elEditor = document.querySelector('.editor-container')
    var elCanvas = document.querySelector('.canvas-container');
    var elGallery = document.querySelector('.imgs-gallery')
    elCanvas.style.display = 'none';
    elGallery.style.display = 'block';
    elEditor.style.display = 'none';

}