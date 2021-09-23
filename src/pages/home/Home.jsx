import React from 'react'
import { Charts } from '../../Components/charts/Charts'
import { Featureinfo } from '../../Components/featuredinfo/Featureinfo'
import "./home.css"
import { UserData } from '../../dummyData'
import { Widgetssm } from '../../Components/widgetsSm/Widgetssm'
import { WidgetsLg } from '../../Components/widgetsLg/WidgetsLg'
export default function Home() {
    return (
        <div className="home">
            <Featureinfo/>
            <Charts data={UserData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <Widgetssm/>
                <WidgetsLg/>
            </div>
        </div>
    )
}
