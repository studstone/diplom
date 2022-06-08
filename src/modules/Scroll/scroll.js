const smoothScroll = () => {
    const arrowUp = document.querySelector('.smooth-scroll');
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        console.log(scrollTop);
        if (scrollTop <= 856) {
            arrowUp.style.display = 'none';
        } else {
            arrowUp.style.display = '';
        }
    });

    arrowUp.addEventListener('click', e => {
        e.preventDefault();
        header.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    });
};


export default smoothScroll;
