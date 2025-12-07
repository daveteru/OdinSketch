let i=0;
let opa = 0;
const DIVmainwrap=document.querySelector('.mainwrap');
const canvasgrid=document.querySelector('.canvas')
const canvasblock = document.createElement('div')
function initializecanvas(){
    const usercanvas = document.getElementById('canvassize');
    const canvascell = Number(usercanvas.value);   
    resetcanvas()
    const total = canvascell * canvascell
    if(canvascell > 100){
        alert('amount too big')
    }
    else{
        DIVmainwrap.style.height = (10 * canvascell) + 'px';
        DIVmainwrap.style.width = (10 * canvascell) + 'px';
        for ( i = 0 ; i < total ; i++ ){
                const canvasblock = document.createElement('div')
                canvasblock.style.opacity= '0%'
                canvasblock.classList.add('canvas');
                canvasblock.style.height= '10px';
                canvasblock.style.width= '10px';
                DIVmainwrap.appendChild(canvasblock)
                console.log('created pixel grid')
                canvasblock.addEventListener('mouseenter', () => 
                    {
                    canvasblock.style.backgroundColor=' rgb(255, 245, 191, 1)';
                    console.log('rendered a cell');
                    opa = opa + 10 ;
                    canvasblock.style.opacity= opa + '%';
                    console.log(opa)
                    }
                , { once: true })
            }
    }
    
}

function resetcanvas(){
    opa=0;
    DIVmainwrap.innerHTML = '';
    DIVmainwrap.style.height ='';
    DIVmainwrap.style.width = '';
    canvasblock.style.opacity= '0%'
}
