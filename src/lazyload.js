
/**
 * @author Malte Zoudlik ma.z0u
 * @description Light JS preloader
 * @param {*} selector
 */
var Lazyload = function(selector) {
    var images = document.querySelectorAll(selector);
    
    window.addEventListener('scroll', function() { 
        [].forEach.call(images, function(elm) {
            if (window.pageYOffset > ((elm.getBoundingClientRect().top + window.pageYOffset) - window.innerHeight)) {
                var image = new Image;

                image.onload = function() {
                    elm.src = elm.dataset.src;
                    elm.dataset.status = "loaded";
                }  
                image.src = elm.dataset.src;
            }
        });
    });
};