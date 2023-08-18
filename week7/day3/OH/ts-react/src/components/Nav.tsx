

type NavProps = {
    title?: string
}

export default function Nav( {title}: NavProps) {

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}
