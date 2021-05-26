// Example card with all properties
// age: 30
// arm_accuracy: 77
// arm_strength: 74
// baserunning_ability: 9
// baserunning_aggression: 7
// bat_hand: "L"
// batting_clutch: 13
// bb_per_bf: 73
// blocking: 0
// born: "New Jersey"
// bunting_ability: 78
// contact_left: 12
// contact_right: 16
// display_position: "SP"
// display_secondary_positions: ""
// drag_bunting_ability: 25
// fielding_ability: 55
// fielding_durability: 84
// fielding_rank_image: ""
// height: "6'3\""
// hit_rank_image: ""
// hits_per_bf: 118
// hitting_durability: 0
// hr_per_bf: 89
// img: "https://mlb21.theshow.com/rails/active_storage/blobs/eyJfcmF…fc6c7daf4121fd2fb206138/fad17b731e6c055006a7615f04d081be.jpg"
// is_hitter: false
// is_sellable: true
// jersey_number: "25"
// k_per_bf: 94
// name: "Al Leiter"
// ovr: 97
// pitch_control: 86
// pitch_movement: 99
// pitch_velocity: 76
// pitches: Array(5) [ {…}, {…}, {…}, … ]
// pitching_clutch: 112
// plate_discipline: 14
// plate_vision: 16
// power_left: 10
// power_right: 13
// quirks: Array(7) [ {…}, {…}, {…}, … ]
// rarity: "Diamond"
// reaction_time: 54
// series: "Milestone"
// series_texture_name: ""
// series_year: 1996
// speed: 37
// stamina: 113
// team: "Marlins"
// team_short_name: "MIA"
// throw_hand: "L"
// type: "mlb_card"
// uuid: "19ca98dbb740f927e9a6b3ffc0c32755"
// weight: "215 lbs"

import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const item = this.props.itemData
        if (!item) {
            return <div className="doctor"></div>
        }
        return (
            <div className="item">
                <h2>{item.name}</h2>
                <img className="image" alt={item.name} src={item.img} />
                <p>Team: {item.team}</p>
            </div>
        )
    }
}

export default Item