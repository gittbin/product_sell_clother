item1=document.querySelector('.item1')
show=document.querySelector('.show')
showsuccess=document.querySelector('.showsuccess')
icon=document.querySelector('.icon')
// console.log(show.innerHTML)
console.log(item1)
item2=document.querySelector('.item2')
// item1.onclick = function(){
//     let a= document.createElement('div')
//     a.innerHTML=
//     ` <div class="showsuccess">
//     <div>
//      <lord-icon
// src="https://cdn.lordicon.com/egiwmiit.json"
// trigger="hover"
// colors="primary:#16c72e"
// style="width:40px;height:40px">
// </lord-icon>
//     </div>
//     <div>
//      <h2>Success</h2>
//      <p>Business on the basis of knowledge, integrity, investment in research and development (R&D) and continuous innovation.</p>
//     </div>
//     <div>
//      <lord-icon
//      src="https://cdn.lordicon.com/nhfyhmlt.json"
//      trigger="hover"
//      style="width:40px;height:40px" class="icon">
//  </lord-icon>
//     </div>
// </div> `
// icon=a.querySelector('.icon')
// icon.onclick=()=>{
//   show.removeChild(a)
//   a=0
// }

//      setTimeout(()=>{
//         if(a!=0){show.removeChild(a)}
//     },5000)
//       show.appendChild(a);
// }

// item2.onclick = function(){
//  let a= document.createElement('div')
//  a.innerHTML=
//  ` <div class="showsuccess2 d">
//       <div>
//           <lord-icon
//           src="https://cdn.lordicon.com/bmnlikjh.json"
//           trigger="hover"
//           colors="primary:#e83a30"
//           style="width:40px;height:40px">
//       </lord-icon>
//       </div>
//       <div>
//        <h2>Error</h2>
//        <p>Business on the basis of knowledge, integrity, investment in research and development (R&D) and continuous innovation.</p>
//       </div>
//       <div>
//        <lord-icon
//        src="https://cdn.lordicon.com/nhfyhmlt.json"
//        trigger="hover"
//        style="width:40px;height:40px" class="icon">
//    </lord-icon>
//       </div>
//   </div>`
//   icon=a.querySelector('.icon')
//   showsuccess2=a.querySelector('.showsuccess2')
// //   showsuccess2.onmouseover=()=>{
// //     a=9
// //     showsuccess2.style.opacity=1
// //   }
// //   showsuccess2.onmouseout=()=>{
// //     a=9
// //     showsuccess2.style.opacity=0
// //     show.removeChild(a)
// //   }
//   icon.onclick=()=>{
//     show.removeChild(a)
//     a=0
//   }
// // console.log(icon)
//   show.appendChild(a);

//   setTimeout(()=>{console.log(a)
//     if(a!=0&&a!=9){show.removeChild(a)}
// },5000)
// }










o={
Success:`<lord-icon src="https://cdn.lordicon.com/egiwmiit.json"
trigger="hover"
colors="primary:#16c72e"
style="width:40px;height:40px">
</lord-icon>`,
Error:
`          <lord-icon
src="https://cdn.lordicon.com/bmnlikjh.json"
trigger="hover"
colors="primary:#e83a30"
style="width:40px;height:40px">
</lord-icon>`
}

function toast([{
  classs="",
  type="",
  text="",
  time = 3000,

}]
)
{
  let a=document.createElement("div");

  a.innerHTML=
   `<div class="${classs}">
   <div>
 ${o[type]}
      </div>
      <div>
       <h2>${type}</h2>
       <p>${text}</p>
      </div>
      <div>
       <lord-icon
       src="https://cdn.lordicon.com/nhfyhmlt.json"
       trigger="hover"
       style="width:40px;height:40px" class="icon">
   </lord-icon>
      </div>
  </div>
  </div>
  `

  icon=a.querySelector('.icon')
  classss=a.querySelector(`.${classs}`)
classss.style.animation=`animation: trans ease ${time} ;`
  icon.onclick=()=>{
    show.removeChild(a)
    a=0
  }
  show.appendChild(a);

  setTimeout(()=>{
    if(a!=0&&a!=9){show.removeChild(a)}
},time)
}
item1.onclick=()=>{toast(
  [{
  classs:'showsuccess',
  type:'Success',
  text:'xách balo mà đi đi thật xa về nơi phía cuối con đường',
  time:5000
}]
)}
item2.onclick=()=>{toast(
  [{
  classs:'showsuccess2',
  type:'Error',
  text:'xách balo mà đi đi thật xa về nơi phía cuối con đường',
  time:5000
}]
)}




















// console.log(toast(
//   [{
//   classs:'showsuccess2',
//   type:'Success',
//   text:'xách balo mà đi đi thật xa về nơi phía cuối con đường',
//   time:3000
// }]
// ))n a() {}
// async function foo() {
// try{  const result1 = await new Promise((resolve,reject) =>
// setTimeout(() => resolve("1")),
// );
// console.log(result1)
// const result2 = await new Promise((resolve) =>
// setTimeout(() => resolve("2")),
// );
// console.log(result2)} catch(error){
//   console.log("day la loiiiiiiiiiiiiiiiiiiiiiiiiii",error)
// }
// }
// foo();
// async function f() {
//   return 1
// }
// f()
// .then(a=>{console.log(a)})

// async function ff() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000)
//   });

//   let result = await promise; // wait until the promise resolves (*)
// console.log(9)
//   console.log('aaaaaa',result); // "done!"
// }

// ff();
// async function showAvatar() {

//   // read our JSON
//   let response = await fetch('/article/promise-chaining/user.json');
//   let user = await response.json();

//   // read github user
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();

//   // show the avatar
//   let img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);

//   // wait 3 seconds
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();
// async function o(){
//   i= await Promise.resolve(1)
//   console.log('day la i',i)
//   return i
// }

// async function p(){
//   return 1
// }
// console.log(o())