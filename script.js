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

popupAddClose.addEventListener('click', function() {
    closePopup(popupAdd)
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