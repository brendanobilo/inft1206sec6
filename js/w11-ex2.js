console.log("Hello");

window.onload = function(){
    document.querySelector('#btn2').onclick=function(){
        console.log('Durham College!!!')
    };
    
    document.querySelector('#btn2').onclick=function(){
        console.log('Brendan Xure')
    };
    
    document.querySelector('#btn3').addEventListener('click', function(){
        console.log('Using Event Listener')
    });
    
    document.querySelector('#btn3').addEventListener('click', function(){
        console.log('INFT1206')
    });
}
