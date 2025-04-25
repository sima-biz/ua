// let idmodalform = '#modal-form';

// //////////////////////////////////////////////////

// START //////////////////////////////////////////////////////////// 
{ /* <input type="text" placeholder="Email" name="email" id="email" data-reg="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$" /> */ }

let params = (new URL(document.location)).searchParams;

const paramsUrl = [{

    aimA: params.get("a"),
    aimB: params.get("b"),
    aimC: params.get("c"),
    aimD: params.get("d"),
    aimE: params.get("e"),
    aimF: params.get("f"),
    aimLang: params.get("lang"),
}];


let idmodals = '#modals';

//  <div class="input-box">
//  <input type="text" placeholder="Name" name="name" id="name" data-reg="^[А-ЯЁа-яёA-Za-zа-щА-ЩЬьЮюЯяЇїІіЄєҐґ']*$" />
//  <label for="name" class="lng-title-message-enter-name"></label>
// </div>
// <div class="input-box">
//  <input type="text" placeholder="Email" name="email" id="email" data-reg="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$" />
//  <label for="email" class="lng-title-message-enter-email"></label>
// </div>
// <div class="input-box">
//  <input type="text" placeholder="Phone" name="phone" id="phone" data-reg="^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$" />
//  <label for="phone" class="lng-title-message-enter-phone"></label>
// </div>

const toHTMLmodals = fruitchapter =>
    `<section class="modal-form-section" id="modal-form">
    <div class="_modal" data-modal="modal-about-us">
        <div class="modal-bg">
            <div class="modal-body">
                <div class="modal-close"><img src="images/close-cross.png" alt=""></div>
                <div class="modal-content modal-callback">
                    <div class="modal-callback__title modal-cotainer">
                        <div class="container">
                            <div class="content">
                                <div class="contact">
                                    <div class="right-side">
                                        <div class="topic-text lng-link-title-about-us"></div>
                                        <div class="description-text text lng-link-title-about-us-text-one"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="_modal" data-modal="modal-payment">
        <div class="modal-bg">
            <div class="modal-body">
                <div class="modal-close"><img src="images/close-cross.png" alt=""></div>
                <div class="modal-content modal-callback">
                    <div class="modal-callback__title modal-cotainer">
                        <div class="container">
                            <div class="content">
                                <div class="contact">
                                    <div class="right-side">
                                        <div class="topic-text lng-link-title-payment"></div>
                                        <div class="description-text text lng-link-title-payment-text-one"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="_modal" data-modal="modal-delivery">
        <div class="modal-bg">
            <div class="modal-body">
                <div class="modal-close"><img src="images/close-cross.png" alt=""></div>
                <div class="modal-content modal-callback">
                    <div class="modal-callback__title modal-cotainer">
                        <div class="container">
                            <div class="content">
                                <div class="contact">
                                    <div class="right-side">
                                        <div class="topic-text lng-link-title-delivery"></div>
                                        <div class="description-text text lng-link-title-delivery-text-one"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="_modal" data-modal="modal-contacts">
        <div class="modal-bg">
            <div class="modal-body">
                <div class="modal-close"><img src="images/close-cross.png" alt=""></div>
                <div class="modal-content modal-callback">
                    <div class="modal-callback__title modal-cotainer">
                        <div class="container">
                            <div class="content">
                                <div class="contact">
                                    <div class="address details">
                                        <div class="block-img">
                                            <img src="images/footer/time-8-256.png" alt="">
                                        </div>
                                        <div class="text-title lng-link-title-contacts-schedule"></div>
                                        <div class="text lng-link-title-contacts-schedule-open"></div>
                                        <div class="text lng-link-title-contacts-schedule-closed"></div>
                                    </div>
                                    <div class="address details">
                                        <div class="block-img">
                                            <img src="images/footer/worldwide-location-256.png" alt="${fruitchapter.aimA}">
                                        </div>
                                        <div class="text-title lng-link-title-contacts-location"></div>
                                        <div class="text lng-link-title-contacts-location-ukraine"></div>
                                        <div class="text lng-link-title-contacts-location-zaporozhye"></div>
                                    </div>
                                    <div class="phone details">
                                        <div class="block-img">
                                            <img src="images/footer/phone-24-256.png" alt="">
                                        </div>
                                        <div class="text-title lng-link-title-contacts-phone"></div>
                                        <div class="text lng-link-title-contacts-phone-one"></div>
                                        <div class="text lng-link-title-contacts-phone-two"></div>
                                    </div>
                                    <div class="email details">
                                        <div class="block-img">
                                            <img src="images/footer/mail-256.png" alt="">
                                        </div>
                                        <div class="text-title lng-link-title-contacts-email"></div>
                                        <div class="text lng-link-title-contacts-email-one"></div>
                                        <div class="text lng-link-title-contacts-email-two"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="_modal" data-modal="modal-message">
        <div class="modal-bg">
            <div class="modal-body">
                <div class="modal-close"><img src="images/close-cross.png" alt=""></div>
                <div class="modal-content modal-callback">
                    <div class="modal-callback__title modal-cotainer">
                        <div class="container">
                            <div class="content">
                                <div class="right-side">
                                    <p class="topic-text lng-link-title-message-text-one"></p>
                                    <p class="description-text lng-link-title-message-text-two"></p>
                                    <form action="send_mail.php" name="form" method="POST" enctype="multipart/form-data">
                                        <div class="input-box">
                                            <input type="text" placeholder="Name" name="name" id="name" data-reg="^(?:[А-ЯЁа-яёA-Za-z-ЁёІіЇїЄєҐґ']+ ?)+$" />
                                            <label for="name" class="lng-title-message-enter-name"></label>
                                        </div>
                                        <div class="input-box">
                                            <input type="text" placeholder="Email" name="email" id="email" data-reg="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />
                                            <label for="email" class="lng-title-message-enter-email"></label>
                                        </div>
                                        <div class="input-box">
                                            <input type="text" placeholder="Phone" name="phone" id="phone" data-reg="^(?:\\+?\\d{1,3}[ -]?)?(?:\\d{1,4}[ -]?)?\\d{1,4}[ -]?\\d{1,4}[ -]?\\d{1,9}$" />
                                            <label for="phone" class="lng-title-message-enter-phone"></label>
                                        </div>
                                        <div class="file-container">
                                            <input type="file" name="file[]" id="file-input" multiple/>
                                            <label for="file-input">
                                                <div><img src="images/upload-3-512.png"></div>
                                                <div><p class="lng-link-title-message-file-upload"></p></div>
                                            </label>
                                            <div id="num-of-files" class="lng-link-title-message-no-files"></div>
                                            <ul id="files-list"></ul>
                                        </div>
                                        <div class="input-box message-box">
                                            <textarea placeholder="Message" name="message"></textarea>
                                            <label for="message" class="lng-title-message-enter-message"></label>
                                        </div>
                                        <div class="button">
                                            <div class="pseudo-input lng-link-title-message-send"></div>
                                            <input type="submit" id="button" value="Отправить" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>`;



