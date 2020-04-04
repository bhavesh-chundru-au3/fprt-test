import React, { Fragment } from 'react';

const EventsCard = props => {
    return (
        <Fragment>
            {
                props.data.map((obj, idx) =>
                    <div className="col-sm-12 col-md-6" key={idx}>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{obj.Name}</h5>
                                <p className="lead text-danger"><small className="text-muted"> Published by </small>{obj.Publisher}</p>
                                <span className="badge badge-danger">Genre={obj.Genre}</span>
                                <p className="card-text"><b style={{fontSize:"20px"}}>Platform -> </b> {obj.Platform}</p>
                                <p className="cardtex"><b style={{fontSize:"20px"}}>Year -> </b>{obj.Year}</p>
                                <p className="card-text" style={{fontSize:"20px"}}><b>Rank -> </b><small className="text-muted">{obj.Rank}</small></p>
                                <p className="card-text" style={{fontSize:"20px"}}><b>Global Sales -> </b><small className="text-muted">{obj.Global_Sales}</small></p>
                            </div>
                        </div>
                    </div>
                )
            }
        </Fragment>
    );
}

export default EventsCard;