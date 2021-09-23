import React from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import"./featureinfo.css"
export const Featureinfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredtitle">REVENUE</span>
                <div className="featuredMoneycontainer">
                    <span className="featuredMoney">Rs 2635367</span>

                    <span className="featuredMoneyRate">+4.6<ArrowUpwardIcon className="featuredIcon "/></span>
                    
                </div>
                    <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
            <span className="featuredtitle">SALES</span>
                <span className="featuredtitle"></span>
                <div className="featuredMoneycontainer">
                    <span className="featuredMoney">Rs 289083</span>
                    
                    <span className="featuredMoneyRate">-10.2<ArrowDownwardIcon className="featuredIcon_negative"/></span>
                    
                </div>
                    <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredtitle">ACQUISITION & COST</span>
                <div className="featuredMoneycontainer">
                    <span className="featuredMoney">Rs 2635367</span>

                    <span className="featuredMoneyRate">+4.6<ArrowUpwardIcon className="featuredIcon "/></span>
                    
                </div>
                    <span className="featuredSub">Compared to last month</span>
            </div>
           
        </div>
            
        
    )
}
