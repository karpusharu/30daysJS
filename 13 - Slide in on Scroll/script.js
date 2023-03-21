function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const images = document.querySelectorAll('.slide-in');
function checkSlide (e) {
    images.forEach(image => {
        const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
        const imageBottom = image.offsetTop + image.height;
        console.log(slideInAt);
        const ifHalfShown = slideInAt > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        ifHalfShown && isNotScrolledPast ?
            image.classList.add('active') :
            image.classList.remove('active');
    })
}

window.addEventListener('scroll', debounce(checkSlide));