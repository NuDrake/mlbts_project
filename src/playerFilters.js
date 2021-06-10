import React from 'react';

var rarities = ["Common", "Bronze", "Silver", "Gold", "Diamond"]
var teams = ["Free Agents", "Angels","Astros","Athletics", "Blue Jays", "Braves", "Brewers",
  "Cardinals", "Cubs","Diamondbacks", "Dodgers", "Giants","Indians","Mariners","Marlins","Mets",
  "Nationals","Orioles","Padres","Pirates","Phillies","Rangers","Rays","Reds","Red Sox","Rockies",
  "Royals","Tigers","Twins","White Sox","Yankees"]

var positions = ["SP","RP","CP","C","1B","2B","3B","SS","LF","CF","RF"]

var attribFilters = ["contact_l", "contact_r", "power_l", "power_r", "plate_vision", 
  "plate_discipline", "batting_clutch", "bunting","drag_bunting",
  "hitting_durability","fielding", "arm_strength", "arm_accuracy",
  "reaction_time", "blocking", "speed", "baserunning", "baserunning_aggression",
  "stamina", "pitching_clutch", "hits_per_bf", "k_per_bf","bb_per_bf","hr_per_bf",
  "pitch_velocity", "pitch_control", "pitch_movement", "pitching_durability"]

var attribTitles = ["Contact L", "Contact R", "Power L", "Power R", "Vision", "Discipline", 
  "Batting Clutch", "Bunt", "Drag Bunt", "Hitting Durability", "Fielding", "Arm Strength", 
  "Arm Accuracy", "Reaction", "Blocking", "Speed", "Stealing", "Baserunning Aggression",
  "Stamina", "Pitching Clutch", "H/9","K/9","BB/9","HR/9", "Velocity", "Control", "Break",
  "Pitching Durability"]


class Playerfilters extends React.Component {
    constructor(props) {
        super(props)
        this.onFilter = this.onFilter.bind(this)
        this.onReset = this.onReset.bind(this)
    }

    onFilter() {
        this.props.onFilter()
    }

    onReset() {
        this.props.onReset(false)
    }

    render() {
        var series = []
        for(const sery of this.props.series) {
            if (sery.series_id > 0) {
                series.push(sery.name)
            }
        }

        return(
            <div className="playerFiltersContainer">
                <fieldset className="playerFilters">
                    <div className="filter">
                        <label htmlFor="name">Name: </label>
                        <input name="name" id="name-search"/>
                    </div>

                    <div id="list1" className="dropdown-check-list" tabIndex="100">
                        <span className="anchor" onClick={
                            function() {
                                var checkList = document.getElementById('list1');
                                checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
                                if (checkList.classList.contains('visible'))
                                    checkList.classList.remove('visible');
                                else
                                    checkList.classList.add('visible');
                                }
                            }
                        }>Rarity</span>
                        <ul className="items">
                        {
                            rarities.map(shield => {
                            return (
                                <li><input className="rarity" value={shield} type="checkbox"/>{shield}</li>
                            )
                            })
                        }
                        </ul>
                    </div>

                    <div id="list2" className="dropdown-check-list" tabIndex="100">
                        <span className="anchor" onClick={
                            function() {
                                var checkList = document.getElementById('list2');
                                checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
                                if (checkList.classList.contains('visible'))
                                    checkList.classList.remove('visible');
                                else
                                    checkList.classList.add('visible');
                                }
                            }
                        }>Team</span>
                        <ul className="items">
                        {
                            teams.map(team => {
                            return (
                                <li><input className="team" value={team} type="checkbox"/>{team}</li>
                            )
                            })
                        }
                        </ul>
                    </div>

