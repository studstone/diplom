const servicesModal = () => {
    const services = document.getElementById('services');
    const buttons = services.querySelectorAll('.service-button');
    const overlay = document.querySelector('.overlay');
    const serviceModal = document.querySelector('.services-modal');
    const buttonCloSe = serviceModal.querySelector('.services-modal__close');

    const openModal = () => {
        overlay.style.cssText = `
        display: block;
        `;
        serviceModal.classList.remove('services-modal');
    };

    const closeModal = () => {
        overlay.style.cssText = `
        display: '';
        `;
        serviceModal.classList.add('services-modal');
    };

    buttons.forEach(el => el.addEventListener('click', openModal));
    buttonCloSe.addEventListener('click', closeModal);

};
export default servicesModal;
