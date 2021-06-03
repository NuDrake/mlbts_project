import './App.css';
import './ResultList.css';
import React from 'react';
import axios from 'axios';
import Item from './ResultItem';
import ResultList from './ResultList'
import Sidebar from './sidebar'

// query url variables, configured by program to search item database
var baseurl = 'https://showzone-api.herokuapp.com/api/player-profiles/?format=json'
var pageNum = '&page=1'
var filters = ''

// Drop-down selection options
var rarities = ["Common", "Bronze", "Silver", "Gold", "Diamond"]
var teams = ["Free Agents", "Angels","Astros","Athletics", "Blue Jays", "Braves", "Brewers",
  "Cardinals", "Cubs","Diamondbacks", "Dodgers", "Giants","Indians","Mariners","Marlins","Mets",
  "Nationals","Orioles","Padres","Pirates","Phillies","Rangers","Rays","Reds","Red Sox","Rockies",
  "Royals","Tigers","Twins","White Sox","Yankees"]
var positions = ["SP","RP","CP","C","1B","2B","3B","SS","LF","CF","RF"]

class App extends React.Component {
  constructor(props) {
    super(props)

    this.getListings = this.getListings.bind(this);
    this.updateListings = this.updateListings.bind(this);
    this.state = {
      data: []
    }
  }

  getListings() {
    axios.get(baseurl + pageNum + filters)
    .then((response) => { 
      console.log(response)
      this.setState({
        data: response.data.results
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  updateListings(e) {
    var name = document.getElementById("name-search").value
    filters = '&search=' + name

    var ovr = document.getElementById("rarity-filter").value
    filters += '&rarity=' + ovr

    var team = document.getElementById("team-filter").selectedOptions
    filters +='&team='
    for(var i=0; i<team.length;i++) {
      filters += team.item(i).value + ','
    }
    
    var position = document.getElementById("position-filter").selectedOptions
    filters +='&position='
    for(var i=0; i<position.length;i++) {
      filters += position.item(i).value + ','
    }
    filters = encodeURI(filters)
    this.getListings()
  }

  componentDidMount () {
    console.log("Component mounted.")
    this.getListings();
  }

  // Fetch results from this file (most likely).  Map the state value for results to item component that displays 1 item each.
  render () {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-body">
          <Sidebar/>
          <div className="content">
            <fieldset>
              <label for="name">Name: </label>
              <input name="name" id="name-search" className="filter"/>

              <label for="rarity">Rarity: </label>
              <select name="rarity" id="rarity-filter" className="filter">
                <option value="" defaultValue></option>
                {
                  rarities.map(shield => {
                    return (
                      <option value={shield}>{shield}</option>
                    )
                  })
                }
              </select>

              <label for="team">Team: </label>
              <select multiple name="team" id="team-filter" className="filter">
              <option value="" defaultValue></option>
                {
                  teams.map(team => {
                    return (
                      <option value={team}>{team}</option>
                    )
                  })
                }
              </select>

              <label for="team">Team: </label>
              <select multiple name="positions" id="position-filter" className="filter">
              <option value="" defaultValue></option>
                {
                  positions.map(position => {
                    return (
                      <option value={position}>{position}</option>
                    )
                  })
                }
              </select>

              <input type="button" value="submit" onClick={this.updateListings}/>
            </fieldset>
            <div className="result-headers">
              <p className="header">Player</p>
              <p className="header">Overall</p>
              <p className="header">Position</p>
              <p className="header">Buy Now</p>
              <p className="header">Sell Now</p>
              <p className="header">Team</p>
            </div>
            <ResultList Results={this.state.data}/>
          </div>
        </div>
      </div>
    );
    }
}

export default App;
