import { openPopup } from '../components/modal';
import { deleteCard, deleteLike, addLike } from '../components/api';
export const containerCards = document.querySelector(".cards");
export const popupImg = document.querySelector('.popup_img');
const popupImage = document.querySelector('.popup__image');

export function createCard(cardData, userId) {
    const cardId = cardData.id
    const template = document.querySelector('#card').content;
    const cardElement = template.querySelector('.card').cloneNode(true);
    cardElement.id = cardId;
    const cardImage = cardElement.querySelector('.card__image');
    cardElement.querySelector('.card__text').textContent = cardData.name;
    cardImage.setAttribute('src', cardData.link);
    cardImage.setAttribute('alt', cardData.name);
    const likeValue = cardElement.querySelector('.card__likeValue');
    likeValue.textContent = cardData.likes;
    const likeButton = cardElement.querySelector('.card__like');
    for (let i = 0; i < cardData.likes; i++) {
        if (cardData.likesOwnersArr[i] == userId) {
            likeButton.classList.add('card__like_active');
        }
    };

    likeButton.addEventListener('click', function(evt) {
        like(cardId, cardElement)
    })

    const deleteButton = cardElement.querySelector('.card__delete-button');

    if (!(cardData.owner == userId)) {
        deleteButton.classList.add('card__delete-button_disable')
    } else {
        deleteButton.addEventListener('click', function() {
            deleteCard(cardId)
                .then(res => {
                    removeCard(cardId)
                })
        })
    }
    cardImage.addEventListener('click', function(evt) {
        const cardImageSrc = evt.target.getAttribute('src');
        popupImage.setAttribute('src', cardImageSrc);
        const cardText = cardElement.querySelector('.card__text').textContent;
        const popupText = document.querySelector('.popup__text');
        popupText.textContent = cardText;
        popupImage.setAttribute('alt', cardText);
        openPopup(popupImg);
    });
    return cardElement;
}

function like(id, cardElement) {
    const button = cardElement.querySelector('.card__like')
    if (button.classList.contains('card__like_active')) {
        deleteLike(id)
            .then(res => {
                likeValue(id, res.likes.length, 'delete')
            })
            .catch((err) => {
                console.log(err);
            });

    } else {
        addLike(id)
            .then(res => {
                likeValue(id, res.likes.length, 'add')
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export function likeValue(id, value, operation) {
    const card = document.getElementById(id);
    const button = card.querySelector('.card__like')
    card.querySelector('.card__likeValue').textContent = value;
    if (operation == 'add') {
        button.classList.add('card__like_active')
    } else {
        button.classList.remove('card__like_active')
    }
}

export function removeCard(id) {
    document.getElementById(id).remove()
}