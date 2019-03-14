

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}



// readMore
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/shisp',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(title, image) {
        var itemHtml = '<a href="#"><h2>' + title + '</h2> </a>' + '<a href="#"><img class="readMore-image col-lg-8 col-md-8 col-sm-12 col-xs-12" src="'
            + image + '" alt=""/></a>'
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].title, list[i].image);
        }

        $('#readMore-left').html(html);
    }

});

// infor
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/u9fq1',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(detailCode, category, itemClass, infor) {
        var itemHtml = "<a href='./slider1.html?detailCode=" + detailCode + "&category=" + category + "'>" + ' <li class="' + itemClass + '"><i class="fa fa-hand-o-right" aria-hidden="true"></i>' + infor + '</a></li> '
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].detailCode, list[i].category, (i == 2) ? 'last' : '', list[i].infor);
        }

        $('#infor').html(html);
    }

});

//van hoa truyen thong
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/1gk4bt',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(detailCode, category, image, title, detail) {
        var itemHtml = "<a href='./slider1.html?detailCode=" + detailCode + "&category=" + category + "'>" + '  <h1>VĂN HOÁ TRUYỀN THỐNG</h1>'
            + ' <img class="sidebar-image col-lg-12 col-md-12 col-sm-12 col-xs-12 " src="' + image + '" alt="">' + '  <a href="#"> <h3>'
            + title + '</h3> </a> <p>' + detail + '</p>'
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].detailCode, list[i].category, list[i].image, list[i].title, list[i].detail);
        }

        $('#vanhoatruyenthong').html(html);
    }

});

//vedepchanthiennhan
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/9vc95',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(detailCode, category, image, title, detail) {
        var itemHtml = "<a href='./slider1.html?detailCode=" + detailCode + "&category=" + category + "'>" + '  <h1>VẺ ĐẸP CHÂN THIỆN NHẪN</h1>'
            + ' <img class="sidebar-image col-lg-12 col-md-12 col-sm-12 col-xs-12 " src="' + image + '" alt="">' + '  <a href="#"> <h3>'
            + title + '</h3> </a> <p>' + detail + '</p>'
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].detailCode, list[i].category, list[i].image, list[i].title, list[i].detail);
        }

        $('#chanthiennhan').html(html);
    }

});

// song dep

$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/flj3d',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(image, title, detail) {
        var itemHtml = '  <h1>SỐNG ĐẸP</h1>'
            + '<img class="sidebar-image col-lg-12 col-md-12 col-sm-12 col-xs-12 " src="' + image + '" alt="">   <a href="#"> <h3>' + title +
            '</h3>  </a>' + '<p>' + detail + '</p>'
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].image, list[i].title, list[i].detail);
        }

        $('#songdep').html(html);
    }

});

// goc nhin
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/1cp8bt',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(image, title, detail) {
        var itemHtml = '  <h1>SỐNG ĐẸP</h1>'
            + '<img class="sidebar-image col-lg-12 col-md-12 col-sm-12 col-xs-12 " src="' + image + '" alt="">   <a href="#"> <h3>' + title +
            '</h3>  </a>' + '<p>' + detail + '</p>'
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].image, list[i].title, list[i].detail);
        }

        $('#gocnhin').html(html);
    }

});

//khoa hoc huyen bi
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/dmssp',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(image, title, detail) {
        var itemHtml = '<img class="sidebar-image col-lg-12 col-md-12 col-sm-12 col-xs-12 " src="' + image + '" alt="">   <a href="#"> <h3>' + title +
            '</h3>  </a>' + '<p>' + detail + '</p>'
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].image, list[i].title, list[i].detail);
        }

        $('#khoahochuyenbi').html(html);
    }

});


//chuyen la
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/ci2qx',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(image, title, detail) {
        var itemHtml = '<h1>CHUYỆN LẠ</h1><img class="sidebar-image col-lg-12 col-md-12 col-sm-12 col-xs-12 " src="' + image + '" alt="">   <a href="#"> <h3>' + title +
            '</h3>  </a>' + '<p>' + detail + '</p>'
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].image, list[i].title, list[i].detail);
        }

        $('#chuyenla').html(html);
    }

});



