$(document).on('click', '.trigger-images', function(){
    var shouldRun = $(this).siblings('img').attr('data-state') === 'collection';
    if(shouldRun) {
        console.log('Am I happening?');
        //Should be images from real collection later
        var imageString = "images/box.jpg";
        var imageRefs = $('.trigger-images');
        for (var i = 0; i < imageRefs.length; i++) {
            var element = imageRefs[i];
            $(element).siblings('img').attr('src', imageString);
            $(element).siblings('img').attr('data-state', 'individual');
        }
        //T0 be investigat4=ed
        setTimeout(()=>{
            toggleSlideStateOn();
        }, 1000);
    }
});


function toggleSlideStateOn () {
    var anchors = $('.toggle-slide');
    for (let i = 0; i < anchors.length; i++) {
        const element = $(anchors[i]);
        var newHref = element.attr('data-id');
        element.attr('href', newHref);
        
    }
}

function toggleSlideStateOff () {
    var anchors = $('.toggle-slide');
    for (let i = 0; i < anchors.length; i++) {
        const element = $(anchors[i]);
        element.attr('href', '#');
        
    }
}
//Needs work
$('#title > h1').on('click', function(){
    var imageRefs = $('.trigger-images');
        for (var i = 0; i < imageRefs.length; i++) {
            var element = imageRefs[i];
            var oldImage = $(element).siblings('img').attr('data-original');
            $(element).siblings('img').attr('src', oldImage);
            $(element).siblings('img').attr('data-state', 'collection');
        }
    toggleSlideStateOff();
}); 