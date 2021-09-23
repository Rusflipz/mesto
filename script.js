const popup = document.querySelectorAll(".popup");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const popupEditOpen = document.querySelector(".profile__edit-button");
const popupEditClose = document.querySelector(".popup__exit-button_edit");
const popupAddOpen = document.querySelector(".profile__add-button");
const popupAddClose = document.querySelector(".popup__exit-button_add");
const containerCards = document.querySelector(".cards");
const likeButton = document.querySelectorAll('.card__like');
const popupAddButton = document.querySelector(".popup__add-button");
const popupEditButton = document.querySelector(".popup__edit-button");
const popupAddForm = document.querySelector(".popup__form_add");
const profileName = document.querySelector(".profile__name_text");
const ProfileCaption = document.querySelector(".profile__caption");
const popupImg = document.querySelector('.popup_img');
const popupImgClose = document.querySelector(".popup__exit-button_img");

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинск',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Карачаевск',
        link: 'https://autotravel.ru/phalbum/90228/193.jpg'
    },
    {
        name: 'Приисковый',
        link: 'https://img1.liveinternet.ru/images/foto/c/1/375/1277375/f_21721208.jpg'
    },
    {
        name: 'Эльбрус',
        link: 'https://photocentra.ru/images/main75/758010_main.jpg'
    },
];

function createCard(cardData) {
    const template = document.querySelector('#card').content;
    const cardElement = template.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__text').textContent = cardData.name;
    cardElement.querySelector('.card__image').setAttribute('src', cardData.link);
    const likeButton = cardElement.querySelector('.card__like');
    likeButton.addEventListener('click', function(evt) {
        evt.target.classList.toggle('card__like_active');
    })
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function(evt) {
        const target = evt.target;
        const parent = target.parentElement;
        parent.parentElement.remove();
    })
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.addEventListener('click', function(evt) {
        const cardImageSrc = evt.target.getAttribute('src');
        const popupImage = document.querySelector('.popup__image');
        popupImage.setAttribute('src', cardImageSrc);
        popupImage.setAttribute('alt', 'Невозможно загрузить картинку');
        const cardText = cardElement.querySelector('.card__text').textContent;
        const popupText = document.querySelector('.popup__text');
        popupText.textContent = cardText;
        openPopup(popupImg);
    })
    return cardElement;
}

function openPopup(popup) {
    popup.classList.toggle('popup_opened');
}

function closePopup(popup) {
    popup.classList.toggle('popup_closed');
    setTimeout(
        () => {
            popup.classList.toggle('popup_opened');
            popup.classList.toggle('popup_closed');
        },
        1.5 * 1000
    );
}

function editProfile(name, caption) {
    profileName.textContent = name;
    ProfileCaption.textContent = caption;
}

initialCards.forEach(cardData => {
    const card = createCard(cardData);
    containerCards.append(card);
})

popupEditOpen.addEventListener('click', function() {
    openPopup(popupEdit)
})

popupEditClose.addEventListener('click', function() {
    closePopup(popupEdit)
})

popupAddOpen.addEventListener('click', function() {
    openPopup(popupAdd)
})

popupImgClose.addEventListener('click', function() {
    closePopup(popupImg)
})

popupAddButton.addEventListener('click', function() {
    const popupInputs = popupAdd.querySelectorAll('.popup__input');
    const popupText = popupInputs[0].value;
    const popupLink = popupInputs[1].value;
    const NewCard = {
        name: popupText,
        link: popupLink
    }
    popupInputs[0].value = '';
    popupInputs[1].value = '';
    const card = createCard(NewCard);
    containerCards.prepend(card);
    closePopup(popupAdd)
})

popupEditButton.addEventListener('click', function() {
    const popupInputs = popupEdit.querySelectorAll('.popup__input');
    const name = popupInputs[0].value;
    const caption = popupInputs[1].value;
    editProfile(name, caption);
    popupInputs[0].placeholder = name;
    popupInputs[1].placeholder = caption;
    popupInputs[0].value = '';
    popupInputs[1].value = '';
    closePopup(popupEdit)
})





// function cards() {
//     const template = document.querySelector('#card').content;
//     const cards = document.querySelector('.cards');
//     const cardElement = template.querySelector('.card').cloneNode(true);
//     cardElement.querySelector('.card__text').textContent = 'Карачаевск';
//     cardElement.querySelector('.card__image').setAttribute('src', './images/karachaevsk.jpg');
//     cards.append(cardElement);
// }
// cards()
// cards()
// cards()
// cards()
// cards()
// cards()


// function addCard() {
//     const cards = document.querySelector('.cards');
//     let cardName = document.getElementsByName('add-name')[0];
//     let cardLink = document.getElementsByName('add-link')[0];

//     const cardConteiner = document.createElement('div');
//     cardConteiner.classList.add('card');

