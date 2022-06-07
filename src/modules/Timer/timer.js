const timer = (deadline, id) => {
    const timerWrapper = document.querySelector(id);
    const timerDays = timerWrapper.querySelector('.count_1 > span');
    const timerHours = timerWrapper.querySelector('.count_2 > span');
    const timerMinutes = timerWrapper.querySelector('.count_3 > span');
    const timerSeconds = timerWrapper.querySelector('.count_4 > span');

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;
        const days = Math.floor(timeRemaining / 3600 / 24);
        const hours = Math.floor((timeRemaining / 3600) % 24);
        const minutes = Math.floor((timeRemaining / 60) % 60);
        const seconds = Math.floor(timeRemaining % 60);

        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds
        };
    };

    const addZero = str => {
        if (Number(str) >= 0 && Number(str) < 10) {
            return `0${str}`;
        }
        return str;
    };

    const showClock = () => {
        const getTime = getTimeRemaining();

        if (getTime.timeRemaining > 0) {
            timerDays.textContent = `${addZero(getTime.days)}`;
            timerHours.textContent = `${addZero(getTime.hours)}`;
            timerMinutes.textContent = `${addZero(getTime.minutes)}`;
            timerSeconds.textContent = `${addZero(getTime.seconds)}`;
        }
    };

    const updateClock = () => {
        const getTime = getTimeRemaining();
        if (getTime.timeRemaining > 0) {
            setInterval(() => {
                showClock();
            }, 1000);
        }
    };
    updateClock();
};

export default timer;
