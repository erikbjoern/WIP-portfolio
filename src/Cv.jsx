import React, { Component } from 'react'
import axios from 'axios'
import CvCard from './CvCard'

class CV extends Component {
    state = {
        cvItems: []
    }

    render() {
        const cvItems = this.state.cvItems
        let cvItemsList

        if (cvItems.length > 0) {

            cvItemsList = cvItems.map(cvItem => {
                return(
                    <div className="ui card" id={`cvItem-${cvItem.id}`} key={cvItem.id}>
                        <CvCard cvItem={cvItem} />
                    </div>
                )
            })
        }

        return(
                <div className="ui main container">
                    <div id="cv-header" className="ui header" style={{fontSize: "400%", padding: "50px"}}>
                        CV
                    </div>
                    <div className="ui stackable four column grid cards">{cvItemsList}</div>    
                </div>
        )
    }

    componentDidMount() {
        axios.get('./src/data/cvItems.json')
            .then(response => {
                this.setState({
                    cvItems: response.data
                })
            })
    }
    
}

export default CV