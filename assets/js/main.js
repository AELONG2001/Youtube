const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Render videos
function renderVideos() {
    const listVideos = [
        {
            avatar: 'Đi_Đi_Đi.jpg',
            time: '4:59',
            channelAvatar: 'K-ICM.jpg',
            title: 'Đi Đi Đi - Xách ba lô lên và đi (Cuộc sống được bao lâu mà bạn phải chờ đợi)',
            author: 'K-ICM Official',
            view: '5,3Tr lượt xem',
            date: '3 năm trước'
        },

        {
            avatar: 'Đi_Đi_Đi.jpg',
            time: '4:59',
            channelAvatar: 'K-ICM.jpg',
            title: 'Đi Đi Đi - Xách ba lô lên và đi (Cuộc sống được bao lâu mà bạn phải chờ đợi)',
            author: 'K-ICM Official',
            view: '5,3Tr lượt xem',
            date: '3 năm trước'
        },

        {
            avatar: 'Đi_Đi_Đi.jpg',
            time: '4:59',
            channelAvatar: 'K-ICM.jpg',
            title: 'Đi Đi Đi - Xách ba lô lên và đi (Cuộc sống được bao lâu mà bạn phải chờ đợi)',
            author: 'K-ICM Official',
            view: '5,3Tr lượt xem',
            date: '3 năm trước'
        },

        {
            avatar: 'Đi_Đi_Đi.jpg',
            time: '4:59',
            channelAvatar: 'K-ICM.jpg',
            title: 'Đi Đi Đi - Xách ba lô lên và đi (Cuộc sống được bao lâu mà bạn phải chờ đợi)',
            author: 'K-ICM Official',
            view: '5,3Tr lượt xem',
            date: '3 năm trước'
        },

        {
            avatar: 'Đi_Đi_Đi.jpg',
            time: '4:59',
            channelAvatar: 'K-ICM.jpg',
            title: 'Đi Đi Đi - Xách ba lô lên và đi (Cuộc sống được bao lâu mà bạn phải chờ đợi)',
            author: 'K-ICM Official',
            view: '5,3Tr lượt xem',
            date: '3 năm trước'
        },

        {
            avatar: 'Đi_Đi_Đi.jpg',
            time: '4:59',
            channelAvatar: 'K-ICM.jpg',
            title: 'Đi Đi Đi - Xách ba lô lên và đi (Cuộc sống được bao lâu mà bạn phải chờ đợi)',
            author: 'K-ICM Official',
            view: '5,3Tr lượt xem',
            date: '3 năm trước'
        },

        {
            avatar: 'Đi_Đi_Đi.jpg',
            time: '4:59',
            channelAvatar: 'K-ICM.jpg',
            title: 'Đi Đi Đi - Xách ba lô lên và đi (Cuộc sống được bao lâu mà bạn phải chờ đợi)',
            author: 'K-ICM Official',
            view: '5,3Tr lượt xem',
            date: '3 năm trước'
        },

        {
            avatar: 'Đi_Đi_Đi.jpg',
            time: '4:59',
            channelAvatar: 'K-ICM.jpg',
            title: 'Đi Đi Đi - Xách ba lô lên và đi (Cuộc sống được bao lâu mà bạn phải chờ đợi)',
            author: 'K-ICM Official',
            view: '5,3Tr lượt xem',
            date: '3 năm trước'
        },

        {
            avatar: 'Đi_Đi_Đi.jpg',
            time: '4:59',
            channelAvatar: 'K-ICM.jpg',
            title: 'Đi Đi Đi - Xách ba lô lên và đi (Cuộc sống được bao lâu mà bạn phải chờ đợi)',
            author: 'K-ICM Official',
            view: '5,3Tr lượt xem',
            date: '3 năm trước'
        },

        {
            avatar: 'Đi_Đi_Đi.jpg',
            time: '4:59',
            channelAvatar: 'K-ICM.jpg',
            title: 'Đi Đi Đi - Xách ba lô lên và đi (Cuộc sống được bao lâu mà bạn phải chờ đợi)',
            author: 'K-ICM Official',
            view: '5,3Tr lượt xem',
            date: '3 năm trước'
        },

        {
            avatar: 'Đi_Đi_Đi.jpg',
            time: '4:59',
            channelAvatar: 'K-ICM.jpg',
            title: 'Đi Đi Đi - Xách ba lô lên và đi (Cuộc sống được bao lâu mà bạn phải chờ đợi)',
            author: 'K-ICM Official',
            view: '5,3Tr lượt xem',
            date: '3 năm trước'
        },

        {
            avatar: 'Đi_Đi_Đi.jpg',
            time: '4:59',
            channelAvatar: 'K-ICM.jpg',
            title: 'Đi Đi Đi - Xách ba lô lên và đi (Cuộc sống được bao lâu mà bạn phải chờ đợi)',
            author: 'K-ICM Official',
            view: '5,3Tr lượt xem',
            date: '3 năm trước'
        },

        {
            avatar: 'Đi_Đi_Đi.jpg',
            time: '4:59',
            channelAvatar: 'K-ICM.jpg',
            title: 'Đi Đi Đi - Xách ba lô lên và đi (Cuộc sống được bao lâu mà bạn phải chờ đợi)',
            author: 'K-ICM Official',
            view: '5,3Tr lượt xem',
            date: '3 năm trước'
        },

        {
            avatar: 'Đi_Đi_Đi.jpg',
            time: '4:59',
            channelAvatar: 'K-ICM.jpg',
            title: 'Đi Đi Đi - Xách ba lô lên và đi (Cuộc sống được bao lâu mà bạn phải chờ đợi)',
            author: 'K-ICM Official',
            view: '5,3Tr lượt xem',
            date: '3 năm trước'
        },

        {
            avatar: 'Đi_Đi_Đi.jpg',
            time: '4:59',
            channelAvatar: 'K-ICM.jpg',
            title: 'Đi Đi Đi - Xách ba lô lên và đi (Cuộc sống được bao lâu mà bạn phải chờ đợi)',
            author: 'K-ICM Official',
            view: '5,3Tr lượt xem',
            date: '3 năm trước'
        },

        {
            avatar: 'Đi_Đi_Đi.jpg',
            time: '4:59',
            channelAvatar: 'K-ICM.jpg',
            title: 'Đi Đi Đi - Xách ba lô lên và đi (Cuộc sống được bao lâu mà bạn phải chờ đợi)',
            author: 'K-ICM Official',
            view: '5,3Tr lượt xem',
            date: '3 năm trước'
        },


    ]

    let videos = $('.render-list-videos');
    let video = '';

    for(getVideo of listVideos) {
        video += `
                        <div class="col-3 col-video-mb add-video-translateX product_video-X">
                            <div class="product_video">
                                <a href="" class="product_video-link">
                                    <div class="product_video-img">
                                        <img  src="./assets/img/${getVideo.avatar}" alt="Avatar Video" class="product_video-img-main product_video-img-main-X">
                                        <span class="product_video-img-time">${getVideo.time}</span>

                                        <div class="videos-icon-play">
                                            <i class="bx bx-play"></i>
                                        </div>

                                        <ul class="videos_list-icon-hover">
                                            <li class="videos_item-icon-hover videos_item-icon-hover-time">
                                                <i class="bx bxs-time bxf-time"></i>
                                                
                                                <div class="list-icon-skiing-time">
                                                <span>Xem sau</span>
                                                </div>   
                                            </li>

                                            <li class="videos_item-icon-hover videos_item-icon-hover-list-ul">
                                                <i class="bx bx-list-ul bxf-list-ul"></i>

                                                <div class="list-icon-skiing-ul">
                                                <span>Thêm vào danh sách chờ</span>
                                                </div>
                                            </li>
                                        </ul>

                                        
                                    </div>

                                    <div class="product_video_content">
                                        <div class="product_video-img-user">
                                            <img src="./assets/img/${getVideo.channelAvatar}" alt="Avatar Channel">
                                        </div>

                                        <div class="product_video-description">
                                            <div class="product_video-title">
                                                <h4>${getVideo.title}</h4>
                                            </div>

                                            <div class="product_video_user-chanel">
                                                <span class="product_video_user-name">${getVideo.author}</span>
                                                <span class="product_video_user-verified">
                                                    <i class="bx bxs-check-circle"></i>
                                                </span>
                                            </div>

                                            <div class="product_video-info">
                                                <span class="product_video-info-view">${getVideo.view}</span>
                                                <span class="product_video-info-dot">
                                                    <i class="fas fa-circle"></i>
                                                </span>
                                                <span class="product_video-info-date">${getVideo.date}</span>
                                            </div>

                                            <div class="product_video-option">
                                                <i class="bx bx-dots-vertical-rounded bxf-dots-vertical-rounded-video"></i>
                                            </div>

                                        </div>
                                    </div>
                                </a>
                            </div>
                    </div> 

                  `
    }

    videos.innerHTML = video;
}

