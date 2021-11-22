const containerCards = document.querySelector(".cards");
const popupImg = document.querySelector('.popup_img');
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

initialCards.forEach(cardData => {
    const card = createCard(cardData);
    containerCards.append(card);
})