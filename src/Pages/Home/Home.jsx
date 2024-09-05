import { Toaster } from "react-hot-toast";
import Container from "../../Shared/Container";
import Footer from "../../Shared/Footer";
import App from "./App";
import Banner from "./Banner/Banner";
import Quality from "./Quality/Quality";
import Services from "./Services/Services";


const Home = () => {
    return (
        <div>
            <Services></Services>
            <Quality></Quality> 
            <Footer></Footer>
        </div>
    );
};

export default Home;