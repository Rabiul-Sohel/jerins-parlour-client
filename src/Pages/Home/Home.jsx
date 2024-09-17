import { Toaster } from "react-hot-toast";
import Container from "../../Shared/Container";
import Footer from "../../Shared/Footer";
import App from "./App";
import Banner from "./Banner/Banner";
import Quality from "./Quality/Quality";
import Services from "./Services/Services";
import { Helmet } from "react-helmet-async";
import Review from "./Review/Review";
import SendMessage from "./Message/SendMessage";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Jerin's Parlour</title> 
            </Helmet>
            <Services></Services>
            <Quality></Quality> 
            <Review></Review>
            <SendMessage></SendMessage>
            <Footer></Footer>

        </div>
    );
};

export default Home;