renderVideos();

//Khi click vào navbar
const navMenuClick = $('.nav-bar-click');
const sliderBar = $('.slider_bar');
const barChange = $('.btn-click');
const sliderSmall = $('.slider-small');
const containerVideos = $('.container-videos');
const productVideosX = $('.product_videos-total');
const addTranslateX = $$('.add-video-translateX');
const addTranslateImgX = $$('.product_video-img-main');
const scrollWhenClick = $('.slider_container_scroll');
const navBarTransformNextBtn = $('.next-btn');
const navBarFixSlider = $('.container_scroll-list');

//Hiệu ứng nhấp nháy khi người dùng ấn chuột xuống và nhả chuột ra
navMenuClick.onmouseup = () => {
    barChange.classList.add('btn-up');
    barChange.classList.remove('btn-down');
};

navMenuClick.onmousedown = () => {
    barChange.classList.remove('btn-up');
    barChange.classList.add('btn-down');
    
};

navMenuClick.onclick = () => {
    sliderBar.classList.toggle('bar-active');
    sliderSmall.classList.toggle('show-small');


    //Dịch chuyển thanh trượt slider khi click vào navbar
    scrollWhenClick.classList.toggle('scroll-when-click');


    //Dịch chuyển container_scroll-list khi click vào navbar
    navBarFixSlider.classList.toggle('container_scroll-list-fix-navbar');


    //Dịch chuyển nút next-btn khi click vào navbar
    navBarTransformNextBtn.classList.toggle('next-transform-btn');

    
    //fix lại width của container khi click vào navbar
    containerVideos.classList.toggle('container-videos-X');
    productVideosX.classList.toggle('product_videos-total-X');


    addTranslateX.forEach((itemCol) => {
        itemCol.classList.toggle('product_video-X'); //Kiểm tra khi có class này thì thêm vô --> không có thì xóa đi
    });

    addTranslateImgX.forEach((itemImg) => {
        itemImg.classList.toggle('product_video-img-main-X'); //Kiểm tra khi có class này thì thêm vô --> không có thì xóa đi
    })
    
};


