var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

function showMenu1() {
    var zommitMenu = document.getElementById("zommitMenu");
    var technology = document.getElementById("technology");
    var check = document.getElementById("check");
    var video = document.getElementById("video");
    var scientific = document.getElementById("scientific");
    var zoomPlus = document.getElementById("zoomPlus");
    if (zommitMenu.className === "zommitMenu") {
        zommitMenu.className += " show-1";
        technology.className = "technology";
        check.className = "check";
        video.className = "video";
        scientific.className = "scientific";
        zoomPlus.className = "zoomPlus";
    }
    else {
        zommitMenu.className = "zommitMenu";
    }

    var color= document.querySelector("#color-btn1");
    var txt = document.querySelector("#color-txt1");
    var icon = document.querySelector("#color-i1");
    if(color.className === "color1" && txt.className ==="color1") {
        color.className = "color2";
        txt.className = "color2";
        icon.classList += " color2";
    }
    else {
        color.className = "color1";
        txt.className = "color1";
        icon.className = "fa-solid Zoom";
    }
}

function showMenu2() {
    var technology = document.getElementById("technology");
    var zommitMenu = document.getElementById("zommitMenu");
    var check = document.getElementById("check");
    var video = document.getElementById("video");
    var scientific = document.getElementById("scientific");
    var zoomPlus = document.getElementById("zoomPlus");
    if (technology.className === "technology") {
        technology.className += " show-2";
        zommitMenu.className = "zommitMenu";
        check.className = "check";
        video.className = "video";
        scientific.className = "scientific";
        zoomPlus.className = "zoomPlus";
    }
    else {
        technology.className = "technology";
    }

    var color= document.querySelector("#color-btn2");
    var txt = document.querySelector("#color-txt2");
    var icon = document.querySelector("#color-i2");
    if(color.className === "color1" && txt.className ==="color1") {
        color.className = "color2";
        txt.className = "color2";
        icon.classList += " color2";
    }
    else {
        color.className = "color1";
        txt.className = "color1";
        icon.className = "fa-solid Zoom";
    }
}

function showMenu3() {
    var check = document.getElementById("check");
    var zommitMenu = document.getElementById("zommitMenu");
    var technology = document.getElementById("technology");
    var video = document.getElementById("video");
    var scientific = document.getElementById("scientific");
    var zoomPlus = document.getElementById("zoomPlus");
    if (check.className === "check") {
        check.className += " show-3";
        zommitMenu.className = "zommitMenu";
        technology.className = "technology";
        video.className = "video";
        scientific.className = "scientific";
        zoomPlus.className = "zoomPlus";
    }
    else {
        check.className = "check";
    }

    var color= document.querySelector("#color-btn3");
    var txt = document.querySelector("#color-txt3");
    var icon = document.querySelector("#color-i3");
    if(color.className === "color1" && txt.className ==="color1") {
        color.className = "color2";
        txt.className = "color2";
        icon.classList += " color2";
    }
    else {
        color.className = "color1";
        txt.className = "color1";
        icon.className = "fa-solid Zoom";
    }
}

function showMenu4() {
    var video = document.getElementById("video");
    var zommitMenu = document.getElementById("zommitMenu");
    var technology = document.getElementById("technology");
    var check = document.getElementById("check");
    var scientific = document.getElementById("scientific");
    var zoomPlus = document.getElementById("zoomPlus");
    if (video.className === "video") {
        video.className += " show-4";
        zommitMenu.className = "zommitMenu";
        technology.className = "technology";
        check.className = "check";
        scientific.className = "scientific";
        zoomPlus.className = "zoomPlus";
    }
    else {
        video.className = "video";
    }

    var color= document.querySelector("#color-btn4");
    var txt = document.querySelector("#color-txt4");
    var icon = document.querySelector("#color-i4");
    if(color.className === "color1" && txt.className ==="color1") {
        color.className = "color2";
        txt.className = "color2";
        icon.classList += " color2";
    }
    else {
        color.className = "color1";
        txt.className = "color1";
        icon.className = "fa-solid Zoom";
    }
}

