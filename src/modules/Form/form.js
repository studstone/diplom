const form = ({ someElem = [] }) => {
    const form = document.querySelector('.form-horizontal');
    const formElement = form.querySelectorAll('input');
    const statusBlock = document.createElement('span');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';

    const mapInputs = {
        'form-name': /^[a-zA-Zа-яА-ЯёЁa ]{2,20}$/,
        'form-phone': /^((8|\+7)[-]?)?(\(?\d{3}\)?[-]?)?[\d\- ]{7,10}$/,
    };

    const inputValidate = list => {

        const newArray = Array.from(list);

        Object.keys(mapInputs).forEach(key => {
            console.log(mapInputs, 'mapInputs');

            const findInput = newArray.find(input => input.classList.contains(key));
            if (findInput && !(mapInputs[key].test(findInput.value))) {
                findInput.style.border = 'solid red 2px';
            }
        });
    };
    const clearStyleBorder = item => {
        if (item.style.border) {
            item.style.border = '';
        }
    };

    const clearError = list => {
        list.forEach(input => {
            input.addEventListener('focus', e => clearStyleBorder(e.target));
        });
    };

    const validate = list => {
        let success = true;

        list.forEach(input => {
            if (input.value === '') {
                success = false;
            }
        });

        return success;
    };

    const sendData = data => fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());

    const submitForm = () => {
        const formData = new FormData(form);
        const formBody = {};

        formData.forEach((value, key) => {
            formBody[key] = value;
        });
        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);

            formBody[elem.id] = elem.type === 'block' ? element.textContent : element.value;
        });

        inputValidate(formElement);

        if (validate(formElement)) {
            statusBlock.textContent = loadText;
            statusBlock.style.color = '#fff';
            form.append(statusBlock);

            sendData(formBody)
                .then(() => {
                    statusBlock.textContent = successText;

                    formElement.forEach(input => {
                        input.value = '';
                    });
                })
                .catch(() => statusBlock.textContent = errorText);
        }
    };

    clearError(formElement);

    try {
        if (!form) {
            throw new Error('Верни форму на место');
        }

        form.addEventListener('submit', event => {
            event.preventDefault();

            submitForm();
        });
    } catch (error) {
        alert(error.massage);
    }
};


export default form;
