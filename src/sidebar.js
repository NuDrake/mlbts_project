import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="sidebar-container">
                <a>Players</a>
                <a>Stadiums</a>
                <a>Equipment</a>
                <a>Sponsorships</a>
                <a>Unlockables</a>
                <a>Perks</a>
            </div>
        )
    }
}

export default Sidebar