// back to top
function toTopPage(offset) {
    $('body').animate({ scrollTop: offset }, 1000);
}

$(document).ready(function(){
    var postsUrl = "";
    var categoryList = [
        {
            category: "infor",
            url: "https://api.myjson.com/bins/pea61"
        }
    ]
    var detailCodeParam = getParameterByName("detailCode");
    var categoryParam = getParameterByName("category");
    
    for(var i = 0; i < categoryList.length; i++) {
        if(categoryList[i].category == categoryParam) {
            postsUrl = categoryList[i].url;
        }
    }
    
    $.ajax({
        url: postsUrl,
        method:"GET",
        success:function(posts) {
            for(var i = 0; i < posts.length; i++) {
                if(posts[i].detailCode == detailCodeParam) {
                    $("#infor").append(html);
                    break;
                }
            }            
        },
        error:function(error){
            console.log(error);
        }
    })
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



// mainContent
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/lq581',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(title, time, image1, detail1, image2, detail2, author) {
        var itemHtml = '<div class="title">' + title + ' </div><div class="time"><i class="fa fa-clock-o" aria-hidden="true"></i>' + time + '</div>'
            + ' <img class="mainContent-image" src="' + image1 + '" alt=""><div class="detail">' + detail1 + ' </div>' + ' <img class="mainContent-image" src="' + image2 + '" alt=""><div class="detail">' + detail2 + ' <div class="author"><i>'
            + author + '</i></div></div>'

        return itemHtml;

    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].title, list[i].time, list[i].image1, list[i].detail1, list[i].image2, list[i].detail2, list[i].author);
        }

        $('#mainContent').html(html);
    }


});

// xem them
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/12tirt',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(infor1, infor2, infor3) {
        var itemHtml = ' <li><a href="#">' + infor1 + '</a></li> <li><a href="#">' + infor2 + '</a></li> <li><a href="#">' + infor3 + '</a></li>'

        return itemHtml;

    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].infor1, list[i].infor2, list[i].infor3);
        }

        $('#readMore').html(html);
    }


});


// related-article
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/11qynl',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(image, title, time) {
        var itemHtml = ' <div class="related-item col-lg-4 col-md-4 col-sm-6 col-xs-12"><img class="related-image" src="'
            + image + '" alt="">' + '<a class="related-title" href="">' + title + '</a><div class="related-time"><i class="fa fa-clock-o" aria-hidden="true"></i>'
            + time + ' </div></div> '
        return itemHtml;

    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].image, list[i].title, list[i].time);
        }

        $('#related-article').html(html);
    }


});

// hotNews

$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/oakdt',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(itemClass, data) {
        var itemHtml = '<li class="' + itemClass + '">' + '<i class="fa fa-hand-o-right" aria-hidden="true"></i><a href="#">' + data + '</a></li>'
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml((i == 10) ? 'last' : '', list[i].data);
        }

        $('#hotNews').html(html);
    }


});

// manyViews
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/v0z8h',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(itemClass, image, title, author) {
        var itemHtml = ' <div class="manyViews-item' + itemClass + ' col-lg-12 col-md-12 col-sm-12 col-xs-12">' +
            ' <img class="manyViews-item-image col-lg-4 col-md-4 col-sm-6 col-xs-12" src="' + image + '" alt="">' +
            ' <div class="manyViews-item-infor col-lg-8 col-md-8 col-sm-6 col-xs-12">' + ' <a href="#" class="manyViews-item-title">'
            + title + '</a> <div class="manyViews-item-author">' + author + '</div> </div></div>'
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml((i == 4) ? '-last' : '', list[i].image, list[i].title, list[i].author);
        }

        $('#manyViews').html(html);
    }


});

// vanhoa
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/1amja9',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(image, title, detail) {
        var itemHtml = ' <img class="sidebar-image" src="'+ image+'" alt="">'+' <div class="sidebar-title"><a href="#">'
        +title+'</a></div>'+'  <div class="sidebar-detail">'+detail+'</div>'

        return itemHtml;

    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].image, list[i].title, list[i].detail);
        }

        $('#vanHoa').html(html);
    }


});

// cauchuyen
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/1cgz9d',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(image, title, detail) {
        var itemHtml = ' <img class="sidebar-image" src="'+ image+'" alt="">'+' <div class="sidebar-title"><a href="#">'
        +title+'</a></div>'+'  <div class="sidebar-detail">'+detail+'</div>'

        return itemHtml;

    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].image, list[i].title, list[i].detail);
        }

        $('#cauChuyen').html(html);
    }


});