// leftslider
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/1a7ohh',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(image, title) {
        var itemHtml = '<a href="#"><img class="leftSlider-image img-responsive" src="' + image + '" alt=""></a>'
            + '<a href="#" class="leftSlider-title">' + title + '</a>';
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].image, list[i].title);
        }

        $('#leftSlider').html(html);
    }


});

// rightslider

$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/w1kad',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(image, title) {
        var itemHtml = ' <div class="rightSliderItem">' + '<a href="#"><img class="rightSlider-image img-responsive" src="' + image + '" alt=""></a>'
            + '<a href="#" class="rightSlider-title">' + title + '</a></div>';
        return itemHtml;

    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].image, list[i].title);
        }

        $('#rightSlider').html(html);
    }

});




//manyviews
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/11aa9p',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(itemClass, image, title, author) {
        var itemHtml = '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 readMore-Item' + itemClass + '"><img class="readMore-Item-Image" src="' + image + '" alt="" />' + '<a href="#" class="readMore-Item-Title">'
            + title + '</a> <p class="readMore-Item-Author">' + '<i class="fa fa-clock-o" aria-hidden="true"></i>' + author + '</p></div>';

        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml((i == 2) || (i == 5) ? '-last' : '', list[i].image, list[i].title, list[i].author);
        }

        $('#manyviews').html(html);
    }


});


// vanhoaleft
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/1ap5cd',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(image, h3, author, title) {
        var itemHtml = '<img class="smallMenu-image col-lg-12 col-md-12 col-sm-12 col-xs-12" src="' + image + '" alt="">' + '<a href="#"><h3>'
            + h3 + '</h3></a>' + '<div class="smallMenu-author">' + '<i class="fa fa-clock-o" aria-hidden="true"></i>' + author + ' </div>' + '<div class="smallMenu-title"><p>' + title + '</p></div>';
        return itemHtml;

    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].image, list[i].h3, list[i].author, list[i].title);
        }

        $('#left-vh-item').html(html);
    }


});


//vanhoa_right

$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/10tvzp',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(itemClass, image, title, author) {
        var itemHtml = '  <div class="smallMenu-item' + itemClass + ' col-lg-12 col-md-12 col-sm-12 col-xs-12">' + ' <img class="smallMenu-item-image col-lg-4 col-md-4 col-sm-6 col-xs-12" src="'
            + image + '" alt="">' + '<div class="smallMenu-item-infor col-lg-8 col-md-8 col-sm-6 col-xs-12">'
            + ' <a href="#" class="smallMenu-item-title">' + title + '</a><div class="smallMenu-item-author">' + '<i class="fa fa-clock-o" aria-hidden="true"></i>' + author + ' </div></div></div>';
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml((i == 3) ? '-last' : '', list[i].image, list[i].title, list[i].author);
        }

        $('#right-vh-item').html(html);
    }


});

// bai moi nhat
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/17rdh1',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(itemClass, data) {
        var itemHtml = '<li class="item ' + itemClass + '">' + '<i class="fa fa-hand-o-right" aria-hidden="true"></i><a href=""target="_blank" style="text-decoration: none;" title="">' + data + '</a></li>';
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml((i == 12) ? 'last' : '', list[i].data);
        }

        $('#hotNews.hotNews').html(html);
    }


});

// cac bai khac
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/16mnf9',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(itemClass, data) {
        var itemHtml = '<li class="item ' + itemClass + '">' + '<i class="fa fa-hand-o-right" aria-hidden="true"></i><a href=""target="_blank" style="text-decoration: none;" title="">' + data + '</a></li>';
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml((i == 7) ? 'last' : '', list[i].data);
        }

        $('#others').html(html);
    }


});


//doi song left

$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/y3ibp',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(image, h3, author, title) {
        var itemHtml = '<img class="smallMenu-image col-lg-12 col-md-12 col-sm-12 col-xs-12" src="' + image + '" alt="">' + '<a href="#"><h3>'
            + h3 + '</h3></a>' + '<div class="smallMenu-author">' + '<i class="fa fa-clock-o" aria-hidden="true"></i>' + author + ' </div>' + '<div class="smallMenu-title"><p>' + title + '</p></div>';
        return itemHtml;

    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].image, list[i].h3, list[i].author, list[i].title);
        }

        $('#left-ds-item').html(html);
    }


});


