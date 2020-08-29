import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nom: "",
      per: "",
      bunga: "10",
      hasil: ""
    }
  }
  changenom = (event) => {
    this.setState({ nom: event.target.value });
  }
  changeper = (event) => {
    this.setState({ per: event.target.value });
  }
  changebu = (event) => {
    this.setState({ bunga: event.target.value });
  }
  click = (event) => {
    this.bun = this.state.bunga * this.state.nom / 100
    this.plus = parseInt(this.bun) + parseInt(this.state.nom)
    this.total = this.plus / this.state.per
    this.setState({ hasil: this.total })
  }
  render() {
    return (
      <div className="App container col-sm-4">
        <div className="alert alert-info">
          <h3>Cicilan Bank</h3>
        </div>
        <div className="row my-1 justify-content-center text-center">
          <h5 className="text-left col-sm-3">Nominal</h5>
          <input type="text" className="form-control col-sm-6" name="nominal" value={this.state.nom} onChange={this.changenom} />
        </div>
        <div className="row my-1 justify-content-center text-center">
          <h5 className="text-left col-sm-3">Bunga</h5>
          <input type="text" className="form-control col-sm-6" name="bunga" value={this.state.bunga} onChange={this.changebu} disabled />
        </div>
        <div className="row justify-content-center text-center">
          <h5 className="text-left col-sm-3">Periode</h5>
          <select type="text" className="form-control col-sm-6" name="Periode" value={this.state.per}
            onChange={this.changeper}>
            <option value="-">-</option>
            <option value="1">1 Bulan</option>
            <option value="2">2 Bulan</option>
            <option value="3">3 Bulan</option>
            <option value="4">4 Bulan</option>
            <option value="5">5 Bulan</option>
            <option value="6">6 Bulan</option>
            <option value="7">7 Bulan</option>
            <option value="8">8 Bulan</option>
            <option value="9">9 Bulan</option>
            <option value="10">10 Bulan</option>
            <option value="11">11 Bulan</option>
            <option value="12">12 Bulan</option>
          </select>
        </div>
        <hr/>
        <div className="justify-content-center text-center">
          <div>
            <button type="button" name="hitung" className="btn btn-info col-sm-8 my-1" onClick={this.click}>Hitung</button>
            <div class="alert alert-secondary alert-dismissible fade show text-left my-3" role="alert" >
              {this.state.hasil}
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
