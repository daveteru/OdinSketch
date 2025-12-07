

const DIVmainwrap=document.querySelector('.mainwrap');
const canvasgrid=document.querySelector('.canvas')
for ( let i = 0 ; i < 256 ; i++ ){
    const canvasblock = document.createElement('div')
canvasblock.classList.add('canvas');
canvasblock.style.height= '10px';
canvasblock.style.width= '10px';
DIVmainwrap.appendChild(canvasblock)
console.log('created pixel grid')
canvasblock.addEventListener('mouseenter', () => {
    canvasblock.style.backgroundColor=' rgb(255, 252, 234)';
    console.log('rendered a pixel');
})
}