function showMenu5() {
    var scientific = document.getElementById("scientific");
    var zommitMenu = document.getElementById("zommitMenu");
    var technology = document.getElementById("technology");
    var check = document.getElementById("check");
    var video = document.getElementById("video");
    var zoomPlus = document.getElementById("zoomPlus");
    if (scientific.className === "scientific") {
        scientific.className += " show-5";
        zommitMenu.className = "zommitMenu";
        technology.className = "technology";
        check.className = "check";
        video.className = "video";
        zoomPlus.className = "zoomPlus";
    }
    else {
        scientific.className = "scientific";
    }

    var color= document.querySelector("#color-btn5");
    var txt = document.querySelector("#color-txt5");
    var icon = document.querySelector("#color-i5");
    if(color.className === "color1" && txt.className ==="color1") {
        color.className = "color2";
        txt.className = "color2";
        icon.classList += " color2";
    }
    else {
        color.className = "color1";
        txt.className = "color1";
        icon.className = "fa-solid Zoom";
    }
}

function showMenu6() {
    var zoomPlus = document.getElementById("zoomPlus");
    var zommitMenu = document.getElementById("zommitMenu");
    var technology = document.getElementById("technology");
    var check = document.getElementById("check");
    var video = document.getElementById("video");
    var scientific = document.getElementById("scientific");
    if (zoomPlus.className === "zoomPlus") {
        zoomPlus.className += " show-6";
        zommitMenu.className = "zommitMenu";
        technology.className = "technology";
        check.className = "check";
        video.className = "video";
        scientific.className = "scientific";
    }
    else {
        zoomPlus.className = "zoomPlus";
    }

    var color= document.querySelector("#color-btn6");
    var txt = document.querySelector("#color-txt6");
    var icon = document.querySelector("#color-i6");
    if(color.className === "color1" && txt.className ==="color1") {
        color.className = "color2";
        txt.className = "color2";
        icon.classList += " color2";
    }
    else {
        color.className = "color1";
        txt.className = "color1";
        icon.className = "fa-solid Zoom";
    }
}

function showNavbar() {
    var navbar = document.getElementById("navbar");
    if(navbar.className === "navbar-header-2-lists") {
        navbar.className += " show-navbar";
    }
    else {
        navbar.className = "navbar-header-2-lists";
    }
}

function changeBtn(){
    var btn = document.getElementById("btn1");
    if(btn.className === "fas fa-bars") {
        btn.className = "fa-solid fa-xmark";
    }
    else {
        btn.className = "fas fa-bars";
    }
}

function showSearch(){
    var search = document.getElementById("search");
    var search1 = document.getElementById("search1");
    var box = document.getElementById("box");
    if(search.className === "fa-solid fa-magnifying-glass") {
        search.className = "fa-regular fa-circle-xmark";
    }
    else {
        search.className = "fa-solid fa-magnifying-glass";
    }

    if(search1.className === "fa-solid fa-magnifying-glass") {
        search1.className = "fa-regular fa-circle-xmark";
    }
    else {
        search1.className = "fa-solid fa-magnifying-glass";
    }
    
    if(box.className === "search-detail-h") {
        box.className = "search-detail-s";
    }
    else {
        box.className = "search-detail-h";
    }
}

function offMenu() {
    var zoomPlus = document.getElementById("zoomPlus");
    var zommitMenu = document.getElementById("zommitMenu");
    var technology = document.getElementById("technology");
    var check = document.getElementById("check");
    var video = document.getElementById("video");
    var scientific = document.getElementById("scientific");
    zoomPlus.className += "show-off";
    zommitMenu.className = "show-off";
    technology.className = "show-off";
    check.className = "show-off";
    video.className = "show-off";
    scientific.className = "show-off";
}

function showBtnUp(){
    var btnup = document.getElementById("btn-up");
    if (btnup.className === "show-off"){
        btnup.className = "btn-up";
    }
    else {
        btnup.className = "show-off";
    }
}