const calc = () => {
    const calcWrapper = document.getElementById('calc');
    const calcType = document.getElementById('calc-type');
    const calcTypeMaterial = document.getElementById('calc-type-material');
    const calcInput = document.getElementById('calc-input');
    const calcTotal = document.getElementById('calc-total');

    console.log(calcType.options);

    const validate = () => {
        calcInput.addEventListener('change', () => {
            if (!/[^\d]/g.test(calcInput.value)) {
                calcInput.style.borderColor = 'green';
            } else {
                calcInput.value = 'Ввeдите число';
                calcInput.style.cssText = `
                    border-color: red;
                    color: red;
                `;
            }
            calcInput.addEventListener('click', () => {
                calcInput.value = '';
                calcInput.removeAttribute('style');
            });
        });
    };

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
        const calcInputValue = +calcInput.value;

        const totalValue = calcTypeValue * calcTypeMaterialValue * calcInputValue;

        calcTotal.value = totalValue;
    };

    calcWrapper.addEventListener('change', e => {
        if (e.target === calcType || e.target === calcTypeMaterial ||
            e.target === calcInput) {
            validate();
            countCalc();
        }
    });
};

export default calc;
