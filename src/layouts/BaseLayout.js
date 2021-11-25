import Header from "../component/header";
import Footer from "../component/footer";

export default function BaseLayout({children}) {
    return (
        <>
            <Header/>
                 {children}
            <Footer/>
        </>
    )
}
