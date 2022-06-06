const modalCall = () => {
    const header = document.getElementById('header');
    const buttonCall = header.querySelector('a[href="#callback"]');
    const headerModal = document.querySelector('.header-modal');
    const closeButton = headerModal.querySelector('.header-modal__close');
    const overlay = document.querySelector('.overlay');

    const openModal = () => {
        overlay.style.cssText = `
        display: block;
        `;
        headerModal.classList.remove('header-modal');
    };

    const closeModal = () => {
        overlay.style.cssText = `
        display: '';
        `;
        headerModal.classList.add('header-modal');
    };

    buttonCall.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
};

export default modalCall;
