const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const popupEditOpen = document.querySelector(".profile__edit-button");
const popupEditClose = document.querySelector(".popup__exit-button_edit");
const popupAddOpen = document.querySelector(".profile__add-button");
const popupAddClose = document.querySelector(".popup__exit-button_add");
const likeButton = document.querySelectorAll('.card__like');
const popupAddForm = document.querySelector(".popup__form_add");
const popupEditForm = document.querySelector(".popup__form_edit");
const profileName = document.querySelector(".profile__name_text");
const ProfileCaption = document.querySelector(".profile__caption");
const popupImgClose = document.querySelector(".popup__exit-button_img");
const popupNameInput = popupEdit.querySelector('.popup__input_name');
const popupCaptionInput = popupEdit.querySelector('.popup__input_caption');
const overlay = document.querySelectorAll('.popup__overlay');
const formInputName = document.querySelector('.popup__input_name');
const formInputCaption = document.querySelector('.popup__input_caption');
const spanName = document.querySelector('.popup__span_name');
const spanCaption = document.querySelector('.popup__span_caption');
const editButton = document.querySelector('.popup__edit-button');

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

popupAddForm.addEventListener('submit', function(evt) {
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

document.addEventListener('keydown', function(evt) {
    if (evt.key == 'Escape') {
        closePopup(popupAdd);
        closePopup(popupEdit);
        closePopup(popupImg);

    } else {}
})

overlay.forEach(element => element.addEventListener('click', function() {
    closePopup(popupAdd);
    closePopup(popupEdit);
    closePopup(popupImg);
}));