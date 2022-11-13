import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>S-Shop</title>
            </Head>

            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;