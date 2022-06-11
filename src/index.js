import calc from "./modules/Calculator/calc";
import form from "./modules/Form/Form";
import documentModal from "./modules/Modal/document-modal";
import modalCall from "./modules/Modal/modal-call";
import servicesModal from "./modules/Modal/services-modal";
import smoothScroll from "./modules/Scroll/scroll";
import benefitsSlider from "./modules/Slider/benefits-slider";
import servicesSlider from "./modules/Slider/services-slider";
import timer from "./modules/Timer/timer";

modalCall();
benefitsSlider();
servicesSlider();
servicesModal();
timer('12 june 2022 13: 30: 00', '#order_1');
timer('12 june 2022 13: 30: 00', '#order_2');
documentModal();
smoothScroll();
calc();
form({
    formId: '.form-horizontal',
    someElem: [{
        type: 'block',
        id: 'calc-total'
    }]
});
form({
    formId: '#form-modal-1',
    someElem: [{
        type: 'block',
        id: 'calc-total'
    }]
});
form({
    formId: '#form-modal-2',
    someElem: [{
        type: 'block',
        id: 'calc-total'
    }]
});
