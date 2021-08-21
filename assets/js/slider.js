//JavaScript for slider
const listOptionPar = $('.slider_container_scroll');
const listOption = $('.container_scroll-list');
const prevBtn = $('.prev-btn');
const nextBtn = $('.next-btn');

//Parse translateX value to number
function parseValue(value) {
     return Number(value.replace(/[^-?\d.]/g, ''));
}

//Create slider
function slider() {
    //set main width for container scroll
    let scrollMainWidth = () => {
       let scrollList = listOption.querySelectorAll('.container_scroll-item');
       scrollWidth = 0;
       paddingLeft = window.getComputedStyle(listOption).paddingLeft || 0;
       paddingRight = window.getComputedStyle(listOption).paddingRight || 0;

       for(let item of scrollList) {
           scrollWidth += item.getBoundingClientRect().width;
       }

       listOption.style.width = `${scrollWidth + parseValue(paddingLeft) + parseValue(paddingRight)}px`;
       return listOption.getBoundingClientRect().width;
    }

     
     

     listOptionParWidth = listOptionPar.getBoundingClientRect().width;
     scrollWidth = scrollMainWidth();

     let distance = -(scrollWidth - listOptionParWidth);
     isDown = false;
     isMove = false; //Ngăn nhấp chuột liên tục vào trang trình bày
     let startX;
     scrollLeft = 0;
     updateValue = 0;

     //Show or hide buttons(Ẩn hiện mũi tên trái phải)
     let hide = (e) => {
         e.style.display = 'none';
     }

     let show = (e) => {
         e.style.display = 'block';
     }

     //Tạo thanh trượt kéo
     let dragSlider = () => {
         listOption.addEventListener('mousedown', (e) => {
             isDown = true;
             startX = e.pageX - listOption.offsetLeft;

             //Giá trị sẽ được cập nhập cho mỗi lần kéo mới
             if(isMove) {
                 updateValue += scrollLeft;
                 isMove = false;
             }

         });



         listOption.addEventListener('mouseup', () => {
             isDown = false;
         });

         listOption.addEventListener('mouseleave', () => {
             isDown = false;
         });

         listOption.addEventListener('mousemove', (e) => {
             if(!isDown) return;
             e.preventDefault();

             isMove = true;
             const x = e.pageX - listOption.offsetLeft;  

             
             //handle when the user drags to the left(Khi người dùng kéo tất cả sang trái)
             if(x < startX || parseValue(listOption.style.transform) < 0) {
                 let walk = x - startX;
                 scrollLeft = walk;
             

                 listOption.style.transform = `translateX(${updateValue + walk}px)`;

                 //handle when the user drags all the way to the left(Khi người dùng kéo tất cả sang trái)
                 if(parseValue(listOption.style.transform) <= distance) {
                     startX = x;
                     updateValue = distance;

                     listOption.style.transform = `translateX(${distance}px)`;
                 }

                 show(prevBtn);
                 
                 if (Math.ceil(parseValue(listOption.style.transform)) <= Math.ceil(distance)) {
                    hide(nextBtn);
                 }else {
                    show(nextBtn);
                 }

             }

                 //handle when the user drags all the way to the right(Khi người dùng kéo tất cả sang phải)
                 else if(x > startX) {
                     startX = x;
                     updateValue = 0;
                     scrollLeft = 0;
                     listOption.style.transform = `translateX(0)`;

                     hide(prevBtn);
                     
                 }
            
         });

     
         //Ngăn chặn hành vi mặc định của thẻ a
         const linkOptions = $$('.container_scroll-link');

            linkOptions.forEach((linkItem) => {
                linkItem.onclick = (e) => {
                  e.preventDefault();
                }
            })

 

     }

     dragSlider();

     //Tạo thanh trượt nhấp chuột
     let clickSlider = () => {
         let listOptionParWidth = listOptionPar.getBoundingClientRect().width;
         let scrollWidth = listOption.getBoundingClientRect().width;
         let distance = (scrollWidth - listOptionParWidth);

         prevBtn.style.display = 'none';

         nextBtn.addEventListener('click', () =>  {
             listOption.style.transform = `translateX(${parseValue(listOption.style.transform) - 320}px)`;
                 
             if(parseValue(listOption.style.transform) <= -distance) {
                 listOption.style.transform = `translateX(-${distance}px)`;
                 hide(nextBtn);
             }

             updateValue = parseValue(listOption.style.transform);
             scrollLft = 0;
             show(prevBtn);
         });

         prevBtn.addEventListener('click', () => {
             listOption.style.transform = `translateX(${parseValue(listOption.style.transform) + 0}px)`;

             if(parseValue(listOption.style.transform) >= 0) {
                listOptions.style.transform = `translateX(0px)`;
                hide(prevBtn);
             }

             updateValue = parseValue(listOption.style.transform);
             scrollLeft = 0;
             show(nextBtn);
         })

     }

     clickSlider();
 
}

slider();
