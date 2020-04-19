import React from "react"

const Footer = () => {
    return (
        <footer style={{position: "absolute", bottom: "0"}}>
            <div className="ui container" >
                <p id="footer">Made with React {React.version}</p>
            </div>
        </footer>
    )
}

export default Footer