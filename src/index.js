/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';

import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js'; // 'bootstrap'اختصار
import '@fortawesome/fontawesome-free/js/all.min';
/*$(document).ready(function ()   نلاحظ ان التابع ردي مشطوب وليس لخطأ فيه  
$(function (){})بل يعمل بشكل جيد وله اختصار  مكافئ له وهو */
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    /*الشيفرة صحيحة  لكنها غير ظاهرة لكائن الصفحة العام فلا تاثير لها 
    لحل المشكلة  قمنا بتنزيل expose-loader */

    $(".add-to-cart-btn").click(function(){
        alert('اضيف المنتج الى عربة الشراء')
    });
    /* لتعديل سنه الحفظ حتى لايكون ثابت ويبدو قديما مع الزمن */
    $("#copyright").text('جميع الحقوق  محفوظه للمتجر سنة' + new Date().getFullYear());
});

