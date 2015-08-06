/* globals $ */
$.fn.gallery = function (cols) {
    var colums = cols || 4;

    var galery = this;

    this.addClass('gallery');

    var galeryList = this.children('.gallery-list');

    for (var i = 1, len = galeryList.children('.image-container').length; i <= len; i += 1) {
        if (i % colums === 0) {
            $(galeryList.children('.image-container')[i]).addClass('clearfix');
        }
    }


    var selectedGalery = this.children('.selected');

    selectedGalery.hide();

    var disableDiv = $('<div>');

    galeryList.on('click', '.image-container', function () {
        $this = $(this);
        selectedGalery.show();


        disableDiv.addClass('disabled-background');
        galery.append(disableDiv);

        galeryList.addClass('blurred');

        var currentImg = $this.find('img');

        setCurrentImage(currentImg);
        setNextImage(currentImg);
        setPreviewImage(currentImg);
    });


    selectedGalery.on('click', '#current-image', function () {

        disableDiv.removeClass('disabled-background');
        galeryList.removeClass('blurred');
        selectedGalery.hide();

    });

    selectedGalery.on('click', '#next-image', function () {

        $this = $(this);
        var currentImage = galeryList.find('img[data-info="' + $this.attr('data-info') + '"]');
        setCurrentImage(currentImage);
        setNextImage(currentImage);
        setPreviewImage(currentImage);
    });

    selectedGalery.on('click', '#previous-image', function () {
        $this = $(this);
        var currentImage = galeryList.find('img[data-info="' + $this.attr('data-info') + '"]');
        setCurrentImage(currentImage);
        setNextImage(currentImage);
        setPreviewImage(currentImage);
    })

    function setCurrentImage(img) {

        var currentImg = selectedGalery.find('#current-image');
        currentImg.attr('src', img.attr('src'));
        currentImg.attr('data-info', img.attr('data-info'));
    }

    function setPreviewImage(img) {
        var previewImgFromGallery = img.parent().prev().find('img');
        if (previewImgFromGallery.length === 0) {
            previewImgFromGallery = img.parent().siblings().last().find('img');
        }
        var previewImg = selectedGalery.find('#previous-image');
        previewImg.attr('src', previewImgFromGallery.attr('src'));
        previewImg.attr('data-info', previewImgFromGallery.attr('data-info'));
    }

    function setNextImage(img) {
        var nextImgFromGallery = img.parent().next().find('img');
        if (nextImgFromGallery.length === 0) {
            nextImgFromGallery = img.parent().siblings().first().find('img');
        }
        var nextImg = selectedGalery.find('#next-image');
        nextImg.attr('src', nextImgFromGallery.attr('src'));
        nextImg.attr('data-info', nextImgFromGallery.attr('data-info'));
    }
};
