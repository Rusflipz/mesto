function cards() {
    const template = document.querySelector('#card').content;
    const cards = document.querySelector('.cards');
    const cardElement = template.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__text').textContent = 'Карачаевск';
    cardElement.querySelector('.card__image').setAttribute('src', './images/karachaevsk.jpg');
    cards.append(cardElement);
}
cards()
cards()
cards()
cards()
cards()
cards()


function addCard() {
    const cards = document.querySelector('.cards');
    let cardName = document.getElementsByName('add-name')[0];
    let cardLink = document.getElementsByName('add-link')[0];

    const cardConteiner = document.createElement('div');
    cardConteiner.classList.add('card');

    const cardMainConteiner = document.createElement('div');
    cardMainConteiner.classList.add('card__main');

    const cardImg = document.createElement('img');
    cardImg.classList.add('card__image');
    cardImg.setAttribute('src', cardLink.value);
    cardImg.setAttribute('alt', 'Невозможно загрузить картинку');

    const cardDeleteButton = document.createElement('button');
    cardDeleteButton.classList.add('card__delete-button');

    const cardCaption = document.createElement('div');
    cardCaption.classList.add('card__caption');

    const cardText = document.createElement('p');
    cardText.classList.add('card__text');
    cardText.textContent = cardName.value;

    const cardButton = document.createElement('button');
    cardButton.classList.add('card__like');

    cardCaption.append(cardText, cardButton);
    cardMainConteiner.append(cardImg, cardDeleteButton)
    cardConteiner.append(cardMainConteiner, cardCaption);
    cards.prepend(cardConteiner);

    console.log(cardLink.value);
    popupAdd();

    const likeButtons = document.querySelectorAll('.card__like');
    likeButtons[0].addEventListener('click', function(evt) {
        let a = evt.target;
        a.classList.toggle('card__like_active')
        console.log('Работает')
    })

    const cardImage = document.querySelectorAll('.card__image');
    cardImage[0].addEventListener('click', function popupImage(evt) {
        const cardImageSrc = evt.target.getAttribute('src');
        const popupImage = document.querySelector('.popup__image');
        popupImage.setAttribute('src', cardImageSrc);
        popupImage.setAttribute('alt', 'Невозможно загрузить картинку');
        const cardText = document.querySelector('.card__text').textContent;
        let popupText = document.querySelector('.popup__text');
        popupText.textContent = cardText;
        console.log(popupImage);
        console.log(cardImageSrc);
        popupImg()


    })

    const deleteButtons = document.querySelectorAll('.card__delete-button');
    deleteButtons[0].addEventListener('click', function(evt) {
        let target = evt.target;
        let parent = target.parentElement;
        parent.parentElement.remove();
    })
}


function popupEdit() {
    let popupEdit = document.querySelector('.popup_edit');
    popupEdit.classList.toggle('popup_opened');
    console.log(popupEdit);
}


function editProfile() {
    let ProfileName = document.querySelector('.profile__name_text');
    let ProfileNameInput = document.getElementsByName('edit-name')[0];
    let ProfileCaption = document.querySelector('.profile__caption');
    let ProfileCaptionInput = document.getElementsByName('edit-caption')[0];
    if (ProfileNameInput.value && ProfileCaptionInput.value) {
        ProfileName.textContent = ProfileNameInput.value;
        ProfileCaption.textContent = ProfileCaptionInput.value;
    } else {
        alert(`Вы не ввели Имя или Подпись. 
Попробуйте еще раз`)
        popupEdit()
        return false
    }
}

function popupAdd() {
    let popupAdd = document.querySelector('.popup_add');
    popupAdd.classList.toggle('popup_opened');
    console.log(popupAdd);
}

function popupEdit() {
    let popupEdit = document.querySelector('.popup_edit');
    popupEdit.classList.toggle('popup_opened');
    console.log(popupEdit);
}

function popupImg() {
    let popupImg = document.querySelector('.popup_img');
    popupImg.classList.toggle('popup_opened');
    console.log(popupImg);
}


const likeButtons = document.querySelectorAll('.card__like');
for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener('click', function(evt) {
        let target = evt.target;
        target.classList.toggle('card__like_active')
        console.log('Работает')
    })
}

const deleteButtons = document.querySelectorAll('.card__delete-button');
for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', function(evt) {
        let target = evt.target;
        let parent = target.parentElement;
        parent.parentElement.remove();
    })
}

const cardImage = document.querySelectorAll('.card__image');
for (let i = 0; i < cardImage.length; i++) {
    cardImage[i].addEventListener('click', function popupImage(evt) {
        const cardImageSrc = evt.target.getAttribute('src');
        const popupImage = document.querySelector('.popup__image');
        popupImage.setAttribute('src', cardImageSrc);
        popupImage.setAttribute('alt', 'Невозможно загрузить картинку');
        const cardText = document.querySelector('.card__text').textContent;
        let popupText = document.querySelector('.popup__text');
        popupText.textContent = cardText;
        console.log(popupImage);
        console.log(cardImageSrc);
        popupImg()


    })
}