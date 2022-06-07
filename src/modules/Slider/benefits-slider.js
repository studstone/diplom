const benefitsSlider = () => {
    const sliderWrapper = document.querySelector('.benefits-wrap');
    const slides = sliderWrapper.querySelectorAll('.benefits__item');
    const arrowsBlock = document.querySelector('.benefits-arrows');
    const arrowLeft = arrowsBlock.querySelector('.benefits__arrow--left > img');
    const arrowRight = arrowsBlock.querySelector('.benefits__arrow--right > img');
    const widht = document.documentElement.clientWidth;

    widht < 576 ? sliderWrapper.style.justifyContent = 'center' : sliderWrapper.style.justifyContent = '';

    const visibleSlides = () => (widht >= 576 ? 3 : 1);

    const hideSlides = list => {
        list.forEach((item, index) => {
            if (index >= visibleSlides()) {
                item.style.display = 'none';
            } else {
                item.style.display = '';
            }
        });
    };

    const switchSlide = type => {
        let list = sliderWrapper.querySelectorAll('.benefits__item');

        const activeSlide = type === 'next' ? 0 : list.length - 1;
        const clone = list[activeSlide].cloneNode(true);

        list[activeSlide].remove();

        if (type === 'next') {
            sliderWrapper.append(clone);
        } else {
            sliderWrapper.prepend(clone);
        }

        list = sliderWrapper.querySelectorAll('.benefits__item');
        hideSlides(list);
    };


    arrowsBlock.addEventListener('click', e => {
        if (e.target.contains(arrowLeft)) {
            switchSlide('prev');
        } else if (e.target.contains(arrowRight)) {
            switchSlide('next');
        }
    });


    hideSlides(slides);
};


export default benefitsSlider;
