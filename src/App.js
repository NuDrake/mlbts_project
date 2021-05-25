import React from 'react';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{headerName: "Name", field: "name"}, 
                    {headerName: "Best Sell Price", field: "best_sell_price"}, 
                    {headerName: "Best Buy Price", field: "best_buy_price"}],
      rowData: []
    }
  }
  getListings() {
    axios.get('https://cors-anywhere.herokuapp.com/https://mlb19.theshownation.com/apis/listings.json')
      .then((response) => {
        this.setState({
          rowData: response.data
        })
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount () {
    this.getListings();
  }

  render() {
    return (
      <div className="ag-theme-balham">
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData.listings}>
        </AgGridReact>
      </div>
    );
  }
}

export default App;
