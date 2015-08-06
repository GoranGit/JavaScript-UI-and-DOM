(function($){
    $.fn.hover = function(){

        this.on('mouseover',function(){
            $this = $(this);
            $this.toggleClass("current");

            $this.css('width',parseFloat($this.css('width'))*1.05+'px');
            $this.css('height',parseFloat($this.css('height'))*1.05+'px');

        });
        return this;
    }
}(jQuery));
