import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Item from './ResultItem';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  getListings() {
    axios.get('https://cors-maybe.herokuapp.com/https://mlb21.theshow.com/apis/item.json?uuid=19ca98dbb740f927e9a6b3ffc0c32755')
    .then((response) => { 
      console.log(response)
      this.setState({
        data: response.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  componentDidMount () {
    this.getListings();
  }

  // Fetch results from this file (most likely).  Map the state value for results to item component that displays 1 item each.
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.data.team}
          </p>
          <Item itemData={this.state.data}/>
        </header>
      </div>
    );
    }
}

export default App;