// doisong right

$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/10tvzp',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(itemClass, image, title, author) {
        var itemHtml = '<div class="smallMenu-item' + itemClass + ' col-lg-12 col-md-12 col-sm-12 col-xs-12">' + ' <img class="smallMenu-item-image col-lg-4 col-md-4 col-sm-6 col-xs-12" src="'
            + image + '" alt="">' + '<div class="smallMenu-item-infor col-lg-8 col-md-8 col-sm-6 col-xs-12">'
            + ' <a href="#" class="smallMenu-item-title">' + title + '</a><div class="smallMenu-item-author">' + '<i class="fa fa-clock-o" aria-hidden="true"></i>' + author + ' </div></div></div>';
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml((i == 3) ? '-last' : '', list[i].image, list[i].title, list[i].author);
        }

        $('#right-ds-item').html(html);
    }


});





//trongnuoc left

$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/1cy6s5',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(image, h3, author, title) {
        var itemHtml = '<img class="smallMenu-image col-lg-12 col-md-12 col-sm-12 col-xs-12" src="' + image + '" alt="">' + '<a href="#"><h3>'
            + h3 + '</h3></a>' + '<div class="smallMenu-author">' + '<i class="fa fa-clock-o" aria-hidden="true"></i>' + author + ' </div>' + '<div class="smallMenu-title"><p>' + title + '</p></div>';
        return itemHtml;

    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].image, list[i].h3, list[i].author, list[i].title);
        }

        $('#left-tn-item').html(html);
    }


});


// trongnuoc right

$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/wa1ud',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(itemClass, image, title, author) {
        var itemHtml = '<div class="smallMenu-item' + itemClass + ' col-lg-12 col-md-12 col-sm-12 col-xs-12">' + ' <img class="smallMenu-item-image col-lg-4 col-md-4 col-sm-6 col-xs-12" src="'
            + image + '" alt="">' + '<div class="smallMenu-item-infor col-lg-8 col-md-8 col-sm-6 col-xs-12">'
            + ' <a href="#" class="smallMenu-item-title">' + title + '</a><div class="smallMenu-item-author">' + '<i class="fa fa-clock-o" aria-hidden="true"></i>' + author + ' </div></div></div>';
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml((i == 3) ? '-last' : '', list[i].image, list[i].title, list[i].author);
        }

        $('#right-tn-item').html(html);
    }


});

//thegioi left

$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/1ap5cd',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(image, h3, author, title) {
        var itemHtml = '<img class="smallMenu-image col-lg-12 col-md-12 col-sm-12 col-xs-12" src="' + image + '" alt="">' + '<a href="#"><h3>'
            + h3 + '</h3></a>' + '<div class="smallMenu-author">' + '<i class="fa fa-clock-o" aria-hidden="true"></i>' + author + ' </div>' + '<div class="smallMenu-title"><p>' + title + '</p></div>';
        return itemHtml;

    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].image, list[i].h3, list[i].author, list[i].title);
        }

        $('#left-tg-item').html(html);
    }


});


// thegioi right

$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/tfkst',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(itemClass, image, title, author) {
        var itemHtml = '<div class="smallMenu-item' + itemClass + ' col-lg-12 col-md-12 col-sm-12 col-xs-12">' + ' <img class="smallMenu-item-image col-lg-4 col-md-4 col-sm-6 col-xs-12" src="'
            + image + '" alt="">' + '<div class="smallMenu-item-infor col-lg-8 col-md-8 col-sm-6 col-xs-12">'
            + ' <a href="#" class="smallMenu-item-title">' + title + '</a><div class="smallMenu-item-author">' + '<i class="fa fa-clock-o" aria-hidden="true"></i>' + author + ' </div></div></div>';
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml((i == 3) ? '-last' : '', list[i].image, list[i].title, list[i].author);
        }

        $('#right-tg-item').html(html);
    }


});

//nghethuat left

