import Header from "@/components/header";
import HeaderMobile from "@/components/header/mobile";
import Nav from "@/components/common/nav";
import Content from "@/components/content";
import Footer from "@/components/footer";
import { GetServerSideProps } from "next";
import { HookContext } from "@/hooks/context";
import { Article_Interface } from "@/interface/common/article";
import {ApiFetch} from "@/hooks/useFetch";

type Props = {
    status: number,
    data: Article_Interface[]
};

export default function Home({ data, status } : Props) {

  return (
       <HookContext data={data} status={status}>
          <div id={"wrap"}>
              <Header />
              <HeaderMobile />
              <Nav />
              <Content />
              <Footer />
          </div>
       </HookContext>
  )
};

export const getServerSideProps: GetServerSideProps = async () => {

      const { data, status } = await ApiFetch();

     return {
        props: {
            data,
            status
        }
     }
}