async function likePost(button, id) {
    button.disabled = true

    const likesTexts = button.getElementsByClassName('likes-text')

    const response = await fetch(`/api/post/${id}/like`, { method: 'POST' })
    const newValue = await response.json()

    for (const el of likesTexts) {
        el.textContent = newValue.likes
    }
}

async function deletePost(id) {
    const endpoint = `/api/post/${id}`;
    await fetch(endpoint, {
        method: 'DELETE',
    });
    window.location.href = '/';
}