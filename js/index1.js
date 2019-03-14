// back to top
// function toTopPage(offset) {
//     $('body').animate({ scrollTop: offset }, 1000);
// }
// back to top
window.onscroll = function() {scrollFunction()};

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
        var itemHtml = '<li class="item ' + itemClass + '">' + '<a href=""target="_blank" style="text-decoration: none;" title="">'  + data + '</a></li>';
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml((i==12) ? 'last' : '', list[i].data);
        }
        
        $('#hotNews.hotNews').html(html);
    }

   
});

// readmorelist
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/bk1d1',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(image, title, author) {
        var itemHtml = '<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 readMore-Item">'+'<img class="readMore-Item-Image" src="'+ image+ '" alt="" />'
        + '<a href="#" class="readMore-Item-Title">'+ title +'</a><p class="readMore-Item-Author">'+ author +'</p></div>';
        return itemHtml;
                    
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].image, list[i].title, list[i].author);
        }
        
        $('#readmorelist').html(html);
    }

   
});


// listsmallitem
$(document).ready(function () {
    var list = [];
    getPostsFromServer();

    function getPostsFromServer() {
        $.ajax({
            url: 'https://api.myjson.com/bins/zo3d1',
            method: "GET",
            data: { a: "B" },
            success: onSuccess,
            error: function (error) {
                console.log(error);
            }
        });
    }

    function getItemHtml(image, title, author) {
        var itemHtml = '<div class="smallMenu-item col-lg-12 col-md-12 col-sm-12 col-xs-12">'+' <img class="smallMenu-item-image col-lg-4 col-md-4 col-sm-12 col-xs-12" src="'
        + image+ '"alt="">'+' <div class="smallMenu-item-infor col-lg-8 col-md-8 col-sm-12 col-xs-12"><a href="#">'
        +'<h3>'+title+'</h3></a>'+' <div class="smallMenu-item-author">'+ author+ '  </div></div></div>';
      
        return itemHtml;
    }

    function onSuccess(posts, a, b) {
        var list = posts;
        var html = '';
        for (var i = 0; i < list.length; i++) {
            html += getItemHtml(list[i].image, list[i].title, list[i].author);
        }
        
        $('#listsmallitem').html(html);
    }

   
});


