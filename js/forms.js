function forms() {
    let message = {
        loading: 'Загружаю',
        success: 'Скоро мы с вами свяжемся',
        failure: 'Произошла ошибка'
    };

    let modalForm = document.querySelector('.main-form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        contactForm = document.getElementById('form');


    statusMessage.classList.add('status');

    function postXHR(form) {
        form.appendChild(statusMessage);
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            let formData = new FormData(form);
            request.send(formData);

            request.addEventListener('readystatechange', function () {
                if (this.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (this.readyState === 4 && this.status == 200) {
                    statusMessage.innerHTML = message.success;
                    resolve(this.responseText);
                } else {
                    statusMessage.innerHTML = message.failure;
                    let error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }
            });

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        });
    }

    modalForm.addEventListener('submit', function (event) {
        event.preventDefault();
        postXHR(modalForm)
    });

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        postXHR(contactForm);
    });
}

module.exports = forms;