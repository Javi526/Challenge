import { Nav_Button, Nav_Item } from "@/constants/common/nav";
import { Nav_Interface } from "@/interface/common/nav";
import Icon from "@/components/common/icon";

export default function Nav() {
    return (
        <nav className={"com-nav-mobile --scrollUp"}>
           <div className={"row"}>
               {Nav_Item.map((data: Nav_Interface) => (
                 <a href={data.url} className={data.className} key={data.id}>
                       <Icon text={data.icon} />
                       <p>{data.name}</p>
                 </a>
               ))}
               <button className={Nav_Button.className}>
                   <Icon text={Nav_Button.icon} />
                   <p>{Nav_Button.name}</p>
               </button>
           </div>
        </nav>
    )
}