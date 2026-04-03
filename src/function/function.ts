const getLikes = (): string[] => {
    try {
        return JSON.parse(localStorage.getItem('like_books') ?? "[]")
    } catch {
        return []
    }
}

export {
    getLikes
}