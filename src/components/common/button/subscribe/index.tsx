type Props = {
    name: string
};

export default function ButtonSubscribe({ name } : Props) {
    return (
        <button className={"--btn --highlight hlp-marginRight-35"}>{name}</button>
    )
}