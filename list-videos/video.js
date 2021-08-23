const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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




//Js cho videos
const navBarVideoCLick = $('.click-show-menu');
const navBarRemove = $('.click-hide-menu');
const sliderVideo = $('.slider_bar-video');
const overlayNavBar = $('.overlay-navbar');
const barChange = $('.btn-click');
const barChangeSpecial = $('.btn-click-special');

navBarRemove.onmouseup = () => {
    barChange.classList.add('btn-up');
    barChange.classList.remove('btn-down');
};

navBarVideoCLick.onmousedown = () => {
    barChange.classList.remove('btn-up');
    barChange.classList.add('btn-down');
    
};


navBarVideoCLick.addEventListener('click', () => {
    sliderVideo.classList.add('slider_bar-video-click');
    overlayNavBar.classList.add('overlay-navbar-change');
});

navBarRemove.addEventListener('click', () => {
    sliderVideo.classList.remove('slider_bar-video-click');
    overlayNavBar.classList.remove('overlay-navbar-change');
});

overlayNavBar.addEventListener('click', () => {
    sliderVideo.classList.remove('slider_bar-video-click');
    overlayNavBar.classList.remove('overlay-navbar-change');
    barChange.classList.remove('btn-down');
});





//Description video
const descInnerText = $('.video_channel-sub-desc');
const clickHtt = $('.video-click-htt');

clickHtt.addEventListener('click', () => {
    descInnerText.classList.toggle('video_channel-sub-desc-change');

    const textVideoChange = $('.video_channel-sub-desc-change');

    if(textVideoChange) {
        clickHtt.innerText = 'Ẩn bớt';
    }else {
        clickHtt.innerText = 'Hiển thị thêm';
    }
});


//input comment
const inputComment = $('.video-input');
const btnComment = $('.video_comment-user-btn');
const cancelComment = $('.video_comment-btn-cancel');
const cmtComment = $('.video_comment-btn-cmt');

inputComment.addEventListener('input', () => {
    btnComment.style.display = 'block';
    btnComment.classList.add('focus-active');
    cmtComment.classList.add('active');
});

cancelComment.addEventListener('click', () => {
    btnComment.style.display = 'none';
});



// List arrow down comment
const clickArrowComment = $('.video_comment-user-response-arrow-down');
const listShowSubComment = $('.video_comment-list-down-main');
const arrowDownSubComment = $('.bxf-down-arrow');
const listShowHide = $('.clickShowHide');
const listDownMb = $('.video_comment-list-down');
const listDownChange = listDownMb.closest('.video_comment-user-response');

clickArrowComment.addEventListener('click', () => {
    listShowSubComment.classList.toggle('list-comment-show');
    arrowDownSubComment.classList.toggle('bxf-down-arrow-change');
    
    const checkArrowList = $('.bxf-down-arrow-change');
    if(checkArrowList) {
        listShowHide.innerText = 'Ẩn 4 phản hồi';
    }else {
        listShowHide.innerText = 'Xem 4 câu trả lời';
    }

    // fix list down margin-bottom
    if(checkArrowList) {
        listDownChange.style.marginBottom = '420px';
    }else {
        listDownChange.style.marginBottom = '0';
    }
});


// video like active
const likeBtn = $('.like-click-change');
const amountLike = $('.amount_like-click-change')
const lineBtn = $('.line-click-change');
const likeUpDown = $('.like-up-down');
const dislikeUpDown = $('.dislike-up-down');
const dislikeBtn = $('.dislike-click-change');
const amountDislike = $('.amount-dislike-click-change');
const dislikeMain = $('.dislike-click-main');



likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('like-active');
    amountLike.classList.toggle('like-active');
    lineBtn.classList.toggle('like-active');
    dislikeBtn.classList.remove('dislike-active');
    amountDislike.classList.remove('dislike-active'); 

    const likeAdd = $('.like-active');
    if(likeAdd) {
        amountLike.innerText = '543';
    }else {
        amountLike.innerText = '542';
    }

    if(likeAdd) {
        amountDislike.innerText = '0';
    }else {
        amountDislike.innerText = '1';
    }
});

amountLike.addEventListener('click', () => {
    likeBtn.classList.toggle('like-active');
    amountLike.classList.toggle('like-active');
    lineBtn.classList.toggle('like-active');
    dislikeBtn.classList.remove('dislike-active');
    amountDislike.classList.remove('dislike-active');

    const likeAdd = $('.like-active');
    if(likeAdd) {
        amountLike.innerText = '543';
    }else {
        amountLike.innerText = '542';
    }

    if(likeAdd) {
        amountDislike.innerText = '0';
    }else {
        amountDislike.innerText = '1';
    }
});


likeBtn.addEventListener('mousedown', () => {
    likeUpDown.classList.toggle('btn-up-social-like');
});



dislikeMain.addEventListener('click', () => {
    dislikeBtn.classList.toggle('dislike-active');
    amountDislike.classList.toggle('dislike-active');
    likeBtn.classList.remove('like-active');
    amountLike.classList.remove('like-active');
    lineBtn.classList.remove('like-active');

    const dislikeAdd = $('.dislike-active');
    if(dislikeAdd) {
        amountDislike.innerText = '1';
    }else {
        amountDislike.innerText = '0';
    }

    if(dislikeAdd) {
        amountLike.innerText = '542';
    }else {
        amountLike.innerText = '543';
    }
});

amountDislike.addEventListener('click', () => {
    dislikeMain.classList.toggle('dislike-active');
    amountDislike.classList.toggle('dislike-active');
    likeBtn.classList.remove('like-active');
    amountLike.classList.remove('like-active');
    lineBtn.classList.remove('like-active');

});


dislikeMain.addEventListener('mousedown', () => {
    dislikeUpDown.classList.toggle('btn-up-social-dislike');
});



// video share active