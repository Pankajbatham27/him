import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Body = (props) => {
    return (
        <>
            <Header />
                <section style={{'min-height': "70vh"}}>
                {props.children}
                </section>
            <Footer />
        </>
    )
}
export default Body;