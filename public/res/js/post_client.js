async function likePost(button, id) {
    button.disabled = true

    const likesTexts = button.getElementsByClassName('likes-text')

    const response = await fetch(`/likepost/${id}`, { method: 'POST' })
    const newValue = await response.json()

    for (const el of likesTexts) {
        el.textContent = newValue.likes
    }
}