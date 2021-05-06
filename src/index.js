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
    $("#copyright-year").text(new Date().getFullYear());
    

    $('.product-option input[type="radio"] ').change(function(){
        $(this).parents('.product-option').siblings().removeClass('active')
        /*عند حدث التغير يجلب الاب ذو الصنف الذي بداخل القوسين ثم يجلب جميع اخوته المباشرين */
        $(this).parents('.product-option').addClass('active');
    
    })

    //checkout page
    //عند حذف منتج من سلةالشراء
    $('[data-remove-form-cart]').on('click', function() {
        $(this).parents('[data-product-info]').remove();
         //حدث السعر الاجمالي لكل المنتجات بالصفحة
         calculateTotalPrice();

    });
    
    //عندما تتغير كمية المنتج في صفحة الشراء
    $('[data-product-quantity]').change(function(){
        //جلب كمية المنتج الجديدة بواسطة التابع val الذي يجلب قيمة العنصر المحدد
        var newQuantity = $(this).val();

        //trنبحث عن السطر الذي يحتوى معلومات هذا المنتج 
        var parent = $(this).parents('[data-product-info]');
        //من  معلومات  المنتج بالسطر نجلب سعرالقطعة الواحدة عبر التابع attr
        var pricePerUnit = parent.attr('data-product-price');
        //السعر الاجمالي للمنتج
        var totalPriceForProduct= newQuantity * pricePerUnit;
        //تعيين السعر الاجمالي ضمن خلية السعر الاجمالي بالسطر
        parent.find('.total-price-for-product').text( totalPriceForProduct + '$')
    
        //حدث السعر الاجمالي لكل المنتجات بالصفحة
        calculateTotalPrice();
    });

    function calculateTotalPrice() {
        //انشى  متغير جدي\ لحف السعر الاجمالي
        var totalPriceForAllProducts = 0;
        //لكل سطر يمثل معلومات المنتج قي الصفحة
        $("[data-product-info]").each(function(){
            
            //جلب سعر القطعة الواحدة من الخاصية الموافقة
            var pricePerUnit = $(this).attr('data-product-price');
           
            //جلب كمية  المنتج
            var quantity= $(this).find('[data-product-quantity]').val();
           
            var totalPriceForProduct= quantity * pricePerUnit;
            
            //اضافة السعر الاجمالي للمنتج الى السعر الاجمالي لكل  المنتجات واحفظ التغيرات 
            totalPriceForAllProducts = totalPriceForAllProducts + totalPriceForProduct;
        });
        //حدث السعر الاجمالي لكل المنتجات بالصفحة
        $('#total-price-for-all-products').text( totalPriceForAllProducts + '$');
    };
});