                    <div id="list3" className="dropdown-check-list" tabIndex="100">
                        <span className="anchor" onClick={
                            function() {
                                var checkList = document.getElementById('list3');
                                checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
                                if (checkList.classList.contains('visible'))
                                    checkList.classList.remove('visible');
                                else
                                    checkList.classList.add('visible');
                                }
                            }
                        }>Position</span>
                        <ul className="items">
                        {
                            positions.map(position => {
                            return (
                                <li><input className="position" value={position} type="checkbox"/>{position}</li>
                            )
                            })
                        }
                        </ul>
                    </div>

                    <div id="list7" className="dropdown-check-list" tabIndex="100">
                        <span className="anchor" onClick={
                            function() {
                                var checkList = document.getElementById('list7');
                                checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
                                if (checkList.classList.contains('visible'))
                                    checkList.classList.remove('visible');
                                else
                                    checkList.classList.add('visible');
                                }
                            }
                        }>Secondary Position</span>
                        <ul className="items">
                        {
                            positions.map(position => {
                            return (
                                <li><input className="position_secondary" value={position} type="checkbox"/>{position}</li>
                            )
                            })
                        }
                        </ul>
                    </div>

                    <div className="filter">
                        <label htmlFor="ovr-min">Overall: </label>
                        <input type="text" name="ovr-min" id="min_overall" placeholder="min"/>
                        <input type="text" name="ovr-max" id="max_overall" placeholder="max"/>
                    </div>
    
                    <div className="filter">
                        <label htmlFor="buy_now_min">Buy Now Price: </label>
                        <input type="text" name="buy_now_min" id="min_sell" placeholder="min"/>
                        <input type="text" name="buy_now_max" id="max_sell" placeholder="max"/>
                    </div>

                    <div className="filter">
                        <label htmlFor="sell_now_min">Sell Now Price: </label>
                        <input type="text" name="sell_now_min" id="min_buy" placeholder="min"/>
                        <input type="text" name="sell_now_max" id="max_buy" placeholder="max"/>
                    </div>

                    <div id="list4" className="dropdown-check-list" tabIndex="100">
                        <span className="anchor" onClick={
                            function() {
                                var checkList = document.getElementById('list4');
                                checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
                                if (checkList.classList.contains('visible'))
                                    checkList.classList.remove('visible');
                                else
                                    checkList.classList.add('visible');
                                }
                            }
                        }>Bats</span>
                        <ul className="items">
                            <li><input className="bat_hand" value="L" type="checkbox"/>L</li>
                            <li><input className="bat_hand" value="R" type="checkbox"/>R</li>
                            <li><input className="bat_hand" value="S" type="checkbox"/>S</li>
                        </ul>
                    </div>

                    <div id="list5" className="dropdown-check-list" tabIndex="100">
                        <span className="anchor" onClick={
                            function() {
                                var checkList = document.getElementById('list5');
                                checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
                                if (checkList.classList.contains('visible'))
                                    checkList.classList.remove('visible');
                                else
                                    checkList.classList.add('visible');
                                }
                            }
                        }>Throws</span>
                        <ul className="items">
                            <li><input className="throw_hand" value="L" type="checkbox"/>L</li>
                            <li><input className="throw_hand" value="R" type="checkbox"/>R</li>
                            <li><input className="throw_hand" value="S" type="checkbox"/>S</li>
                        </ul>
                    </div>

                    <div id="list6" className="dropdown-check-list" tabIndex="100">
                        <span className="anchor" onClick={
                            function() {
                                var checkList = document.getElementById('list6');
                                checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
                                if (checkList.classList.contains('visible'))
                                    checkList.classList.remove('visible');
                                else
                                    checkList.classList.add('visible');
                                }
                            }
                        }>Series</span>
                        <ul className="items">
                        {
                            series.map(sery => {
                                return (
                                    <li><input className="series" value={sery} type="checkbox"/>{sery}</li>
                                )
                            })
                        }
                        </ul>
                    </div>

                    <div className="filter">
                        <button id="attribs" 
                            onClick={function() {document.getElementById("myModal").style.display = "block"}}>
                            Select Attribute Filters
                        </button>
                    </div>

                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <span className="close" 
                                onClick={function() {document.getElementById("myModal").style.display = "none"}}
                            >&times;</span>
                            <div className="attribFilterContainer">
                                {
                                    attribTitles.map(attrib => {
                                        let index = attribTitles.indexOf(attrib)
                                        return(
                                            <div className="attribFilter">
                                                <label htmlFor={attrib} className="filterLabel">{attrib + ': '}</label>
                                                <input type="text" className="minFilter" name={attrib} id={"min_"+attribFilters[index]} placeholder="min"/>
                                                <input type="text" name={attrib} id={"max_"+attribFilters[index]} placeholder="max"/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <input type="button" value="submit" className="attribSubmit" onClick={this.onFilter}/>
                        </div>
                    </div>

                    <input type="button" value="Submit" onClick={this.onFilter}/>
                    <input type="button" className="reset" value="Reset Filters" onClick={this.onReset}/>
                </fieldset>
            </div>
        )
    }
}

export default Playerfilters
