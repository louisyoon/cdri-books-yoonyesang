interface IConatainer {
    children: React.ReactNode
}


const Container = ({ children }: IConatainer) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Container