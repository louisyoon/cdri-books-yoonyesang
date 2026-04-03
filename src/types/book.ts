interface IBook {
    title: string
    authors: string[]
    publisher: string
    thumbnail: string
    isbn: string
    datetime: string
    price: number
    sale_price: number
    url: string
    contents: string
    translators: string[]
    status: string
}

interface BookResponse {
    documents: IBook[]
    meta: {
        is_end: boolean
        pageable_count: number
        total_count: number
    }
}



export type {
    IBook,
    BookResponse
}