import React from 'react';
import './Widget.css';
import InfoIcon from "@material-ui/icons/Info";
import  FiberManualRecordIcon  from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleleft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon></InfoIcon>
            </div>
            {newsArticle("Coronavirus: Lagos updates", "Tops news - 324 readers")}
      {newsArticle("Bitcoin hits new high", "Tops news - 2,324 readers")}

      {newsArticle("BBC News (World)", "US orders civilian jets to join Afghan evacuation")}

      {newsArticle("AFP News Agency", "Taliban says 'hundreds of fighters' heading for holdout Panjshir Valley")}

      {newsArticle("Dogecoin", "I see big things coming in doge.RocketRocketRocket #Dogecoins")}
        </div>

       
    )
}

export default Widgets;
