const domElements = () => {

    const ctryName = document.querySelector('#ctry');
    const toggler = document.querySelector('#toggle');
    const currentDate = document.querySelector('#date');

    currentDate.textContent = new Date();
}

export default domElements();