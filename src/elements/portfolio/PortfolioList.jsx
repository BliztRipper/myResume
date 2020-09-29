import React, { Fragment } from "react";
import summerDer from '../../../public/assets/images/portfolio/summer.jpg'
import autumnDer from '../../../public/assets/images/portfolio/autumn.png'

const PortfolioListContent = [
    {
        image: summerDer,
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: autumnDer,
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: summerDer,
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: autumnDer,
        category: 'Website',
        title: 'Getting tickets to the big show'
    },
    {
        image: summerDer,
        category: 'Website',
        title: 'Getting tickets to the big show'
    },
    {
        image: autumnDer,
        category: 'Website',
        title: 'Getting tickets to the big show'
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
                                <h4><a href="/portfolio-details">{value.title}</a></h4>
                                <div className="portfolio-button">
                                    <a className="rn-btn" href="/portfolio-details">View Details</a>
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