const variantMap = {
    title1: "text-2xl font-bold leading-[1.5rem]",
    title2: "text-22 font-bold leading-[1.5rem]",
    title3: "text-lg font-bold leading-[1.125rem]",
    body1: "text-xl font-medium leading-[1.25rem]",
    body2: "text-sm font-medium leading-[0.875rem]",
    body2B: "text-sm font-bold leading-[0.875rem]",
    caption: "text-default font-medium leading-[1rem]",
    small: "text-10 font-medium leading-[0.625rem]",
} as const;

interface ITypography {
    variant: keyof typeof variantMap;
    title: string;
    className?: React.HTMLAttributes<HTMLElement>["className"];
    isSpan?: boolean
}

export const Typography = ({
    variant = "title1",
    title = '',
    className,
    isSpan = false
}: ITypography) => {
    const Tag =
        isSpan ? 'span' :
            variant === "title1"
                ? "h1"
                : variant === "title2"
                    ? "h2"
                    : variant === "title3"
                        ? "h3"
                        : "p";

    return <Tag className={`text-t-primary ${variantMap[variant]}${className ? ` ${className}` : ''}`}>{title}</Tag>;
};