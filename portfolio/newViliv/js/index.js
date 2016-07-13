// index.js

function index_js (){
   
   
   var map_btn = $('#mapLine>ul>li');
   
   map_btn.on('click', function(e){
      e.preventDefault();
      
      var $this = $(this),
          this_index = map_btn.index(this),
          article = $('article');
      
      $this.addClass('select_map').siblings().removeClass('select_map');//btnDesign
      
      article.fadeOut(300, function(){
         $(this).children('div').removeClass('margin_set', 1000);
      });
      article.eq(this_index).fadeIn(300, function(){
         $(this).children('div').addClass('margin_set', 1000);
      });
      
   });//map_btn클릭
   
};