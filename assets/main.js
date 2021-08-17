const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

window.onload = () => {
    //Khi click vào navbar
    const navMenuClick = $('.nav-bar-click');
    const sliderBar = $('.slider_bar');
    const barChange = $('.btn-click');

    //Hiệu ứng nhấp nháy khi người dùng ấn chuột xuống và nhả chuột ra
    navMenuClick.onmouseup = () => {
        barChange.classList.add('btn-up');
        barChange.classList.remove('btn-down');
    }

    navMenuClick.onmousedown = () => {
        barChange.classList.remove('btn-up');
        barChange.classList.add('btn-down');
       
    }

    navMenuClick.onclick = () => {
      sliderBar.classList.toggle('bar-active');
    }


    //Khi click vào Hiển thị thêm
    const sliderBtn = $('#item-js');
    const itemChange = $$('.item-change');
    const itemChangeOn = $$('.slider_bar-item.item-change.on');
    const btnDownToUp = $('.bx-chevron-down');
    const firstBtn = $('.btn_click-first');
    const secondBtn = $('.btn_click-second'); 


    sliderBtn.onclick = () => {
        itemChange.forEach((item) => {
            item.classList.toggle('on');   
        });
        btnDownToUp.classList.toggle('btn-arrow-up');              
    }

    firstBtn.onclick = () => {
       if(itemChangeOn) {
           firstBtn.innerHTML = 'Ẩn bớt';
       }else {
           firstBtn.innerHTML = 'Hiển thị thêm'
       }
    }

    
    // secondBtn.onclick = (e) => {
    //     if(secondBtn) {
    //         secondBtn.innerHTML = 'Ẩn bớt 2';
    //     }else {
    //         secondBtn.innerHTML = 'Hiển thị thêm 2';
    //     }
    // }



    //When click on microphone
    const micClickBtn = $('.header_microphone');
    const micBtn = $('.item-mic');
    const micModal = $('.modal_mic');
    const micOverlay = $('.overlay-mic');
    const mic_title = $('.mic_title');
    const micBoxWhenClick = $('.mic_box');
    const micDescription = $('.mic_description');
    const micClose = $('.btn-x');
    const barChange2 = $('.btn-click-2')



    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    const recognition = new SpeechRecognition();

    recognition.lang = 'vi-VI';
    recognition.continuous = false;

    micBtn.onclick = (e) => {
        mic_title.innerHTML = 'Đang nghe...';
        mic_title.style.userSelector = 'none';
        e.preventDefault();
        micClickBtn.classList.toggle('mic_click');
        recognition.start();
        micBoxWhenClick.classList.toggle('mic-active');
        micDescription.style.display = 'none'
    }


    //Listener click on dấu X
    micClose.onclick = () => {
        micClickBtn.classList.remove('mic_click');
    }

    //Listener click on overlay
    micOverlay.onclick = () => {
        micClickBtn.classList.remove('mic_click');
    }

    micBtn.onmouseup = () => {
        barChange2.classList.toggle('btn-up-mic');
        barChange2.classList.remove('btn-down-mic');
    }

    micBtn.onmousedown = () => {
        barChange2.classList.remove('btn-up-mic');
        barChange2.classList.toggle('btn-down-mic');
       
    }

    recognition.onspeechend = () => {
        recognition.stop();
    }

    // recognition.onerror = (err) => {
    //   let text = err.type

    //   if(text === 'error') {
    //     mic_title.innerHTML = 'Tôi chưa nghe rõ.Mời bạn nói lại';
    //     micBoxWhenClick.classList.remove('mic-active')
    //   }
    // }

    // recognition.onresult = (e) => {
       
    // }

    
    //When click on videos
    const iconVideos = $('.item-videos')
    const clickVideos = $('.btn-click-3');
    
    iconVideos.onmouseup = () => {
        clickVideos.classList.toggle('btn-up-videos');
        clickVideos.classList.remove('btn-down-videos');
    }

    iconVideos.onmousedown = () => {
        clickVideos.classList.remove('btn-up-videos');
        clickVideos.classList.toggle('btn-down-videos');
       
    }



    //When click on grid
    const iconGrid = $('.item-grid')
    const clickGrid = $('.btn-click-4');
    
    iconGrid.onmouseup = () => {
        clickGrid.classList.toggle('btn-up-grid');
        clickGrid.classList.remove('btn-down-grid');
    }

    iconGrid.onmousedown = () => {
        clickGrid.classList.remove('btn-up-grid');
        clickGrid.classList.toggle('btn-down-grid');
       
    }



    //When click on grid
    const iconBell = $('.item-bell')
    const clickBell = $('.btn-click-5');
    
    iconBell.onmouseup = () => {
        clickBell.classList.toggle('btn-up-bell');
        clickBell.classList.remove('btn-down-bell');
    }

    iconBell.onmousedown = () => {
        clickBell.classList.remove('btn-up-bell');
        clickBell.classList.toggle('btn-down-bell');
       
    }


    // when click on videos show list-down
    const videoOnClick = $('.item-videos');
    const listVideosDown = $('.videos_list-down');
    const gridOnClick = $('.item-grid');
    const listGridDown = $('.grid_down');
    const bellOnclick = $('.item-bell');
    const listBellDown = $('.bell_down');

    videoOnClick.onclick = () => {
        listVideosDown.classList.toggle('active');
        listGridDown.classList.remove('active');
        listBellDown.classList.remove('active');
    }

    gridOnClick.onclick = () => {
        listGridDown.classList.toggle('active');
        listVideosDown.classList.remove('active');
        listBellDown.classList.remove('active');

    }

    bellOnclick.onclick = () => {
        listBellDown.classList.toggle('active');
        listVideosDown.classList.remove('active');
        listGridDown.classList.remove('active');
    }
}