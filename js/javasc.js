
//  BaiTap6();


// function BaiTap1() {
//     var date = new Date();
//     var dayOfWeek = date.getDay();
//     var dayOfWeekText = '';
    
//     switch (dayOfWeek) {
//         case 0:
//             dayOfWeekText = 'Chu Nhat';
//             break;
//         case 1:
//             dayOfWeekText = 'Thu Hai';
//             break;
//         case 2:
//             dayOfWeekText = 'Thu Ba';
//             break;
//         case 3:
//             dayOfWeekText = 'Thu Tu';
//             break;
//         case 4:
//             dayOfWeekText = 'Thu Nam';
//             break;
//         case 5:
//             dayOfWeekText = 'Thu Sau';
//             break;
//         case 6:
//             dayOfWeekText = 'Thu Bay';
//             break;
//     }
    
//     function get12Hour(hour24) {
//         var kq = "";
//         if (hour24 >= 0 && hour24 < 12) {
//             kq = hour24 + " AM";
//         } else {
//             kq = (hour24 != 12 ? hour24 - 12 : 12) + " PM";
//         }
//         return kq;
//     }
    
//     console.log("Hom nay la: " 
//     + dayOfWeekText 
//     + ", gio hien tai la " 
//     + get12Hour(date.getHours()) 
//     + ":" + date.getMinutes() + ":" + date.getSeconds());
// }

// function BaiTap2() {
//     window.print();
// }

// function BaiTap3() {
//     var date = new Date();
//     var dd = date.getDate();
//     var mm = date.getMonth() + 1;
//     var yyyy = date.getFullYear();
//     if (dd < 10 ) dd = "0" + dd;
//     if (mm < 10) mm = "0" + mm;
//     console.log(mm + "/" + dd + "/" + yyyy);
// }

// function BaiTap4(canh1, canh2, canh3) {
//     var p = (canh1 + canh2 + canh3) / 2;
//     var x = p * (p - canh1) * (p - canh2) * (p - canh3);
//     var s = Math.sqrt(x);
//     console.log(s);
// }

// function BaiTap5() {
//     for(var i = 2014; i <= 2050; i++) {
//         var date = new Date(i, 0, 1);
//         if(date.getDay() == 0) {
//             console.log(date);
//         }
//     }
// }

// function BaiTap6() {
//     var randomNumber = Math.floor((Math.random() * 10) + 1);
//     console.log(randomNumber);
//     var result = prompt("Nhap so:");
//     if(randomNumber == result) {
//         alert("Doan Dung");
//     } else {
//         alert("Doan Sai");
//     }
// }

// var value = Math.sqrt(0.5);
// document.write("<br/> First test value: "+ value);

// var value = Math.sqrt(81);
// document.write("<br/> Second test value: "+ value);


// var value = Math.sqrt(13);
// document.write("<br/> Third test value: "+ value);


// var value = Math.sqrt(-4);
// document.write("<br/> Fourth test value: "+ value);

// $(document).ready(function(){
// alert("Hello");
// });


// cach1
var id = 10;
function Music(id, name, singer){
this.id = id;
this.name = name;
this.singer = singer;
this.toString = function(){//public method
    this.result = this.id + "."+ this.name + "-"+ this.singer;
}

function check(id){ //private method nen ko the goi ben ngoai, ko nen dung
    conslole.log(id);
    if(this.id % 2==0){
        console.log("this object has id property mod 2");
    }
    else{
        console.log("this object is normal");
    }
}
check(this.id);



};
var myMusic = new Music(id, "lang le", "abcdefg");
myMusic.toString();
console.log(myMusic.result);



// cach2
var anotherMusic = {
    id: 10,
    name: "Sorry",
    singer: "Maroon5",
    
};

var music2 ={
    number: 15,
    text: "nothing"
}

anotherMusic.date = new Date();
console.log(anotherMusic) ; //toi dong nay se co them thuoc tinh date

function check(id){
    if(this.id % 2==0){
        console.log("this object has id property mod 2");
    }
    else{
        console.log("this object is normal");
    }
}
anotherMusic.kiemtra = check;// o day ko de (id) vi ham check ko tra ve gia tri nen neu de (id) se tra ve undefined
anotherMusic.kiemtra(anotherMusic.id);
music2.like = check;
music2.like(music2.number);

music2.kiemtra = check;
music2.kiemtra(music2.number);

anotherMusic.alert() = function(){
window.alert(this.name);
console.log(this.id);
};
anotherMusic.alert("hello world");
 var music3 = {
     id: anotherMusic.id,
     name: anotherMusic.name
 }
anotherMusic.name= "Change name";

console.log(music3);




