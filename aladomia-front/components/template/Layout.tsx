import Footer from "./Footer";
import Navigation from "./Navigation";

type layoutProps = {
  children?: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: layoutProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navigation />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
