function for_a_index(){
   
   var header = $('header'),
       arti_me = $('#me'),
       arti_work = $('#work'),
       footer = $('footer'),
       me_div = arti_me.children('div'),
       me_section = arti_me.children('section'),
       work_div = arti_work.children('div'),
       work_section = arti_work.children('section'),
       work_article = arti_work.children('article');
   
   me_div.on('click', function(){
      header.addClass('headerMax', 500).removeClass('headerMin', 500);
      arti_me.addClass('articleMax', 500).removeClass('articleMin', 500);
      arti_work.addClass('articleMin', 500).removeClass('articleMax', 500);
      footer.addClass('footerMin', 500).removeClass('footerMax', 500);
      me_div.hide();
      me_section.show();
      work_div.show();
      work_section.hide();
      work_article.hide();
   }); // me Click
   
   work_div.on('click', function(){
      header.addClass('headerMin', 500).removeClass('headerMax', 500);
      arti_me.addClass('articleMin', 500).removeClass('articleMax', 500);
      arti_work.addClass('articleMax', 500).removeClass('articleMin', 500);
      footer.addClass('footerMax', 500).removeClass('footerMin', 500);
      work_div.hide();
      work_section.show();
      me_div.show();
   }); // work Click
   
};// 메인 좌우 클릭시 해당 부분 크게 보이게 하기

function work_part(){
   var section = $('#work').children('section'),
       go_pf01 = $('.go_pf01'),
       go_pf02 = $('.go_pf02'),
       go_pf03 = $('.go_pf03');
   
   go_pf01.on('click', function(){
      var pf01 = $('#pf01');
      section.slideUp(500);
      pf01.show();
      var backBtn = pf01.children('div').children('button');
      backBtn.on('click', function(){
         section.slideDown(500, function(){
            pf01.hide();
         });
      });
   }); // 포트폴리오 1 보이기
   go_pf02.on('click', function(){
      var pf02 = $('#pf02');
      section.slideUp(500);
      pf02.show();
      var backBtn = pf02.children('div').children('button');
      backBtn.on('click', function(){
         section.slideDown(500, function(){
            pf02.hide();
         });
      });
   }); // 포트폴리오 2 보이기
   go_pf03.on('click', function(){
      var pf03 = $('#pf03');
      section.slideUp(500);
      pf03.show();
      var backBtn = pf03.children('div').children('button');
      backBtn.on('click', function(){
         section.slideDown(500, function(){
            pf03.hide();
         });
      });
   }); // 포트폴리오 3 보이기
   
}; // 포트폴리오 누르면 하단으로부터 해당 article 보이게 하기

function liClickliView(clickLi, viewLi){
   var click_li = clickLi;
   click_li.on('click', function(){
      var $this = $(this),
          this_index = clickLi.index(this),
          view_li = viewLi;
      $this.addClass('click_css').siblings().removeClass('click_css');
      view_li.slideUp(0);
      view_li.eq(this_index).addClass('working_size').slideDown(500);
   });
}; // 리스트 클릭하면 해당번째의 다른 리스트 보이기