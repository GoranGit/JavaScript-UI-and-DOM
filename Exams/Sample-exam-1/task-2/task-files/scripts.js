$.fn.tabs = function () {
this.addClass('tabs-container');


    var $tabItemContents = this.find('.tab-item-content').css('display','none');
    var $currentContent = $($tabItemContents.first().css('display','block'));

    var $currentTabItem = $currentContent.parent();
        $currentTabItem.addClass('current');


  this.on('click','.tab-item',function(){
      $this = $(this);
      $currentTabItem.removeClass('current');
      $currentTabItem = $this;
      $currentTabItem.addClass('current');

      $currentContent.css('display','none');
      $currentContent = $($currentTabItem.children('.tab-item-content')).first();
      $currentContent.css('display','block');
  })

    return this;
};