import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      harga: "",
      ppn: "",
      diskon:"",
      hasil: ""
    }
  }
  changeharga = (event) => {
    this.setState({ harga: event.target.value });
  }
  changeppn = (event) => {
    this.setState({ ppn: event.target.value });
  }
  changediskon = (event) => {
    this.setState({ diskon: event.target.value });
  }
  click = (event) => {
    this.disko = this.state.harga * this.state.diskon / 100
    this.awal = parseInt(this.state.harga) - parseInt(this.disko)
    this.pp = this.awal * this.state.ppn / 100
    this.akhir = parseInt(this.awal) + parseInt(this.pp) 
    this.total = this.akhir
    this.setState({ hasil: this.total }) 
  }
  render() {
    return (
      <div className="App container col-sm-4">
        <div className="alert alert-danger">
          <h3>Hitung Harga Akhir</h3>
        </div>
        <div className="row my-1">
          <h5 className="text-left">Harga Awal</h5>
          <input type="text" className="form-control" name="harga" value={this.state.harga} onChange={this.changeharga} />
        </div>
        <div className="row my-1">
          <h5 className="text-left">PPN</h5>
          <input type="text" className="form-control" name="ppn" value={this.state.ppn} onChange={this.changeppn} />
        </div>
        <div className="row">
          <h5 className="text-left">Diskon</h5>
          <input type="text" className="form-control" name="diskon" value={this.state.diskon} onChange={this.changediskon} />
        </div>
        <hr />
        <div className="justify-content-center text-center">
          <div>
            <button type="button" name="hitung" className="btn btn-danger col-sm-8 my-1" onClick={this.click}>Hitung</button>
            <h4><b>Hasil</b></h4>
            <div class="alert alert-secondary alert-dismissible fade show text-left" role="alert" >
            Rp.{this.state.hasil}
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
