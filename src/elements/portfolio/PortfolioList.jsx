import React, { Fragment } from "react";
import royallakeside from '../../../public/assets/images/portfolio/royallakeside.png'
import panankrabi from '../../../public/assets/images/portfolio/panankrabi.png'
import ratilanna from '../../../public/assets/images/portfolio/ratilanna.png'
import ramadaphuket from '../../../public/assets/images/portfolio/ramadaphuket.png'
import brownstarling from '../../../public/assets/images/portfolio/brownstarling.png'
import bangkokmidtown from '../../../public/assets/images/portfolio/bangkokmidtown.png'

const PortfolioListContent = [
    {
        image: royallakeside,
        category: 'Luxury Golf Club',
        title: 'Royal Lakeside Golf Club',
        url:"https://www.royallakeside.com/"
    },
    {
        image: panankrabi,
        category: '5 Star Hotel',
        title: 'Panan Krabi Resort',
        url:"https://www.panankrabiresort.com/accommodation.html"
    },
    {
        image: ratilanna,
        category: '5 Star Hotel',
        title: 'Rati Lanna Chiang Mai',
        url:"http://www.ratilannachiangmai.com/"
    },
    {
        image: ramadaphuket,
        category: '5 Star Hotel',
        title: 'Ramada Phuket Deevana',
        url:"http://www.ramadaphuketdeevana.com/"
    },
    {
        image: brownstarling,
        category: '5 Star Hotel',
        title: 'Brown Starling Resort Phuket',
        url:"https://www.brownstarling.com/oxygen.html"
    },
    {
        image: bangkokmidtown,
        category: '5 Star Hotel',
        title: 'Bangkok Midtown Hotel',
        url:"http://www.bangkokmidtownhotel.com/index.html"
    }
]

const PortfolioList = ({column , styevariation}) => {
    const list = PortfolioListContent.slice(0 , PortfolioListContent.length);
    return(
        <Fragment> 
            {list.map((value , index) => (
                <div className={`${column}`} key={index}>
                    <div className={`portfolio ${styevariation}`}>
                        <div className="thumbnail-inner">
                            <div className="thumbnail" style={{backgroundImage: "url("+value.image+")"}}></div>
                            <div className="bg-blr-image" style={{backgroundImage: "url("+value.image+")"}}></div>
                        </div>
                        <div className="content">
                            <div className="inner">
                                <p>{value.category}</p>
                                <h4><a target="_blank" rel="noopener noreferrer" href={value.url}>{value.title}</a></h4>
                                <div className="portfolio-button">
                                    <a className="rn-btn" target="_blank" rel="noopener noreferrer" href={value.url} >View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
           
        </Fragment>
    )
}
export default PortfolioList;