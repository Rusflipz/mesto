export const popupImg = document.querySelector('.popup_img');
export const popupEdit = document.querySelector(".popup_edit");
export const popupAdd = document.querySelector(".popup_add");
export const popupAvatar = document.querySelector(".popup_avatar");
export const popupAvatarOpen = document.querySelector(".profile__avatarConteiner");
export const popupAvatarClose = document.querySelector('.popup__exit-button_avatar');
export const popupUrlInput = popupAvatar.querySelector('.popup__input_avatar');
export const popupAvatarForm = document.querySelector('.popup__form_avatar');
export const popupAddOpen = document.querySelector(".profile__add-button");
export const popupEditOpen = document.querySelector(".profile__edit-button");
export const popupEditClose = document.querySelector(".popup__exit-button_edit");
export const popupAddClose = document.querySelector(".popup__exit-button_add");
export const popupAddForm = document.querySelector(".popup__form_add");
export const popupEditForm = document.querySelector(".popup__form_edit");
export const profileName = document.querySelector(".profile__name_text");
export const ProfileCaption = document.querySelector(".profile__caption");
export const popupImgClose = document.querySelector(".popup__exit-button_img");
export const popupNameInput = popupEdit.querySelector('.popup__input_name');
export const popupCaptionInput = popupEdit.querySelector('.popup__input_caption');

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

function closeByOverlay(evt) {
    closePopup(evt.target.closest('.popup'));
}

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
    const overlay = popup.querySelector('.popup__overlay');
    overlay.addEventListener('click', closeByOverlay);
}

export function closePopup(popup) {
    document.removeEventListener('keydown', closeByEscape);
    const overlay = popup.querySelector('.popup__overlay');
    overlay.removeEventListener('click', closeByOverlay);
    popup.classList.remove('popup_opened');
}

export function loading() {
    const openPopup = document.querySelector(".popup_opened");
    const button = openPopup.querySelector(".popup__button");
    button.textContent = "Сохранение..."
}