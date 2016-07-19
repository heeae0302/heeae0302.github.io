// product.js

function productJS(){
   
   var map_li = $('#mapLine>ul>li'),
       arti = $('section>article');
   
   map_li.on('click', function(){
      var $this = $(this),
          li_index = $('#mapLine>ul>li').index(this);
      $this.addClass('select_map').siblings().removeClass('select_map');
      arti.eq(li_index).addClass('arti_size').siblings().removeClass('arti_size');
   });
   
   var pro_btn = $('.product_menu>li>button');
   
   pro_btn.on('click', function(){
      var $this = $(this),
          this_parent = $this.parent(),
          btn_index = $('.product_menu>li').index(this_parent),
          view_li = $('.product_script>li');
      this_parent.addClass('btn_click').siblings().removeClass('btn_click');
      view_li.eq(btn_index).addClass('view_script').siblings().removeClass('view_script');
   });

   
};