// function rendeModals(paramsUrl) {
//     const htmlModals = paramsUrl.map(toHTMLmodals).join('')

//     document.querySelector(idmodals).innerHTML = htmlModals


// };
// rendeModals();


// -----------------------------------------------------------------------------------

function rendeModals(paramsUrl) {
    const htmlModals = paramsUrl.map(toHTMLmodals).join('')
    return htmlModals;
};
document.querySelector(idmodals).innerHTML = rendeModals(paramsUrl);

// -----------------------------------------------------------------------------------


// END ////////////////////////////////////////////////////////////




// START //////////////////////////////////////////// модальное окно 



const modalBtns = document.querySelectorAll('._modal-open');
const modals = document.querySelectorAll('._modal');
const body = document.body;


function openModal(elem) {
    elem.classList.add('_active');
    body.classList.add('_locked')
};


function closeModal(e) {
    if (e.target.classList.contains('modal-close') || e.target.closest('.modal-close') || e.target.classList.contains('modal-bg')) {
        e.target.closest('._modal').classList.remove('_active')
        body.classList.remove('_locked')
    }
};

modalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let data = e.target.dataset.modalOpen;
        // console.log(data)
        modals.forEach(modal => {
            if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest('._modal-open').dataset.modalOpen) {
                openModal(modal)
            }
        });
    });
});

modals.forEach(modal => {
    modal.addEventListener('click', e => closeModal(e))
});

window.addEventListener('keydown', e => {
    modals.forEach(modal => {
        if (e.key === "Escape" && modal.classList.contains('_active')) {
            modal.classList.remove('_active')
            body.classList.remove('_locked')
        }
    });
});


// END ////////////////////////////////////////////////////////////  модальное окно



// let imputDataName = document.getElementById('name');
// imputDataName.setAttribute("data-reg", "^[А-ЯЁ][а-яё]||[A-Z][a-z]||[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ']*$");

// let imputDataEmail = document.getElementById('email');
// imputDataEmail.setAttribute("data-reg", "^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$");

// let imputDataPhone = document.getElementById('phone');
// imputDataPhone.setAttribute("data-reg", "^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$");