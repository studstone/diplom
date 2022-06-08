const documentModal = () => {
    const body = document.querySelector('body');
    const documentSection = document.getElementById('documents');
    const certificateBlock = documentSection.querySelectorAll('.col-sm-4');
    const modal = document.createElement('div');
    const overlay = document.querySelector('.overlay');
    const widht = document.documentElement.clientWidth;

    const createModal = () => {
        body.append(modal);

        modal.innerHTML = `<img src="images/documents/original/document4.jpg" class="img-responsive" alt="">
                            <span>X</span>
        `;

        const buttonClose = modal.querySelector('span');
        const image = modal.querySelector('img');

        if (widht < 576) {
            modal.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 9999;
                width: 60%;
                height: 90%;
            `;
        } else {
            modal.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 9999;
                width: 30%;
                height: 90%;
            `;
        }


        buttonClose.style.cssText = `
        cursor: pointer;
        position: fixed;
        top: 20px;
        right: 20px;
        font-size: 25px;
        color: black;
        `;

        image.style.cssText = `
        width: 100%;
        height: 100%;
        `;

        buttonClose.addEventListener('click', () => {
            modal.style.cssText = `
                display: none;
            `;
            overlay.style.cssText = `
                display: '';
            `;
        });
    };

    certificateBlock.forEach(el => {

        el.addEventListener('mouseenter', () => {
            el.children[0].children[1].style.opacity = 1;
        });
        el.addEventListener('mouseleave', () => {
            el.children[0].children[1].style.opacity = 0;
        });
        el.addEventListener('click', e => {
            e.preventDefault();
            overlay.style.cssText = `
                display: block;
            `;
            createModal();
        });
    });
};


export default documentModal;
