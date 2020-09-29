import React, { Fragment } from "react";

const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Website',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Website',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
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
                            <div className={`thumbnail ${value.image}`}></div>
                            <div className={`bg-blr-image ${value.image}`}></div>
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