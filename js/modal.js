export default function modal() {
    let moreBtn = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        closeBtn = document.querySelector('.popup-close'),
        descrBtn = document.querySelectorAll('.description-btn');

    function open(e) {
        let target = e.target;
        overlay.style.display = 'block';
        target.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        overlay.style.display = 'none';
        moreBtn.classList.remove('more-splash');
        descrBtn.forEach((item) => {
            item.classList.remove('more-splash');
        });
        document.body.style.overflow = '';
    }

    moreBtn.addEventListener('click', open);
    descrBtn.forEach((item) => {
        item.addEventListener('click', open);
    });
    closeBtn.addEventListener('click', close);
}