$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/hgrjh',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(image, h3, author, title) {
        var itemHtml = '<img class="smallMenu-image col-lg-12 col-md-12 col-sm-12 col-xs-12" src="' + image + '" alt="">' + '<a href="#"><h3>'
            + h3 + '</h3></a>' + '<div class="smallMenu-author">' + '<i class="fa fa-clock-o" aria-hidden="true"></i>' + author + ' </div>' + '<div class="smallMenu-title"><p>' + title + '</p></div>';
        return itemHtml;

    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].image, list[i].h3, list[i].author, list[i].title);
        }

        $('#left-nt-item').html(html);
    }


});

// nghethuat right

$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/17nu5p',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(itemClass, image, title, author) {
        var itemHtml = '<div class="smallMenu-item' + itemClass + ' col-lg-12 col-md-12 col-sm-12 col-xs-12">' + ' <img class="smallMenu-item-image col-lg-4 col-md-4 col-sm-6 col-xs-12" src="'
            + image + '" alt="">' + '<div class="smallMenu-item-infor col-lg-8 col-md-8 col-sm-6 col-xs-12">'
            + ' <a href="#" class="smallMenu-item-title">' + title + '</a><div class="smallMenu-item-author">' + '<i class="fa fa-clock-o" aria-hidden="true"></i>' + author + ' </div></div></div>';
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml((i == 3) ? '-last' : '', list[i].image, list[i].title, list[i].author);
        }

        $('#right-nt-item').html(html);
    }

});

//khoahoc-congnghe
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/drblt',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(image, h3, author, title) {
        var itemHtml = '<img class="smallMenu-image col-lg-12 col-md-12 col-sm-12 col-xs-12" src="' + image + '" alt="">' + '<a href="#"><h3>'
            + h3 + '</h3></a>' + '<div class="smallMenu-author">' + '<i class="fa fa-clock-o" aria-hidden="true"></i>' + author + ' </div>' + '<div class="smallMenu-title"><p>' + title + '</p></div>';
        return itemHtml;

    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].image, list[i].h3, list[i].author, list[i].title);
        }

        $('#khcn-left').html(html);
    }


});

$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/na9a9',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(itemClass, image, title, author) {
        var itemHtml = '<div class="smallMenu-item' + itemClass + ' col-lg-12 col-md-12 col-sm-12 col-xs-12">' + ' <img class="smallMenu-item-image col-lg-4 col-md-4 col-sm-6 col-xs-12" src="'
            + image + '" alt="">' + '<div class="smallMenu-item-infor col-lg-8 col-md-8 col-sm-6 col-xs-12">'
            + ' <a href="#" class="smallMenu-item-title">' + title + '</a><div class="smallMenu-item-author">' + '<i class="fa fa-clock-o" aria-hidden="true"></i>' + author + ' </div></div></div>';
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml((i == 3) ? '-last' : '', list[i].image, list[i].title, list[i].author);
        }

        $('#khcn-right').html(html);
    }


});

//giai tri
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/qx02p',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(image, h3, author, title) {
        var itemHtml = '<img class="smallMenu-image col-lg-12 col-md-12 col-sm-12 col-xs-12" src="' + image + '" alt="">' + '<a href="#"><h3>'
            + h3 + '</h3></a>' + '<div class="smallMenu-author">' + '<i class="fa fa-clock-o" aria-hidden="true"></i>' + author + ' </div>' + '<div class="smallMenu-title"><p>' + title + '</p></div>';
        return itemHtml;

    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].image, list[i].h3, list[i].author, list[i].title);
        }

        $('#giaitri-left').html(html);
    }


});

$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/7bu9t',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(itemClass, image, title, author) {
        var itemHtml = '<div class="smallMenu-item' + itemClass + ' col-lg-12 col-md-12 col-sm-12 col-xs-12">' + ' <img class="smallMenu-item-image col-lg-4 col-md-4 col-sm-6 col-xs-12" src="'
            + image + '" alt="">' + '<div class="smallMenu-item-infor col-lg-8 col-md-8 col-sm-6 col-xs-12">'
            + ' <a href="#" class="smallMenu-item-title">' + title + '</a><div class="smallMenu-item-author">' + '<i class="fa fa-clock-o" aria-hidden="true"></i>' + author + ' </div></div></div>';
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml((i == 3) ? '-last' : '', list[i].image, list[i].title, list[i].author);
        }

        $('#giaitri-right').html(html);
    }


});


















