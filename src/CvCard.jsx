import React from 'react'

const CvCard = ({cvItem}) => {
    return (
        <div  className="ui segment" style={{height: '100%'}}>
            <div style={{height: '150px', display: 'flex', alignItems: 'center'}}>
                <div className="ui medium image">
                        <img src={cvItem.image}></img>
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