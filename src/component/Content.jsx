import React from 'react';
import P1 from '../images/Auth.png';
import P2 from '../images/LSPortal.png';
import P3 from '../images/IPaddressTracker.jpg';
import P4 from '../images/Portfolio.png';

function Content() {
    const des = "Some quick example text to build on the card title and make up the bulk of the card's content.";
    const cardContent = [
        { space: '6', image: P1, title: 'Authentication API', description: des,live:'https://next-js-mongodb-authentications-app.vercel.app/',source:'https://github.com/tsaxena4k/Next.js-Mongodb-Authentication-App' },
        { space: '6', image: P2, title: 'The LS Portal', description: des,live:'https://the-ls-portal.vercel.app/',source:''},
        { space: '4', image: P3, title: 'IP Address Tracker', description: des,live:'https://ip-adress-tracker-with-nextjs-leafletjs.vercel.app/',source:'https://github.com/tsaxena4k/IP-Adress-Tracker-with-Nextjs-Leafletjs' },
        { space: '4', image: P4, title: 'Portfolio', description: des,live:'https://tusharsaxena.me/',source:'' },
        { space: '4', image: P4, title: 'Portfolio', description: des,live:'https://tusharsaxena.me/',source:'' }
    ]

    function cardGenerator(card) {
        return (
            <div className={`col-sm-${card.space} mb-5`}>
                <div class="card shadow " data-aos="zoom-in">
                    <img src={card.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h3 className="card-title">{card.title}</h3>
                        <p class="card-text">{card.description}</p>
                    </div>
                    <hr></hr>
                    <div className='card-links pb-3'>
                        <button type="button" class="btn btn-primary"><a href={card.live} target='_blank'>Live Preview</a></button>
                        <button type="button" class="btn btn-primary"><a href={card.source} target='_blank'>Source code</a></button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="content-container pb-5">
            <div className="container text-center">
                <h1 className="p-5" data-aos="fade-in">Check them out</h1>
                <div className="content-cards">
                    <div className="row mb-5">
                        {cardContent.map((value) => {
                            return cardGenerator(value);
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
