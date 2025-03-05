import { HeadlessButton } from "./HeadlessButton";
function Button({
    type,
    className,
    onClick,
    label
}) {

    return (
        <HeadlessButton
            type={type}
            onClick={onClick}
        >
            {({ type, onClick }) => (
                <button type={type}
                    className={className}
                    onClick={onClick}>
                    {label}
                </button>
            )}
        </HeadlessButton>
    );

}



export { Button };
