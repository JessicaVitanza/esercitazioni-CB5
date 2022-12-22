import './layout.scss'
import { Header } from "../header/Header"
import { Footer } from "../footer/Footer"
import { Section } from "../section/Section"


export const Layout = () =>{

    return(
        <div className="Container">

            <Header />
     
            <Section />

            <Footer />

        </div>
    );

}