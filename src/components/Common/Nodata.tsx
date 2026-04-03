import NoData from "@/assets/icon/nodata.svg?react"
import { Typography } from "../Typography"

interface INodata {
    title: string
}

const Nodata = ({ title }: INodata) => {
    return (
        <div className="flex flex-col justify-center items-center gap-6 mt-30">
            <NoData
                className="w-20 h-20"
                role="img"
                aria-label="데이터 없음"
            />
            <Typography
                variant="caption"
                title={title}
                className="text-t-sub-title!"
            />
        </div>
    )
}

export default Nodata