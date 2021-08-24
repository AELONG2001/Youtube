const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Render videos
function renderVideos() {
    const listVideos = [
        {
            linkVideo: './list-videos/video1.html',
            avatar: 'video1.jpg',
            time: '0:17',
            channelAvatar: 'f8-myfavourite.jpg',
            title: 'F8 có gì mới trong lần trở lại này ?',
            author: 'F8 Official',
            view: '8 N lượt xem',
            date: '1 tháng trước'
        },

        {
            avatar: 'video2.jpg',
            time: '6:35',
            channelAvatar: 'f8-myfavourite.jpg',
            title: 'Lần trở lại này F8 sẽ làm gì cho các bạn? Học lập trình để đi làm tại F8 nào!',
            author: 'F8 Official',
            view: '12 N lượt xem',
            date: '1 tháng trước'
        },

        {
            avatar: 'video3.jpg',
            time: '15:44',
            channelAvatar: 'f8-myfavourite.jpg',
            title: 'F8 SẬP? MÌNH ĐÃ FIX NHƯ THẾ NÀO? - FIX BUGS IN THE HOSPITAL',
            author: 'F8 Official',
            view: '20 N lượt xem',
            date: '24 ngày trước'
        },

        {
            avatar: 'video4.png',
            time: '34:51',
            channelAvatar: 'f8-myfavourite.jpg',
            title: 'Sinh viên IT đi thực tập cần biết những gì? | Đi thực tập cần chuẩn bị những gì? | Thực tập IT',
            author: 'F8 Official',
            view: '98 N lượt xem',
            date: '8 tháng trước'
        },

        {
            avatar: 'video5.png',
            time: '10:35',
            channelAvatar: 'tuan-can.jpg',
            title: 'Cung Đường Hòa Lạc Hòa Bình Dành Cho Biker Mê Tốc Độ',
            author: 'Tuấn Cận Vlog',
            view: '4,2 Tr lượt xem',
            date: '2 tháng trước'
        },

        {
            avatar: 'video6.jpg',
            time: '10:44',
            channelAvatar: 'minh-bup-be.jpg',
            title: 'Tik Tok Phượt - Đi Để Biết Ta Là Ai Trong Cuộc Đời | Minh Motor',
            author: 'Minh Búp Bê',
            view: '136 N lượt xem',
            date: '2 năm trước'
        },

        {
            avatar: 'video7.png',
            time: '7:54',
            channelAvatar: 'A_navu.jpg',
            title: 'Lần đầu chạy thử Kawasaki Ninja H2 - Phê hết nước chấm | Navu Vlog',
            author: 'Navu Vlog',
            view: '59 N lượt xem',
            date: '2 tháng trước'
        },

        {
            avatar: 'video8.jpg',
            time: '17:27',
            channelAvatar: 'le-gia-huy.jpg',
            title: 'Thử Thách Ôm Cua Không Lấn Lane Đèo Omega',
            author: 'Lê Gia Huy',
            view: '39 N lượt xem',
            date: '5 ngày trước'
        },

        {
            avatar: 'video9.jpg',
            time: '4:59',
            channelAvatar: 'K-ICM.jpg',
            title: 'Đi Đi Đi - Xách ba lô lên và đi (Cuộc sống được bao lâu mà bạn phải chờ đợi)',
            author: 'K-ICM Official',
            view: '5,3 Tr lượt xem',
            date: '3 năm trước'
        },

        {
            avatar: 'video10.jpg',
            time: '5:30',
            channelAvatar: 'tik_tokNH.jpg',
            title: 'Ngẫu hứng-Bóng Tối Trước Bình Minh Remix (DJ QT Mix) Trai xinh gái đẹp trong Bar',
            author: 'TikTok QT - Dj QT',
            view: '2,9 Tr lượt xem',
            date: '2 năm trước'
        },

        {
            avatar: 'video11.jpg',
            time: '5:46',
            channelAvatar: 'HoaNguyen_Official.jpg',
            title: 'Đại Thiên Bồng - Lộ Gia | 大天蓬 - 璐爷 (DJ 阿超 Remix) Cổ Phong Thần Khúc - TikTok',
            author: 'Hoa Nguyễn Official',
            view: '3,4 Tr lượt xem',
            date: '8 tháng trước'
        },

        {
            avatar: 'video12.jpg',
            time: '3:32',
            channelAvatar: 'Alan_Walker.jpg',
            title: 'Alan Walker - Faded',
            author: 'Alan Walker',
            view: '3,1 T lượt xem',
            date: '5 năm trước'
        },

        {
            avatar: 'video13.jpg',
            time: '11:59',
            channelAvatar: 'k+_plus.jpg',
            title: 'WEST HAM - LEICESTER | ANTONIO TỎA SÁNG, BÚA TẠ ĐẬP NÁT BẦY CÁO TẠI LONDON | NGOẠI HẠNG ANH 2021/22',
            author: 'K-plus Sports',
            view: '666 N lượt xem',
            date: '1 ngày trước'
        },

        {
            avatar: 'video14.jpg',
            time: '32:42',
            channelAvatar: 'cam_bong_da.jpg',
            title: 'Ngôi đền huyền thoại | LIONEL MESSI (Phần 3)',
            author: 'Cảm bóng đá',
            view: '196 N lượt xem',
            date: '5 ngày trước'
        },

        {
            avatar: 'video15.jpg',
            time: '8:09',
            channelAvatar: 'tuyen_van_hoa.jpg',
            title: 'TIN TRƯA 7/8 | MESSI VỀ VỚI PSG ĐỂ GIEO ÁC MỘNG CHO MỌI ĐỘI BÓNG TRÊN TOÀN THẾ GIỚI',
            author: 'Tuyền Văn Hóa',
            view: '360 N lượt xem',
            date: '18 ngày trước'
        },

        {
            avatar: 'video16.jpg',
            time: '25:58',
            channelAvatar: 'man_nhan_tv.jpg',
            title: 'Khoảnh khắc lịch sử - Messi thâu tóm mọi danh hiệu cá nhân - ăn mừng chức vô địch Copa 2021',
            author: 'MÃN NHÃN TV',
            view: '883 N lượt xem',
            date: '1 tháng trước'
        },


    ]

    let videos = $('.render-list-videos');
    let video = '';

    for(getVideo of listVideos) {
        video += `
                        <div class="col-3 col-video-mb add-video-translateX product_video-X">
                            <div class="product_video">
                                <a href="${getVideo.linkVideo}" class="product_video-link">
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


       