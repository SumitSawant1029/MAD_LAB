import React  from 'react';
import Navbar from './Navbar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CSS/ShopByCategory.css';
import Footer from './Footer';
import { Link } from "react-router-dom";

const ShopByCategory = (props) => {
    const cardData = [
        {
            title: "Accessories",
            text: "Unleash Possibilities with Premium Accessories!",
            imageUrl: "https://imgs.search.brave.com/mAMb4y0sZ1Ls0pavRL2x7jBixVKhFr0_Dpm9bgJTw3k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzE3NEpaQzNvMkwu/anBn"
        },
        {
            title: "Cables",
            text: "Cables That Power Your Connectivity!",
            imageUrl: "https://m.media-amazon.com/images/I/61qBNNEeBoL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        },
        {
            title: "Mouse",
            text: "Our Mice Make It Click!",
            imageUrl: "https://imgs.search.brave.com/sx-QeJcj1QUSdM5Y-LCH5Y9WHCbut3jNX8h-n4iSNYA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjM1/NzkwNjQwL3Bob3Rv/L2dhbWluZy1tb3Vz/ZS1wb3J0YWJsZS1z/cGVha2VyLWFuZC1s/YXB0b3AtYXQtbmln/aHQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPW9MQnh6MTVR/bkZETm1PWXptUXZj/Y2oySU95dzlNQnRW/Y3ItTzBOc0xsNFU9",
        },
        {
            title: "Monitor",
            text: "Monitors That Define Clarity!",
            imageUrl: "https://imgs.search.brave.com/pGa_A-botjCZqq1LOECDV9Lqb6wk8iijzhxJ0SanEr8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9iMmMt/Y29udGVudGh1Yi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDYvZGVsbC0z/MjIzcS0xLmpwZz9x/dWFsaXR5PTUwJnN0/cmlwPWFsbA",
        },
    ];

    const renderCards = cardData.map((card, index) => (
        <div className="col" key={index}>
            <div className="card my-3 mx-3">
                <img src={card.imageUrl} className="card-img-top mx-auto my-3" style={{ width: '90%' }} alt={card.title} />
                <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                    {card.title === "Accessories" && <Link to="/Accessories" className="btn btn-primary">Shop Accessories</Link>}
                    {card.title === "Cables" && <Link to="/Cables" className="btn btn-primary">Shop Cables</Link>}
                    {card.title === "Mouse" && <Link to="/Mouse" className="btn btn-primary">Shop Mouse</Link>}
                    {card.title === "Monitor" && <Link to="/Monitor" className="btn btn-primary">Shop Monitor</Link>}
                </div>
            </div>
        </div>
    ));
    

    return (
        <>
            <Navbar />
            
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {renderCards}
                </div>
            
            
            
            <Footer/>
        </>
    );
};

export default ShopByCategory;