//Khi click vào Hiển thị thêm
const sliderBtn = $('#item-js');
const itemChange = $$('.item-change');
const btnDownToUp = $('.bx-chevron-down');
const btnClickHtt = $('.btn_click-htt');

sliderBtn.onclick = () => {
    itemChange.forEach((item) => {
        item.classList.toggle('on');   
    });
    btnDownToUp.classList.toggle('btn-arrow-up'); 

    //Kiểm tra nếu có class btn-arrow-up thì inner 'Ẩn bớt" nếu không có --> thì inner 'Hiển thị thêm'
    const btn_icon_fix = $('.btn-arrow-up')
    if(btn_icon_fix) {
        btnClickHtt.innerHTML = 'Ẩn bớt';
    }else {
        btnClickHtt.innerHTML = 'Hiển thị thêm'             
    };
}


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
};


//Listener click on dấu X
micClose.onclick = () => {
    micClickBtn.classList.remove('mic_click');
};

//Listener click on overlay
micOverlay.onclick = () => {
    micClickBtn.classList.remove('mic_click');
};

micBtn.onmouseup = () => {
    barChange2.classList.toggle('btn-up-mic');
    barChange2.classList.remove('btn-down-mic');
};

micBtn.onmousedown = () => {
    barChange2.classList.remove('btn-up-mic');
    barChange2.classList.toggle('btn-down-mic');
    
};

