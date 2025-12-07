
let i=0;
const DIVmainwrap=document.querySelector('.mainwrap');
const canvasgrid=document.querySelector('.canvas')
function initializecanvas(){
    const usercanvas = document.getElementById('canvassize');
    const canvascell = Number(usercanvas.value);   
    DIVmainwrap.innerHTML = '';
    DIVmainwrap.style.height ='';
    DIVmainwrap.style.width = '';
    const total = canvascell * canvascell
    if(canvascell > 100){
        alert('amount too big')
    }
    else{
        DIVmainwrap.style.height = (10 * canvascell) + 'px';
        DIVmainwrap.style.width = (10 * canvascell) + 'px';
        for ( i = 0 ; i < total ; i++ ){
                const canvasblock = document.createElement('div')
                canvasblock.classList.add('canvas');
                canvasblock.style.height= '10px';
                canvasblock.style.width= '10px';
                DIVmainwrap.appendChild(canvasblock)
                console.log('created pixel grid')
                canvasblock.addEventListener('mouseenter', () => 
                    {
                    canvasblock.style.backgroundColor=' rgb(255, 245, 191, 1)';
                    console.log('rendered a cell');
                    }
                )
            }
    }
    
}
