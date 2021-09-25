const popup = document.querySelectorAll(".popup");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const popupEditOpen = document.querySelector(".profile__edit-button");
const popupEditClose = document.querySelector(".popup__exit-button_edit");
const popupAddOpen = document.querySelector(".profile__add-button");
const popupAddClose = document.querySelector(".popup__exit-button_add");
const containerCards = document.querySelector(".cards");
const likeButton = document.querySelectorAll('.card__like');
const popupAddForm = document.querySelector(".popup__form_add");
const popupEditForm = document.querySelector(".popup__form_edit");
const profileName = document.querySelector(".profile__name_text");
const ProfileCaption = document.querySelector(".profile__caption");
const popupImg = document.querySelector('.popup_img');
const popupImgClose = document.querySelector(".popup__exit-button_img");
const popupNameInput = popupEdit.querySelector('.popup__input_name');
const popupCaptionInput = popupEdit.querySelector('.popup__input_caption');

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
    cardElement.querySelector('.card__image').setAttribute('alt', cardData.name);
    const likeButton = cardElement.querySelector('.card__like');
    likeButton.addEventListener('click', function(evt) {
        evt.target.classList.toggle('card__like_active');
    })
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function(evt) {
        const target = evt.target;
        const parent = target.closest('.card');
        parent.remove();
    })
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.addEventListener('click', function(evt) {
        const cardImageSrc = evt.target.getAttribute('src');
        const popupImage = document.querySelector('.popup__image');
        popupImage.setAttribute('src', cardImageSrc);
        const cardText = cardElement.querySelector('.card__text').textContent;
        const popupText = document.querySelector('.popup__text');
        popupText.textContent = cardText;
        popupImage.setAttribute('alt', cardText);
        openPopup(popupImg);
    })
    return cardElement;
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
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
    popupNameInput.value = profileName.textContent;
    popupCaptionInput.value = ProfileCaption.textContent;
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

popupAddForm.addEventListener('submit', function() {
    const popupTextInput = popupAdd.querySelector('.popup__input_cardname');
    const popupLinkInput = popupAdd.querySelector('.popup__input_link');
    const popupText = popupTextInput.value;
    const popupLink = popupLinkInput.value;
    const NewCard = {
        name: popupText,
        link: popupLink
    }
    popupTextInput.value = '';
    popupLinkInput.value = '';
    const card = createCard(NewCard);
    containerCards.prepend(card);
    closePopup(popupAdd)
})

popupEditForm.addEventListener('submit', function() {
    const name = popupNameInput.value;
    const caption = popupCaptionInput.value;
    editProfile(name, caption);
    popupNameInput.value = '';
    popupCaptionInput.value = '';
    closePopup(popupEdit)
})