recognition.onspeechend = () => {
    recognition.stop();
};

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
    listVideosDown.addEventListener('mouseup', (e) => {
        e.stopPropagation();
    });

};

iconVideos.onmousedown = () => {
    clickVideos.classList.remove('btn-up-videos');
    clickVideos.classList.toggle('btn-down-videos');
    listVideosDown.addEventListener('mousedown', (e) => {
        e.stopPropagation();
    });

};



//When click on grid
const iconGrid = $('.item-grid')
const clickGrid = $('.btn-click-4');

iconGrid.onmouseup = () => {
    clickGrid.classList.toggle('btn-up-grid');
    clickGrid.classList.remove('btn-down-grid');        
    listGridDown.addEventListener('mouseup', (e) => {
        e.stopPropagation();
    });
};

iconGrid.onmousedown = () => {
    clickGrid.classList.remove('btn-up-grid');
    clickGrid.classList.toggle('btn-down-grid');   
    listGridDown.addEventListener('mousedown', (e) => {
        e.stopPropagation();
    });
    
};



//When click on grid
const iconBell = $('.item-bell')
const clickBell = $('.btn-click-5');

iconBell.onmouseup = () => {
    clickBell.classList.toggle('btn-up-bell');
    clickBell.classList.remove('btn-down-bell');
    listBellDown.addEventListener('mouseup', (e) => {
        e.stopPropagation();
    });
};

iconBell.onmousedown = () => {
    clickBell.classList.remove('btn-up-bell');
    clickBell.classList.toggle('btn-down-bell');
    listBellDown.addEventListener('mousedown', (e) => {
        e.stopPropagation();
    });
};


// when click on videos show list-down
const videoOnClick = $('.item-videos');
const listVideosDown = $('.videos_list-down');
const gridOnClick = $('.item-grid');
const listGridDown = $('.grid_down');
const bellOnclick = $('.item-bell');
const listBellDown = $('.bell_down');
const userOnclick = $('.item-user');
const listUserDown = $('.user_down');
const borderUserClick = $('.border_user-avatar')

videoOnClick.onclick = (e) => {
    listVideosDown.classList.toggle('active');
    listGridDown.classList.remove('active');
    listBellDown.classList.remove('active');
}

//Ngăn chặn sự kiện nổi bọt
listVideosDown.addEventListener('click', (e) => {
    e.stopPropagation();
});

gridOnClick.onclick = () => {
    listGridDown.classList.toggle('active');
    listVideosDown.classList.remove('active');
    listBellDown.classList.remove('active');
};

//Ngăn chặn sự kiện nổi bọt và mặc định của trình duyệt
listGridDown.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
});

bellOnclick.onclick = () => {
    listBellDown.classList.toggle('active');
    listVideosDown.classList.remove('active');
    listGridDown.classList.remove('active');
};

//Ngăn chặn sự kiện nổi bọt
listBellDown.addEventListener('click', (e) => {
    e.stopPropagation();
});

userOnclick.onclick = () => {
    listUserDown.classList.toggle('active');
    listBellDown.classList.remove('active');
    listVideosDown.classList.remove('active');
    borderUserClick.classList.toggle('border_user-click');
};

//Ngăn chặn sự kiện nổi bọt
listUserDown.addEventListener('click', (e) => {
    e.stopPropagation();
});


       