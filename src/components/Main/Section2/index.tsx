import { useState, useRef, useEffect } from "react"
import Container from "@/components/Common/Container"
import { Typography } from "@/components/Typography"
import { useLikedBooks } from "@/hooks/useLikedBooks"
import BookArea from "../BookArea"
import Nodata from "@/components/Common/Nodata"
import { getLikes } from "@/function/function"
import Loading from "@/components/Common/Loading"

const Section2 = () => {
    const [isbns, setIsbns] = useState<string[]>(() => getLikes())
    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useLikedBooks(isbns)
    const books = data?.pages.flat() ?? []
    const observerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = observerRef.current
        if (!el) return
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
                fetchNextPage()
            }
        })
        observer.observe(el)
        return () => observer.disconnect()
    }, [hasNextPage, isFetchingNextPage, fetchNextPage])

    const handleLikeChange = () => {
        setIsbns(getLikes())
    }

    return (
        <section className="mt-20">
            <Container className="flex flex-col gap-4">
                <Typography
                    variant="title2"
                    title="내가 찜한 책"
                />

                <div className="flex items-center gap-4 font-medium text-t-primary">
                    <p>찜한 책</p>
                    <p>총 <span className="text-primary">{isbns.length.toLocaleString()}</span>건</p>
                </div>
            </Container>

            <Container>
                {isLoading ? (
                    <Loading />
                ) : books.length > 0 ? (
                    <div className="mt-9">
                        {books.map((book, idx) => (
                            <BookArea
                                key={book.isbn}
                                book={book}
                                idx={idx}
                                onLikeChange={handleLikeChange}
                            />
                        ))}
                        <div ref={observerRef} className="h-1" />
                        {isFetchingNextPage && (
                            <div className="flex justify-center py-4">
                                <p className="text-t-sub-title text-sm">불러오는 중...</p>
                            </div>
                        )}
                    </div>
                ) :
                    <Nodata title='찜한 책이 없습니다.' />
                }
            </Container>
        </section>
    )
}

export default Section2
