import './App.css';
import './ResultList.css';
import './ResultItem.css';
import './playerFilters.css';
import React from 'react';
import axios from 'axios';
import Item from './ResultItem';
import ResultList from './ResultList'
import Sidebar from './sidebar'
import Playerfilters from './playerFilters'

// query url variables, configured by program to search item database
var baseurl = 'https://showzone-api.herokuapp.com/api/player-profiles/?format=json'
var pageNum = '&page=1'
var order = "&order_by=dsc overall"
var filters = ''

var attribFilters = ["contact_l", "contact_r", "power_l", "power_r", "plate_vision", 
  "plate_discipline", "batting_clutch", "bunting","drag_bunting",
  "hitting_durability","fielding", "arm_strength", "arm_accuracy",
  "reaction_time", "blocking", "speed", "baserunning", "baserunning_aggression",
  "stamina", "pitching_clutch", "hits_per_bf", "k_per_bf","bb_per_bf","hr_per_bf",
  "pitch_velocity", "pitch_control", "pitch_movement", "pitching_durability"]

var minMaxFilters = ["overall", "buy", "sell", "contact_l", "contact_r", "power_l", "power_r", "plate_vision", 
"plate_discipline", "batting_clutch", "bunting","drag_bunting",
"hitting_durability","fielding", "arm_strength", "arm_accuracy",
"reaction_time", "blocking", "speed", "baserunning", "baserunning_aggression",
"stamina", "pitching_clutch", "hits_per_bf", "k_per_bf","bb_per_bf","hr_per_bf",
"pitch_velocity", "pitch_control", "pitch_movement", "pitching_durability"]

var multichoiceChecks =["rarity", "team", "position", "position_secondary", "bat_hand", "series", "throw_hand"]

// Drop-down selection options
var page = 1

class App extends React.Component {
  constructor(props) {
    super(props)

    this.getListings = this.getListings.bind(this);
    this.updateListings = this.updateListings.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.setCountVals = this.setCountVals.bind(this);
    this.getNextPage = this.getNextPage.bind(this);
    this.getPrevPage = this.getPrevPage.bind(this);
    this.state = {
      data: [],
      showing: "players",
      series: []
    }
  }

  getListings() {
    var url = encodeURI(baseurl + pageNum + order + filters)
    axios.get(url)
    .then((response) => { 
      //console.log(response)
      this.setState({
        data: response.data.results,
        count: response.data.count
      })
    })
    .catch((err) => {
      console.log(err);
    })
    axios.get("https://cors-maybe.herokuapp.com/https://mlb21.theshow.com/apis/meta_data.json")
    .then((response) => {
      this.setState({
        series: response.data.series
      })
    })
  }

  updateListings(e) {
    if (document.getElementById("myModal").style.display !== "none") {
      document.getElementById("myModal").style.display = "none"
    }

    var name = document.getElementById("name-search").value
    filters = '&search=' + name

    for (const filt of multichoiceChecks) {
      var vals = document.getElementsByClassName(filt)
      filters += '&' + filt + '='
      for (const checks of vals) {
        if (checks.checked) {
          filters +=checks.value + ','
        }
      }
      console.log(filters)
      console.log(filters.length)
      if (filters[filters.length - 1 ]===',') {
        filters = filters.slice(0, filters.length-1)
      }
    }

    for(const filt of minMaxFilters) {
      var min = document.getElementById("min_" + filt).value
      var max = document.getElementById("max_" + filt).value
      if(!/^\d+$/.test(min)) {
        min = ""
      }
      if(!/^\d+$/.test(max)) {
        max = ""
      }

      filters += '&min_' + filt + '=' + min + '&max_' + filt + '=' + max
    }
    page = 1
    pageNum = "&page=1"
    this.getListings()
  }

  handleDetails(item) {
    this.setState({
      data: [item],
      showing: "details"
    })
  }

  handleSearch(ret) {
    this.setState({
      showing: "players"
    })
    if (!ret) {
      filters = ""
      page = 1
      pageNum = "&page=1"
      filters = ''
    }
    this.getListings()
  }

  getNextPage() {
    page += 1
    pageNum = "&page=" + page
    this.getListings()
    window.scrollTo(0,0)
  }

  getPrevPage() {
    page -= 1
    pageNum ="&page=" + page
    this.getListings()
    window.scrollTo(0,0)
  }

  setCountVals() {
    if (this.state.count === 0) {
      return (
        <div className="page-change">
          0 - 0 of 0
        </div>
      )
    } else if ((page * 100) > this.state.count) {
      return (
        <div className="page-change">
          <div className="material-icons" onClick={this.getPrevPage}>chevron_left</div>
          {((page-1) *100) + 1} - {this.state.count} of {this.state.count}
        </div>
      )
    } else if (page===1 && this.state.count > 0){
      return (
        <div className="page-change">
          {((page-1) * 100) + 1} - {(page * 100)} of {this.state.count}
          <div className="material-icons" onClick={this.getNextPage}>chevron_right</div>
        </div>
      )
    } else {
      return(
        <div className="page-change">
          <div className="material-icons" onClick={this.getPrevPage}>chevron_left</div>
          {((page-1) * 100) + 1} - {(page * 100)} of {this.state.count}
          <div className="material-icons" onClick={this.getNextPage}>chevron_right</div>
        </div>
      )
    }
  }

  componentDidMount () {
    console.log("Component mounted.")
    this.getListings();
  }

  // Fetch results from this file (most likely).  Map the state value for results to item component that displays 1 item each.
  render () {
    // Show details for a particular item
    if(this.state.showing === "details") {
      var itemdetails = this.state.data[0]
      return (
        <div className="App">
          <header className="App-header">
          </header>
          <div className="App-body">
            <Sidebar onSelection={this.handleSearch}/>
            <div className="detail-content">
              <Item itemData={itemdetails} onSelection={this.handleSearch}/>
            </div>
          </div>
        </div>
      )
    }
    if(this.state.showing === "players") {
      return (
        <div className="App">
          <header className="App-header">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
          </header>
          <div className="App-body">
            <Sidebar onSelection={this.handleSearch}/>
            <div className="content">
              {/* Filter options */}
              <Playerfilters series={this.state.series} onFilter={this.updateListings} onReset={this.handleSearch}/>
              <div className="page-num-container">
                  {
                    this.setCountVals()
                  }
                </div>
              <ResultList Results={this.state.data} onGetDetails={this.handleDetails}/>
              <div className="page-num-container">
                {
                  this.setCountVals()
                }
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    }
}

export default App;
