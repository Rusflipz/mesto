const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-4/',
    headers: {
        authorization: 'ede36a6d-3828-4792-96dd-b17df42302b2',
        'Content-Type': 'application/json'
    }
}

export function loadingCards() {
    return fetch(`${config.baseUrl}cards`, {
            headers: config.headers
        })
        .then(checkResponse)
}

export function profileLoading() {
    return fetch(`${config.baseUrl}users/me`, {
            headers: config.headers
        })
        .then(checkResponse)
}

export function editAvatar(url) {
    return fetch(`${config.baseUrl}users/me/avatar`, {
            method: 'PATCH',
            headers: config.headers,
            body: JSON.stringify({
                avatar: url,
            })
        })
        .then(checkResponse)
}

export function editProfile(name, caption) {
    return fetch(`${config.baseUrl}users/me`, {
            method: 'PATCH',
            headers: config.headers,
            body: JSON.stringify({
                name: name,
                about: caption
            })
        })
        .then(checkResponse)
}

export function addCard(newCard) {
    const cardName = newCard.name;
    const cardLink = newCard.link;
    return fetch(`${config.baseUrl}cards`, {
            method: 'POST',
            headers: config.headers,
            body: JSON.stringify({
                name: cardName,
                link: cardLink
            })
        })
        .then(checkResponse)
}

export function deleteCard(id) {
    return fetch(`${config.baseUrl}cards/${id}`, {
            method: 'DELETE',
            headers: config.headers
        })
        .then(checkResponse)
}

export function addLike(id) {
    return fetch(`${config.baseUrl}cards/likes/${id}`, {
            method: 'PUT',
            headers: config.headers
        })
        .then(checkResponse)
}

export function deleteLike(id) {
    return fetch(`${config.baseUrl}cards/likes/${id}`, {
            method: 'DELETE',
            headers: config.headers
        })
        .then(checkResponse)

}

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)

}