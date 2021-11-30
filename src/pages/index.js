import { enableValidation, toggleButtonState, settings } from '../components/validate';
import { openPopup, closePopup, popupImg, popupEdit, popupAdd, popupEditOpen, popupEditClose, popupAddClose, popupAddForm, popupEditForm, profileName, ProfileCaption, popupImgClose, popupNameInput, popupCaptionInput, popupAvatarOpen, popupAvatar, popupAvatarClose, popupUrlInput, popupAvatarForm, popupAddOpen, loading } from '../components/modal';
import { createCard, containerCards } from '../components/cards';
import { loadingCards, profileLoading, addCard, editAvatar, editProfile } from '../components/api';
const profileAvatar = document.querySelector('.profile__avatar');

const validationValue = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_type_disable',
    inputErrorClass: 'popup__input_type_error',
    errorSpanElement: 'popup__span_type_error',
    errorClass: 'popup__error_visible',
    overlay: '.popup__overlay'
};

let userId = '';


popupAvatarOpen.addEventListener('click', function() {
    openPopup(popupAvatar)
    disabledButton(popupAvatar)
})

popupAvatarClose.addEventListener('click', function() {
    closePopup(popupAvatar)
})

popupAvatarForm.addEventListener('submit', function() {
    loading()
    const url = popupUrlInput.value;
    editAvatar(url)
        .then((result) => {
            const autorInfo = {
                name: result.name,
                caption: result.about,
                imageUrl: result.avatar
            }
            profileAvatar.src = autorInfo.imageUrl;
            profileName.textContent = autorInfo.name;
            ProfileCaption.textContent = autorInfo.caption;
            popupUrlInput.value = '';
            const inputList = Array.from(popupAvatarForm.querySelectorAll(validationValue.formSelector));
            const buttonElement = popupAvatarForm.querySelector(validationValue.submitButtonSelector);
            toggleButtonState(inputList, buttonElement, settings)
            closePopup(popupAvatar)
        })
        .finally(res => {
            const button = popupAvatar.querySelector(".popup__button");
            button.textContent = "Сохранить"
        })
        .catch((err) => {
            console.log(err);
        });
})

popupEditOpen.addEventListener('click', function() {
    popupNameInput.value = profileName.textContent;
    popupCaptionInput.value = ProfileCaption.textContent;
    openPopup(popupEdit)
    disabledButton(popupEdit)
})

popupEditClose.addEventListener('click', function() {
    closePopup(popupEdit)
})

popupAddOpen.addEventListener('click', function() {
    openPopup(popupAdd)
    disabledButton(popupAdd)
})

popupAddClose.addEventListener('click', function() {
    closePopup(popupAdd)
})

popupImgClose.addEventListener('click', function() {
    closePopup(popupImg)
})

popupAddForm.addEventListener('submit', function(evt) {
    loading()
    const popupTextInput = popupAdd.querySelector('.popup__input_cardname');
    const popupLinkInput = popupAdd.querySelector('.popup__input_link');
    const popupText = popupTextInput.value;
    const popupLink = popupLinkInput.value;
    const NewCard = {
        name: popupText,
        link: popupLink
    }
    addCard(NewCard)
        .then((res) => {
            popupTextInput.value = '';
            popupLinkInput.value = '';
            const cardData = res;
            let likesArr = []
            for (let i = 0; i < cardData.likes.length; i++) {
                let likeId = cardData.likes[i]._id;
                likesArr.push(cardData.likes[i]._id)
            }
            const cardExample = {
                name: cardData.name,
                link: cardData.link,
                id: cardData._id,
                likes: cardData.likes.length,
                owner: cardData.owner._id,
                likesOwnersArr: likesArr
            }
            closePopup(popupAdd)
            const card = createCard(cardExample, userId);
            containerCards.prepend(card);
        })
        .finally(res => {
            const button = popupAdd.querySelector(".popup__button");
            button.textContent = "Создать"
        })
        .catch((err) => {
            console.log(err);
        });

    const inputList = Array.from(popupAddForm.querySelectorAll(validationValue.inputSelector));
    const buttonElement = popupAddForm.querySelector(validationValue.submitButtonSelector);
})

popupEditForm.addEventListener('submit', function() {
    loading()
    const name = popupNameInput.value;
    const caption = popupCaptionInput.value;
    editProfile(name, caption)
        .then((result) => {
            popupNameInput.value = '';
            popupCaptionInput.value = '';
            const autorInfo = {
                name: result.name,
                caption: result.about,
                imageUrl: result.avatar
            }
            profileAvatar.src = autorInfo.imageUrl;
            profileName.textContent = autorInfo.name;
            ProfileCaption.textContent = autorInfo.caption;
            const inputList = Array.from(popupEditForm.querySelectorAll(validationValue.formSelector));
            const buttonElement = popupEditForm.querySelector(validationValue.submitButtonSelector);
            closePopup(popupEdit)
        })
        .finally(res => {
            const button = popupEdit.querySelector(".popup__button");
            button.textContent = "Сохранить"
        })
        .catch((err) => {
            console.log(err);
        });
})


function disabledButton(popup) {
    const button = popup.querySelector('.popup__button');
    button.classList.add(validationValue.inactiveButtonClass);
    button.setAttribute("disabled", "disabled");
}

Promise.all([profileLoading(), loadingCards()])
    .then(([userData, cards]) => {
        //Отрисовка профиля
        const autorInfo = {
            name: userData.name,
            caption: userData.about,
            imageUrl: userData.avatar,
            userId: userData._id
        }
        profileAvatar.src = autorInfo.imageUrl;
        profileName.textContent = autorInfo.name;
        ProfileCaption.textContent = autorInfo.caption;
        userId = autorInfo.userId
            //Отрисовка карточек
        cards.forEach(cardData => {
            let likesArr = []
            for (let i = 0; i < cardData.likes.length; i++) {
                let likeId = cardData.likes[i]._id;
                likesArr.push(cardData.likes[i]._id)
            }
            const cardExample = {
                name: cardData.name,
                link: cardData.link,
                id: cardData._id,
                likes: cardData.likes.length,
                owner: cardData.owner._id,
                likesOwnersArr: likesArr
            }
            const card = createCard(cardExample, userId);
            containerCards.append(card);
        })
    })
    .catch(err => {
        console.log(err);
    });

enableValidation(settings);



import './index.css'