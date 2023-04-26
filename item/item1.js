$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);
var parent = $('.grid');
var option_mobile = $('.option_mobile');
var body = $('body');
var lesslong = $('.lesslong');
var oner = $('.oner');
var returnn = $('.returnn');
var input_mobile = $('.input_mobile');
var button_mobile = $('.button_mobile');
var form_mobile = $('.form_mobile');
var twoner = $('.twoner');
var search_mobile = $('.search_mobile');
var h = $$('.h');
var circle2 = $('.circle2');
var row = $('.row');
var menu = $('.menu');
var menu_mobile = $('.menu_mobile');
var head = $('.head');
var element_of_menu = $('.element_of_menu');
var element_of_mobile = $$('.element_of_mobile');
lesslong.onclick = function () {
    oner.classList.add('animation');
    twoner.style.transition = 'all 0.1s ease';
    setTimeout(() => {
        oner.style.display = 'none';
        twoner.classList.add('l-12');
    }, 100);
    circle2.style.display = 'flex';
    row.classList.add('add');
};
circle2.onclick = function () {
    twoner.classList.remove('l-12');
    oner.classList.remove('animation');
    oner.classList.add('animation_reverse');
    circle2.style.display = 'none';
    setTimeout(() => {
        oner.style.display = 'block';
        row.classList.remove('add');
    }, 100);
};
function getParent(value, classparent) {
    let o = value.parentElement;
    while (!o.matches(`.${classparent}`)) {
        o = o.parentElement;
    }
    return o;
}
function getNumbers(value) {
    var number = [];
    for (let i = 0; i < value.length; i++) {
        if (isNaN(value[i]++)) {
            continue;
        } else {
            number.push(value[i]);
        }
    }
    number = number.join('');
    return number++;
}
h.forEach((element) => {
    element.onclick = function () {
        get_item = element.querySelectorAll('.item1');
        get_item.forEach((element) => {
            if (element.style.maxWidth == '1000px') {
                element.style.maxWidth = '0px';
                twoner.style.opacity = 1;
            } else {
                element.style.maxWidth = '1000px';
                twoner.style.opacity = 0.2;
            }
        });
    };
});
h.forEach((element) => {
    element.onblur = function () {
        get_item = element.querySelectorAll('.item1');
        get_item.forEach((element) => {
            element.style.maxWidth = '0px';
            twoner.style.opacity = 1;
        });
    };
});

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
input = $('.inputsearch');
input.oninput = function () {
    getParent(input, 'item1').classList.add('maxwidth');
};
input.onblur = function () {
    getParent(input, 'item1').classList.remove('maxwidth');
};
fixed = $('.fixed');
col = $('.col');
padding = window.getComputedStyle(col, null).getPropertyValue('padding-left');
var width = oner.offsetWidth + 'px';
width = getNumbers(width);
padding = getNumbers(padding);
sum = width - 2 * padding;
fixed.style.width = sum + 'px';

h.forEach((element) => {
    element.onmouseover = function () {
        twoner.style.opacity = 0.2;
    };
    element.onmouseleave = function () {
        twoner.style.opacity = 1;
    };
});
////////////////////////////////////////////////////
url = 'http://localhost:3000/course';
// fetch(url)
// .then(element=>element.json())
// .then(getVideo)
function getVideo(value) {
    refer = value.map(function (element) {
        return `
  <a class="a" href="${element.link}">
  <div class="shortfilm">
      <div class="coverimage">
      <img class="image" alt="" style="background-color: transparent;" class="" src="${element.image}">
      </div>
      <div class="detail">
         <div class="avatar">
              <img class="avatardetail" width="100%" src="${element.logo}" alt="">
         </div>  
         <div class="content">
                <span class="comment">
                      ${element.comment}
                </span>
                <span class="name">
                         <span class="namee">${element.name}</span>
                         ${element.view} lượt xem  - ${element.time} ngày trước
                </span>
         </div>                      


      </div>
      
 </div>
 </a>
  `;
    });
    head.innerHTML = refer.join('');
}
element_of_menu.onclick = function () {
    element_of_mobile.forEach((element) => {
        if (!element.classList.contains('appear')) {
            element.classList.add('appear');
        } else {
            element.classList.remove('appear');
        }
    });
};
var width = body.clientWidth / 2 - 100;
search_mobile.onclick = function (e) {
    e.preventDefault();
    element_of_mobile.forEach((element) => {
        element.style.display = 'none';
    });
    element_of_menu.style.display = 'none';
    menu.style.transform = `translateX(${width}px) translateY(-50%)`;
    setTimeout(() => {
        menu.style.transform = `translateX(0px) translateY(0px)`;
        menu.classList.add('menu_change');
        menu_mobile.style.display = 'flex';
    }, 500);
    setTimeout(() => {
        form_mobile.style.width = '100%';
        returnn.style.width = '120px';
        option_mobile.style.display = 'block';
        menu.style.background = 'rgb(206, 223, 143)';
        button_mobile.style.display='block';
    }, 1050);
    setTimeout(() => {
        option_mobile.style.background = 'rgb(206, 223, 143)';
    }, 1200);
};
returnn.onclick = function () {
    button_mobile.style.display='none';
    form_mobile.style.width = '0%';
    option_mobile.style.background = 'rgb(0, 0, 0)';
    returnn.style.width = '0px';
    option_mobile.style.display = 'none';
    menu_mobile.style.display = 'none';
    menu.classList.remove('menu_change');
    setTimeout(() => {
        element_of_mobile.forEach((element) => {
            element.style.display = 'flex';
            element_of_menu.style.display = 'block';
            menu.style.background = 'rgb(0, 0, 0)';
        });
    }, 500);
    menu.style.transform = `translateX(-50%) translateY(-50%)`;
};
console.log({ body });
console.log(width);
