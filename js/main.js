
var check = false;

function changeVal(el) {
  var qt = parseFloat(el.parent().children(".qt").html());
  var price = parseFloat(el.parent().children(".price").html());
  var eq = Math.round(price * qt * 100) / 100;
  
  el.parent().children(".full-price").html( "$" + eq   );
  
  changeTotal();			
}

function changeTotal() {
  
  var price = 0;
  
  $(".full-price").each(function(index){
    price += parseFloat($(".full-price").eq(index).html());
  });
  
  price = Math.round(price * 100) / 100;
  var tax = Math.round(price * 0.05 * 100) / 100
  var shipping = parseFloat($(".shipping span").html());
  var fullPrice = Math.round((price + tax + shipping) *100) / 100;
  
  if(price == 0) {
    fullPrice = 0;
  }
  
  $(".subtotal span").html(price);
  $(".tax span").html(tax);
  $(".total span").html(fullPrice);
}

$(document).ready(function(){
  
  $(".remove").click(function(){
    var el = $(this);
    el.parent().parent().addClass("removed");
    window.setTimeout(
      function(){
        el.parent().parent().slideUp('fast', function() { 
          el.parent().parent().remove(); 
          if($(".product").length == 0) {
            if(check) {
              $("#cart").html("<h1>The shop does not function, yet!</h1><p>If you liked my shopping cart, please take a second and heart this Pen on <a href='https://codepen.io/ziga-miklic/pen/xhpob'>CodePen</a>. Thank you!</p>");
            } else {
              $("#cart").html("<h1>No products!</h1>");
            }
          }
          changeTotal(); 
        });
      }, 200);
  });
  
  $(".qt-plus").click(function(){
    $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
    
    $(this).parent().children(".full-price").addClass("added");
    
    var el = $(this);
    window.setTimeout(function(){el.parent().children(".full-price").removeClass("added"); changeVal(el);}, 150);
  });
  
  $(".qt-minus").click(function(){
    
    child = $(this).parent().children(".qt");
    
    if(parseInt(child.html()) > 1) {
      child.html(parseInt(child.html()) - 1);
    }
    
    $(this).parent().children(".full-price").addClass("minused");
    
    var el = $(this);
    window.setTimeout(function(){el.parent().children(".full-price").removeClass("minused"); changeVal(el);}, 150);
  });
  
  window.setTimeout(function(){$(".is-open").removeClass("is-open")}, 1200);
  
  $(".btn").click(function(){
    check = true;
    $(".remove").click();
  });
});




// Вызов модального окна
$('.button').click( function() {
	$('.overlay').fadeIn();
});

// Закрытие окна на крестик
$('.close-popup').click( function() {
	$('.overlay').fadeOut();
});

// Закрытие окна на поле
$(document).mouseup( function (e) { 
	var popup = $('.popup');
	if (e.target != popup[0] && popup.has(e.target).length === 0){
		$('.overlay').fadeOut();
	}
});




$(function () {
  'use strict';
  $(window).scroll(function (){
    var nav = $('.navbar');
    if ($(window).scrollTop() >= nav.height()){
      nav.addClass('scrolled');
    } else {
      nav.removeClass('scrolled');
    }
  });
// Shor if :  $(window).scrollTop() >= nav.height() ? nav.addClass('scrolled'); : nav.removeClass('scrolled');

// Deal With Tabs
$('.tabs-switch li').click(function () {
  // Add Class selected To Active Link
  $(this).addClass('selected').siblings().removeClass('selected');
  // Hide All Divs
  $('.tabs-section .tabs-content > div').hide();
  // Show Div Connected With This Link
  $('.' + $(this).data('class')).show(); // as you say => class.show() exp: ('.tab-one').show()
});
});








