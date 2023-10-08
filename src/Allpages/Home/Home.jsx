import Banner from "../../Banner/Banner";
import Cart1 from "../../Components/Cart1";
import Cart2 from "../../Components/Cart2";
import Cart3 from "../../Components/Cart3";
import Cart4 from "../../Components/Cart4";
import Footer from "../../Footer/Footer";
import FeaturedServices from "../../Services/FeaturedServices";


import Quotes from "./Quotes/Quotes";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Quotes></Quotes>
            <FeaturedServices></FeaturedServices>
            <Cart1></Cart1>
            <Cart2></Cart2>
            <Cart3></Cart3>
            <Cart4></Cart4>
            <Footer></Footer>
        </div>
    );
};

export default Home;