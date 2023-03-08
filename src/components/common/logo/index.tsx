import Icon from "@/components/common/icon";

type Props = {
    url: string,
    className: string
};

export default function Logo({ url, className } : Props) {
    return (
        <a href={url} className={className}>
          <Icon text={"logo-la-nacion"} />
        </a>
    )
};