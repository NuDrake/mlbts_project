import React from 'react';
import Attribute from './attribute'

import common from './resources/shield-common.png';
import bronze from './resources/shield-bronze.png';
import silver from './resources/shield-silver.png';
import gold from './resources/shield-gold.png';
import diamond from './resources/shield-diamond.png';
import stubs from './resources/stubs.png'

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.doesPitch5Exist = this.doesPitch5Exist.bind(this)
        this.doesPitch4Exist = this.doesPitch4Exist.bind(this)
        this.isPitcher = this.isPitcher.bind(this)
        this.hasPitches = this.hasPitches.bind(this)
        this.hasPitchAttributes = this.hasPitchAttributes.bind(this)
        this.isSellable = this.isSellable.bind(this)
        this.returnToSearch = this.returnToSearch.bind(this)
    }

    returnToSearch() {
        this.props.onSelection(true)
    }

    doesPitch4Exist() {
        const item = this.props.itemData
        if(item.pitch_4 === "") {
            return
        } else {
            return (
                <div className="pitchAttributesContainer">
                    <p className="pitchAttributesHeader">{item.pitch_4}</p>
                    <div className="pitchAttributes">
                        <Attribute name="CTRL" value={item.pitch_4_control}/>
                        <Attribute name="VEL" value={item.pitch_4_speed}/>
                        <Attribute name="BRK" value={item.pitch_4_movement}/>
                    </div>
                </div>
                )
        }
    }

    doesPitch5Exist() {
        const item = this.props.itemData
        if(item.pitch_5 === "") {
            return
        } else {
            return (
                <div className="pitchAttributesContainer">
                    <p className="pitchAttributesHeader">{item.pitch_5}</p>
                    <div className="pitchAttributes">
                        <Attribute name="CTRL" value={item.pitch_5_control}/>
                        <Attribute name="VEL" value={item.pitch_5_speed}/>
                        <Attribute name="BRK" value={item.pitch_5_movement}/>
                    </div>
                </div>
                )
        }
    }

    isPitcher() {
        const item = this.props.itemData
        if (item.is_hitter === false || item.name==="Shohei Ohtani") {
            return (
                <div>
                    <div className="pitchingAttributesContainer">
                        <p className="pitchingAttributesHeader">Pitching Attributes:</p>
                        <div className="pitchingAttributes">
                            <Attribute name="STA" value={item.stamina}/>
                            <Attribute name="H/9" value={item.hits_per_bf}/>
                            <Attribute name="K/9" value={item.k_per_bf}/>
                            <Attribute name="BB/9" value={item.bb_per_bf}/>
                            <Attribute name="HR/9" value={item.hr_per_bf}/>
                            <Attribute name="CLU" value={item.pitching_clutch}/>
                            <Attribute name="CTRL" value={item.pitch_control}/>
                            <Attribute name="VEL" value={item.pitch_velocity}/>
                            <Attribute name="BRK" value={item.pitch_movement}/>
                        </div>
                    </div>
                </div>
            )
        }
    }

    hasPitches() {
        const item = this.props.itemData
        if(item.pitch_1 !== "") {
            return (
                <div className="basicCardInfoPitches">
                    <p className="pitchesHeader">Pitches</p>
                    <p className="pitch">{item.pitch_1}</p>
                    <p className="pitch">{item.pitch_2}</p>
                    <p className="pitch">{item.pitch_3}</p>
                    <p className="pitch">{item.pitch_4}</p>
                    <p className="pitch">{item.pitch_5}</p>
                </div>
            )
        }
    }

    hasPitchAttributes() {
        const item = this.props.itemData
        if(item.pitch_1 !== "") {
            return (
                <div className="pitchesAttributesContainer">
                    <p className="pitchAttributesContainerHeader">Pitch Attributes: </p>
                    <div className="pitchAttributesList">
                        <div className="pitchAttributesContainer">
                            <p className="pitchAttributesHeader">{item.pitch_1}</p>
                            <div className="pitchAttributes">
                                <Attribute name="CTRL" value={item.pitch_1_control}/>
                                <Attribute name="VEL" value={item.pitch_1_speed}/>
                                <Attribute name="BRK" value={item.pitch_1_movement}/>
                            </div>
                        </div>
                        <div className="pitchAttributesContainer">
                            <p className="pitchAttributesHeader">{item.pitch_2}</p>
                            <div className="pitchAttributes">
                                <Attribute name="CTRL" value={item.pitch_2_control}/>
                                <Attribute name="VEL" value={item.pitch_2_speed}/>
                                <Attribute name="BRK" value={item.pitch_2_movement}/>
                            </div>
                        </div>
                        <div className="pitchAttributesContainer">
                            <p className="pitchAttributesHeader">{item.pitch_3}</p>
                            <div className="pitchAttributes">
                                <Attribute name="CTRL" value={item.pitch_3_control}/>
                                <Attribute name="VEL" value={item.pitch_3_speed}/>
                                <Attribute name="BRK" value={item.pitch_3_movement}/>
                            </div>
                        </div>
                        {
                            this.doesPitch4Exist()
                        }
                        {
                            this.doesPitch5Exist()
                        }
                    </div>
                </div>
            )
        }
    }

    isSellable() {
        const item = this.props.itemData
        if(item.playerlisting !== null) {
            return (
                <div className="generalInfo">
                    <div className="listing">
                        <p>Best Buy Price: {item.playerlisting.best_buy_price}</p>
                        <img src={stubs} alt="stubs.png" className="listingImg"></img> 
                    </div>
                    <div className="listing">
                        <p>Best Sell Price: {item.playerlisting.best_sell_price}</p>
                        <img src={stubs} alt="stubs.png" className="listingImg"></img>   
                    </div>
                </div>
            )
        }
    }

    render() {
        const item = this.props.itemData
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
        console.log(item.display_secondary_positions)
        return (
            <div className="itemContainer">
                <div className="basicInfoContainer">
                    <img className="detailimg" src={item.img} alt={item.name}/>
                    <div className="basicInfo">
                        <div className="basicInfoHeader">
                            <p className="detailHeader">{item.jersey_number} - {item.name} - {item.display_position} - {item.overall}</p>
                            <img src={icon} className="detailIcon" alt="shield.png"/>    
                        </div>
                        <div className="basicCardInfo">
                            <div className="basicCardInfoGeneral">
                                {
                                    function () {
                                        var positions = ''
                                        console.log(item.display_secondary_positions !== [])
                                        if (item.display_secondary_positions !== []) {
                                            for (const pos of item.display_secondary_positions) {
                                                positions += pos + ', '
                                            }
                                            positions = positions.slice(0, positions.length-2)
                                            return (
                                                <p className="generalInfo">Secondary Positions: {positions}</p>
                                            )
                                        }
                                    }()
                                }
                                {/* <p className="generalInfo">Secondary Posistions: {item.display_secondary_positions}</p> */}
                                <p className="generalInfo">Bats/Throws: {item.bat_hand}/{item.throw_hand}</p>
                                <p className="generalInfo">Team: {item.team}</p>
                                <p className="generalInfo">Series: {item.series}</p>
                                <p className="generalInfo">Height: {item.height}</p>
                                <p className="generalInfo">Weight: {item.weight}</p>
                                <p className="generalInfo">Age:  {item.age}</p>
                                <p className="generalInfo">Born: {item.born}</p> 
                                {
                                    this.isSellable()
                                }
                            </div>
                            {
                                this.hasPitches()
                            }
                        </div>
                    </div> 
                    <button className="go-back-button" onClick={this.returnToSearch}>Return to Current Search</button>
                </div>
                {
                    this.isPitcher()
                }
                {
                    this.hasPitchAttributes()
                }
                <div className="hittingAttributesContainer">
                    <p className="hittingAttributesHeader">Hitting Attributes:</p>
                    <div className="hittingAttributes">
                        <Attribute name="CON L" value={item.contact_left}/>
                        <Attribute name="CON R" value={item.contact_right}/>
                        <Attribute name="POW L" value={item.power_left}/>
                        <Attribute name="POW R" value={item.power_right}/>
                        <Attribute name="VIS" value={item.plate_vision}/>
                        <Attribute name="DISC" value={item.plate_discipline}/>
                        <Attribute name="CLU" value={item.batting_clutch}/>
                        <Attribute name="BUNT" value={item.bunting_ability}/>
                        <Attribute name="DBUNT" value={item.drag_bunting_ability}/>
                        <Attribute name="DUR" value={item.hitting_durability}/>
                    </div>
                </div>
                <div className="fieldingAttributesContainer">
                    <p className="fieldingAttributesHeader">Fielding Attributes:</p>
                    <div className="fieldingAttributes">
                        <Attribute name="FLD" value={item.fielding_ability}/>
                        <Attribute name="ARM STR" value={item.arm_strength}/>
                        <Attribute name="ARM ACC" value={item.arm_accuracy}/>
                        <Attribute name="REAC" value={item.reaction_time}/>
                        <Attribute name="BLOCK" value={item.blocking}/>
                    </div>
                </div>
                <div className="baserunningAttributesContainer">
                    <p className="baserunningAttributesHeader">Baserunning Attributes:</p>
                    <div className="baserunningAttributes">
                        <Attribute name="SPD" value={item.speed}/>
                        <Attribute name="STEAL" value={item.baserunning_ability}/>
                        <Attribute name="BR AGG" value={item.baserunning_aggression}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item