$=document.querySelector.bind(document)
$$=document.querySelectorAll.bind(document)
var parent=$('.grid')
var lesslong=$('.lesslong')
var oner=$('.oner')
var twoner=$('.twoner')
var h=$$('.h')
var circle2=$('.circle2')
var row=$('.row')
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
function getParent(value,classparent){
    let o=value.parentElement
   while(!o.matches(`.${classparent}`)){
    o=o.parentElement
   }
   return o

}
function getNumbers(value){
    var number=[]
    for(let i=0;i<value.length;i++){
      if(isNaN(value[i]++)){
        continue
      }
      else{
        number.push(value[i])
      }
    }
    number=number.join('')
    return  number++

}
// h.forEach(element => {
//     element.onclick=function(){
//         get_item=element.querySelectorAll('.item1')
//         console.log(get_item)
//         get_item.forEach(element => {
//             element.style.maxWidth='1000px'
//         });
//     }
// });
// h.forEach(element => {
//     element.onmouseleave=function(){  
//         get_item=element.querySelectorAll('.item1')
//         console.log(get_item)
//         get_item.forEach(element => {
//              element.style.maxWidth='0px'
//             element.onmouseover=function(){
//                 get_item.forEach(element=>{
//                     element.style.maxWidth='1000px'
//                 })
//             }
       
//         })
//         ;
//     }
// });
input=$('.inputsearch')
input.oninput=function(){
getParent(input,'item1').classList.add('maxwidth')
}
input.onblur=function(){
getParent(input,'item1').classList.remove('maxwidth')
}
fixed=$('.fixed')
col=$('.col')
padding=window.getComputedStyle(col, null).getPropertyValue('padding-left')
var width=oner.offsetWidth+'px'
width=getNumbers(width)
padding=getNumbers(padding)
sum=width-2*padding
fixed.style.width=sum+'px'

h.forEach(element => {
  element.onmouseover=function(){
  twoner.style.opacity=0.2
}
element.onmouseleave=function(){
  twoner.style.opacity=1
}
});
////////////////////////////////////////////////////
url='http://localhost:3000/course'
fetch(url)
.then(element=>element.json())
.then(element=>console.log(element))