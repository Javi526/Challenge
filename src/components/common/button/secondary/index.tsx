type Props = {
    name: string
};

export default function SecondaryButton({ name }: Props) {
    return <button className={"--btn --secondary"}>{name}</button>
}