var parent=document.querySelector('.grid')
var lesslong=parent.querySelector('.lesslong')
var oner=parent.querySelector('.oner')
var twoner=parent.querySelector('.twoner')
var h=parent.querySelector('.h')
var circle2=parent.querySelector('.circle2')
var row=parent.querySelector('.row')
console.log(h)
lesslong.onclick=function(){
    oner.classList.add('animation')
    twoner.style.transition='all 0.1s ease'
setTimeout(()=>{
oner.style.display='none'
 twoner.classList.add('l-12')
},100)
circle2.style.display='flex'
row.classList.add('add')
}
circle2.onclick=function(){
    twoner.classList.remove('l-12')
    oner.classList.remove('animation')
    oner.classList.add('animation_reverse')
    circle2.style.display='none'
    setTimeout(()=>{ oner.style.display='block'
    row.classList.remove('add')  },100)
}