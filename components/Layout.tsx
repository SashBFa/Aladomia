import { StoreProvider } from "../utils/Store";
import Footer from "./Footer";
import Navigation from "./Navigation";

type layoutProps = {
  children?: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <StoreProvider>
        <div className="min-h-screen flex flex-col justify-between">
          <Navigation />
          <main className="container m-auto mt-4 px-4">{children}</main>
          <Footer />
        </div>
      </StoreProvider>
    </>
  );
};

export default Layout;