//     const cardMainConteiner = document.createElement('div');
//     cardMainConteiner.classList.add('card__main');

//     const cardImg = document.createElement('img');
//     cardImg.classList.add('card__image');
//     cardImg.setAttribute('src', cardLink.value);
//     cardImg.setAttribute('alt', 'Невозможно загрузить картинку');

//     const cardDeleteButton = document.createElement('button');
//     cardDeleteButton.classList.add('card__delete-button');

//     const cardCaption = document.createElement('div');
//     cardCaption.classList.add('card__caption');

//     const cardText = document.createElement('p');
//     cardText.classList.add('card__text');
//     cardText.textContent = cardName.value;

//     const cardButton = document.createElement('button');
//     cardButton.classList.add('card__like');

//     cardCaption.append(cardText, cardButton);
//     cardMainConteiner.append(cardImg, cardDeleteButton)
//     cardConteiner.append(cardMainConteiner, cardCaption);
//     cards.prepend(cardConteiner);

//     console.log(cardLink.value);
//     popupAdd();

//     const likeButtons = document.querySelectorAll('.card__like');
//     likeButtons[0].addEventListener('click', function(evt) {
//         let a = evt.target;
//         a.classList.toggle('card__like_active')
//         console.log('Работает')
//     })

//     const cardImage = document.querySelectorAll('.card__image');
//     cardImage[0].addEventListener('click', function popupImage(evt) {
//         const cardImageSrc = evt.target.getAttribute('src');
//         const popupImage = document.querySelector('.popup__image');
//         popupImage.setAttribute('src', cardImageSrc);
//         popupImage.setAttribute('alt', 'Невозможно загрузить картинку');
//         const cardText = document.querySelector('.card__text').textContent;
//         let popupText = document.querySelector('.popup__text');
//         popupText.textContent = cardText;
//         console.log(popupImage);
//         console.log(cardImageSrc);
//         popupImg()


//     })

//     const deleteButtons = document.querySelectorAll('.card__delete-button');
//     deleteButtons[0].addEventListener('click', function(evt) {
//         let target = evt.target;
//         let parent = target.parentElement;
//         parent.parentElement.remove();
//     })
// }


// function popupEdit() {
//     let popupEdit = document.querySelector('.popup_edit');
//     popupEdit.classList.toggle('popup_opened');
//     console.log(popupEdit);
// }


// function editProfile() {
//     let ProfileName = document.querySelector('.profile__name_text');
//     let ProfileNameInput = document.getElementsByName('edit-name')[0];
//     let ProfileCaption = document.querySelector('.profile__caption');
//     let ProfileCaptionInput = document.getElementsByName('edit-caption')[0];
//     if (ProfileNameInput.value && ProfileCaptionInput.value) {
//         ProfileName.textContent = ProfileNameInput.value;
//         ProfileCaption.textContent = ProfileCaptionInput.value;
//     } else {
//         alert(`Вы не ввели Имя или Подпись. 
// Попробуйте еще раз`)
//         popupEdit()
//         return false
//     }
// }

// function popupAdd() {
//     let popupAdd = document.querySelector('.popup_add');
//     popupAdd.classList.toggle('popup_opened');
//     console.log(popupAdd);
// }

// function popupEdit() {
//     let popupEdit = document.querySelector('.popup_edit');
//     popupEdit.classList.toggle('popup_opened');
//     console.log(popupEdit);
// }

// function popupImg() {
//     let popupImg = document.querySelector('.popup_img');
//     popupImg.classList.toggle('popup_opened');
//     console.log(popupImg);
// }


// const likeButtons = document.querySelectorAll('.card__like');
// for (let i = 0; i < likeButtons.length; i++) {
//     likeButtons[i].addEventListener('click', function(evt) {
//         let target = evt.target;
//         target.classList.toggle('card__like_active')
//         console.log('Работает')
//     })
// }

// const deleteButtons = document.querySelectorAll('.card__delete-button');
// for (let i = 0; i < deleteButtons.length; i++) {
//     deleteButtons[i].addEventListener('click', function(evt) {
//         let target = evt.target;
//         let parent = target.parentElement;
//         parent.parentElement.remove();
//     })
// }

// const cardImage = document.querySelectorAll('.card__image');
// for (let i = 0; i < cardImage.length; i++) {
//     cardImage[i].addEventListener('click', function popupImage(evt) {
//         const cardImageSrc = evt.target.getAttribute('src');
//         const popupImage = document.querySelector('.popup__image');
//         popupImage.setAttribute('src', cardImageSrc);
//         popupImage.setAttribute('alt', 'Невозможно загрузить картинку');
//         const cardText = document.querySelector('.card__text').textContent;
//         let popupText = document.querySelector('.popup__text');
//         popupText.textContent = cardText;
//         console.log(popupImage);
//         console.log(cardImageSrc);
//         popupImg()


//     })
// }