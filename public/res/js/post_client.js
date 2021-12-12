async function likePost(button, id) {
    button.disabled = true

    const likesTexts = button.getElementsByClassName('likes-text')

    const response = await fetch(`/posts/${id}/like`, { method: 'POST' })
    const newValue = await response.json()

    for (const el of likesTexts) {
        el.textContent = newValue.likes
    }
}

async function deletePost(id) {
    await fetch(`/posts/${id}`, { method: 'DELETE' });
    window.location.href = '/';
}