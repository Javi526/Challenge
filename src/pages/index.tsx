import Header from "@/components/header";
import HeaderMobile from "@/components/header/mobile";
import Nav from "@/components/common/nav";
import Content from "@/components/content";
import Footer from "@/components/footer";
import { GetServerSideProps } from "next";
import { ENDPOINT } from "@/config";
import {HookContext} from "@/hooks/context";

type Props = {
    status: number,
    data: any
}

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
     const response = await fetch(ENDPOINT);
     const status = response.status;
     const data = await response.json();

    return {
        props: {
            data,
            status
        }
    }
}