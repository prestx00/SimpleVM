import Head from "next/head";
import Header from "./Header";
import { MainContainer } from "./styledcomponents/LayoutStyledComponets";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>SimpleVM</title>
        <meta name="description" content="SimpleVM" />
        <link rel="icon" href="/polus-planet.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default Layout;
