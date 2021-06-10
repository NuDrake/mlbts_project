import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.Selection = this.Selection.bind(this)
    }

    Selection() {
        console.log(this.props)
        this.props.onSelection(false)
    }

    render() {
        return (
            <div className="sidebar-container">
                <p onClick={this.Selection} id="playersData" className="dataAccess">Players</p>
                {/* <p id="stadiumData" className="dataAccess">Stadiums</p>
                <p id="equipmentData" className="dataAccess">Equipment</p>
                <p id="sponsorrData" className="dataAccess">Sponsorships</p>
                <p id="unlockData" className="dataAccess">Unlockables</p>
                <p id="perkData" className="dataAccess">Perks</p> */}
            </div>
        )
    }
}

export default Sidebar