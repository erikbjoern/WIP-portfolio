import React from 'react'

const CvCard = ({cvItem}) => {
    return (
        <div className="ui segment" style={{height: '100%'}}>
            <div style={{height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="ui medium image">
                        <a href={cvItem.link}>
                            <img id="image-link" src={cvItem.image}></img>
                        </a>
                </div>
            </div>
            <div className="content">
                <div></div>
                <h3 className="ui header">{cvItem.name}</h3>
                <div className="description">{cvItem.description}</div>
            </div>
        </div>
    )
}

export default CvCard