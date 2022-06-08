const servicesSlider = () => {
    const services = document.getElementById('services');
    const sliderWrapper = services.querySelector('.row');
    const slides = sliderWrapper.querySelectorAll('.col-md-12.col-lg-6');
    const arrowsBlock = document.querySelector('.services-arrows');
    const arrowLeft = arrowsBlock.querySelector('.services__arrow--left > img');
    const arrowRight = arrowsBlock.querySelector('.services__arrow--right > img');
    const widht = document.documentElement.clientWidth;

    sliderWrapper.style.cssText = `
    display: flex;
    `;
    widht < 1200 ? sliderWrapper.style.justifyContent = 'center' : sliderWrapper.style.justifyContent = '';


    const visibleSlides = () => (widht >= 1200 ? 2 : 1);

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
        let list = sliderWrapper.querySelectorAll('.col-md-12.col-lg-6');

        const activeSlide = type === 'next' ? 0 : list.length - 1;
        const clone = list[activeSlide].cloneNode(true);

        list[activeSlide].remove();

        if (type === 'next') {
            sliderWrapper.append(clone);
        } else {
            sliderWrapper.prepend(clone);
        }

        list = sliderWrapper.querySelectorAll('.col-md-12.col-lg-6');
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

export default servicesSlider;
