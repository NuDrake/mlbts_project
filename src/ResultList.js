import React from 'react';
import common from './resources/shield-common.png';
import bronze from './resources/shield-bronze.png';
import silver from './resources/shield-silver.png';
import gold from './resources/shield-gold.png';
import diamond from './resources/shield-diamond.png';
import stubs from './resources/stubs.png'

class ResultList extends React.Component {
    constructor(props) {
        super(props)
        this.getDetails = this.getDetails.bind(this)
    }

    getDetails(e) {
        console.log(e.target.attributes)
        const id = e.target.attributes[1].nodeValue
        var index = 0
        while (this.props.Results[index].card_id !== id) {
            index += 1
        }
        const item  = this.props.Results[index]
        this.props.onGetDetails(item)
    }

    render() {
        const items = this.props.Results
        //console.log(items)
        return (
            <div className="results-container">
                <ol style={{listStyleType: "none"}}>
                    {
                        items.map(item => {
                            // Certain ranges of player overall have icons associated with them.
                            // This blocks sets those icons.
                            var icon
                            if (item.overall < 65) {
                                icon = common
                            } else if (item.overall < 75) {
                                icon = bronze
                            } else if (item.overall < 80) {
                                icon = silver
                            } else if (item.overall < 85) {
                                icon = gold
                            } else {
                                icon = diamond
                            }
                            
                            // If card is non-sellable, playerlisting is null, leave buy/sell sections empty if so.
                            if (item.playerlisting == null) {
                                return (
                                    <li key={item.uuid} className="list-item-container">
                                        <div className="list-item">
                                            <img className="list-item-img" src={item.img} alt={item.name}/>
                                            <div className="list-item-name">
                                                <p className="item-name" onClick={this.getDetails} data-details={item.card_id}>{item.name}</p>
                                            </div>
                                            <div className="list-item-ovr">
                                                <img className="list-item-ovr-icon" src={icon} alt="ovr-icon"/>
                                                <p className="list-item-ovr-num">{item.overall}</p>
                                            </div>
                                            <p className="list-item-position">{item.display_position}</p>
                                            <p className="list-item-buy"> </p>
                                            <p className="list-item-sell"> </p>
                                            <p className="list-item-team">{item.team}</p>
                                        </div>
                                    </li>
                                )
                            } else {
                                return (
                                    <li key={item.uuid} className="list-item-container">
                                        <div className="list-item">
                                            <img className="list-item-img" src={item.img} alt={item.name}/>
                                            <div className="list-item-name">
                                                <p className="item-name" onClick={this.getDetails} data-details={item.card_id}>{item.name}</p>
                                            </div>
                                            <div className="list-item-ovr">
                                                <img className="list-item-ovr-icon" src={icon} alt="ovr-icon"/>
                                                <p className="list-item-ovr-num">{item.overall}</p>
                                            </div>
                                            <p className="list-item-position">{item.display_position}</p>
                                            <div className="list-item-buy">
                                                <img className="stubs-icon" src={stubs} alt="stubs"/>
                                                <p className="list-item-buy-price">{item.playerlisting.best_sell_price}</p>
                                            </div>
                                            <div className="list-item-sell">
                                                <img className="stubs-icon" src={stubs} alt="stubs"/>
                                                <p className="list-item-sell-price">{item.playerlisting.best_buy_price}</p>
                                            </div>
                                            <p className="list-item-team">{item.team}</p>
                                        </div>
                                    </li>
                                )
                            }
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default ResultList

//Anatomy of API response

//     "card_id": "18ae1b898b96396eceab54056eae50ee",
//     "name": "Aaron Bracho",
//     "img": "https://mlb21.theshow.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaEJkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8f76e6b9caa02a4e2d5e25164e19c9ce2c0bd7fd/default-actionshot.jpg",
//     "tsn_link": "https://mlb21.theshow.com/items/18ae1b898b96396eceab54056eae50ee",
//     "rarity": "Common",
//     "team": "Free Agents",
//     "division": "Free Agents",
//     "overall": 63,
//     "series": "Live",
//     "series_short": "",
//     "display_position": "2B",
//     "display_secondary_positions": [
//         ""
//     ],
//     "jersey_number": 12,
//     "age": 18,
//     "bat_hand": "S",
//     "throw_hand": "R",
//     "weight": "175 lbs",
//     "height": "5'11\"",
//     "born": "Venezuela",
//     "is_hitter": true,
//     "contact_left": 52,
//     "contact_right": 53,
//     "power_left": 34,
//     "power_right": 32,
//     "plate_vision": 59,
//     "plate_discipline": 42,
//     "batting_clutch": 36,
//     "bunting_ability": 26,
//     "drag_bunting_ability": 20,
//     "hitting_durability": 76,
//     "fielding_ability": 67,
//     "arm_strength": 59,
//     "arm_accuracy": 55,
//     "reaction_time": 62,
//     "blocking": 0,
//     "speed": 60,
//     "baserunning_ability": 24,
//     "baserunning_aggression": 22,
//     "stamina": 0,
//     "pitching_clutch": 0,
//     "hits_per_bf": 0,
//     "k_per_bf": 0,
//     "bb_per_bf": 0,
//     "hr_per_bf": 0,
//     "pitch_velocity": 0,
//     "pitch_control": 10,
//     "pitch_movement": 10,
//     "pitching_durability": 0,
//     "pitch_1": "",
//     "pitch_1_speed": 0,
//     "pitch_1_control": 0,
//     "pitch_1_movement": 0,
//     "pitch_2": "",
//     "pitch_2_speed": 0,
//     "pitch_2_control": 0,
//     "pitch_2_movement": 0,
//     "pitch_3": "",
//     "pitch_3_speed": 0,
//     "pitch_3_control": 0,
//     "pitch_3_movement": 0,
//     "pitch_4": "",
//     "pitch_4_speed": 0,
//     "pitch_4_control": 0,
//     "pitch_4_movement": 0,
//     "pitch_5": "",
//     "pitch_5_speed": 0,
//     "pitch_5_control": 0,
//     "pitch_5_movement": 0,
//     "quirks": [],
//     "hit_rank_image": "https://mlb21.theshow.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbVJkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c6d85feda9039ceea8c66d9563c1ab87ee0d3c4e/shield-common.png",
//     "fielding_rank_image": "https://mlb21.theshow.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbWRkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f2714e8f5c1a7e37a9c43d0b68b03af5dc87deff/shield-bronze.png",
//     "playerlisting": {
//         "best_sell_price": 40,
//         "best_buy_price": 5,
//         "profit": 31,
//         "profit_percentage": "620.00",
//         "sales_minute": "0.16",
//         "profit_minute": 2,
//         "exchange_value": 156,
//         "cost_per_exchange_point": "0.03",
//         "qty_to_exchange_25000": 161,
//         "cost_to_exchange_25000": 805,
//         "time_to_exchange_25000": "1006.25"