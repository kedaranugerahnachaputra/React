import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      biner: "",
      pilbiner: "",
      hasilbiner: "",
      oktal: "",
      piloktal: "",
      hasiloktal: "",
      decimal: "",
      pildecimal: "",
      hasildecimal: "",
      hexadecimal: "",
      pilhexadecimal: "",
      hasilhexadecimal: ""
    }
  }
  changebiner = (event) => {
    this.setState({ biner: event.target.value });
  }
  changepilbiner = (event) => {
    this.setState({ pilbiner: event.target.value });
  }
  changeoktal = (event) => {
    this.setState({ oktal: event.target.value });
  }
  changepiloktal = (event) => {
    this.setState({ piloktal: event.target.value });
  }
  changedecimal = (event) => {
    this.setState({ decimal: event.target.value });
  }
  changepildecimal = (event) => {
    this.setState({ pildecimal: event.target.value });
  }
  changehexadecimal = (event) => {
    this.setState({ hexadecimal: event.target.value });
  }
  changepilhexadecimal = (event) => {
    this.setState({ pilhexadecimal: event.target.value });
  }
  bin = (event) => {
    this.state.hasilbiner = ""
    if (this.state.pilbiner === "Oktal") {
      this.biner = parseInt(this.state.biner, 2).toString(8)
      this.setState({ hasilbiner: this.biner });
    }
    else if (this.state.pilbiner === "Decimal") {
      this.biner = parseInt(this.state.biner, 2)
      this.setState({ hasilbiner: this.biner });
    }
    else if (this.state.pilbiner === "Hexadecimal") {
      this.biner = parseInt(this.state.biner, 2).toString(16)
      this.setState({ hasilbiner: this.biner });
    }
    else {
      this.setState({ hasilbiner: "Pilih salah satu operasi" });
    }
  }
  okt = (event) => {
    this.state.hasiloktal = ""
    if (this.state.piloktal === "Biner") {
      this.oktal = parseInt(this.state.oktal, 8).toString(2)
      this.setState({ hasiloktal: this.oktal });
    }
    else if (this.state.pilbiner === "Decimal") {
      this.oktal = parseInt(this.state.oktal, 8)
      this.setState({ hasiloktal: this.oktal });
    }
    else if (this.state.pilbiner === "Hexadecimal") {
      this.oktal = parseInt(this.state.oktal, 8).toString(16)
      this.setState({ hasiloktal: this.oktal });
    }
    else {
      this.setState({ hasiloktal: "Pilih salah satu operasi" });
    }
  }
  dec = (event) => {
    this.state.hasildecimal = ""
    if (this.state.pildecimal === "Biner") {
      this.decimal = parseInt(this.state.decimal).toString(2)
      this.setState({ hasildecimal: this.decimal });
    }
    else if (this.state.pildecimal === "Oktal") {
      this.decimal = parseInt(this.state.decimal).toString(8)
      this.setState({ hasildecimal: this.decimal });
    }
    else if (this.state.pildecimal === "Hexadecimal") {
      this.decimal = parseInt(this.state.decimal).toString(16)
      this.setState({ hasildecimal: this.decimal });
    }
    else {
      this.setState({ hasildecimal: "Pilih salah satu operasi" });
    }
  }
  hex = (event) => {
    this.state.hasilhexadecimal = ""
    if (this.state.pilhexadecimal === "Biner") {
      this.hexadecimal = parseInt(this.state.hexadecimal,16).toString(2)
      this.setState({ hasilhexadecimal: this.hexadecimal });
    }
    else if (this.state.pilhexadecimal === "Oktal") {
      this.hexadecimal = parseInt(this.state.hexadecimal,16).toString(8)
      this.setState({ hasilhexadecimal: this.hexadecimal });
    }
    else if (this.state.pilhexadecimal === "Decimal") {
      this.hexadecimal = parseInt(this.state.hexadecimal,16)
      this.setState({ hasilhexadecimal: this.hexadecimal });
    }
    else {
      this.setState({ hasilhexadecimal: "Pilih salah satu operasi" });
    }
  }
  render() {
    return (
      <div className="App container col-sm-4">
        <div className="alert alert-danger">
          <h3>Konversi Bilangan Biner</h3>
        </div>
        <div className="row my-1">
          <h5 className="text-left col-sm-3">Biner</h5>
          <input type="text" className="form-control" name="nominal" value={this.state.biner} onChange={this.changebiner} />
        </div>
        <div className="row">
          <h5 className="text-left col-sm-3">Pilihan Konversi</h5>
          <select type="text" className="form-control" name="Periode" value={this.state.pilbiner}
            onChange={this.changepilbiner}>
            <option value="-">-</option>
            <option value="Decimal">Decimal</option>
            <option value="Oktal">Oktal</option>
            <option value="Hexadecimal">Hexadecimal</option>
          </select>
        </div>
        <hr />
        <div className="justify-content-center text-center">
          <div>
            <button type="button" name="hitung" className="btn btn-danger col-sm-8 my-1" onClick={this.bin}>Convert</button>
            <div class="alert alert-secondary alert-dismissible fade show text-left my-3" role="alert" >
              {this.state.hasilbiner}
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="alert alert-danger">
          <h3>Konversi Bilangan Oktal</h3>
        </div>
        <div className="row my-1">
          <h5 className="text-left col-sm-3">Oktal</h5>
          <input type="text" className="form-control" name="nominal" value={this.state.oktal} onChange={this.changeoktal} />
        </div>
        <div className="row">
          <h5 className="text-left col-sm-3">Pilihan Konversi</h5>
          <select type="text" className="form-control" name="Periode" value={this.state.piloktal}
            onChange={this.changepiloktal}>
            <option value="-">-</option>
            <option value="Decimal">Decimal</option>
            <option value="Biner">Biner</option>
            <option value="Hexadecimal">Hexadecimal</option>
          </select>
        </div>
        <hr />
        <div className="justify-content-center text-center">
          <div>
            <button type="button" name="convert" className="btn btn-danger col-sm-8 my-1" onClick={this.okt}>Convert</button>
            <div class="alert alert-secondary alert-dismissible fade show text-left my-3" role="alert" >
              {this.state.hasiloktal}
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="alert alert-danger">
          <h3>Konversi Bilangan Decimal</h3>
        </div>
        <div className="row my-1">
          <h5 className="text-left col-sm-3">Decimal</h5>
          <input type="text" className="form-control" name="nominal" value={this.state.decimal} onChange={this.changedecimal} />
        </div>
        <div className="row">
          <h5 className="text-left col-sm-3">Pilihan Konversi</h5>
          <select type="text" className="form-control" name="Periode" value={this.state.pildecimal}
            onChange={this.changepildecimal}>
            <option value="-">-</option>
            <option value="Oktal">Oktal</option>
            <option value="Biner">Biner</option>
            <option value="Hexadecimal">Hexadecimal</option>
          </select>
        </div>
        <hr />
        <div className="justify-content-center text-center">
          <div>
            <button type="button" name="convert" className="btn btn-danger col-sm-8 my-1" onClick={this.dec}>Convert</button>
            <div class="alert alert-secondary alert-dismissible fade show text-left my-3" role="alert" >
              {this.state.hasildecimal}
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="alert alert-danger">
          <h3>Konversi Bilangan Hexadecimal</h3>
        </div>
        <div className="row my-1">
          <h5 className="text-left col-sm-3">Hexadecimal</h5>
          <input type="text" className="form-control" name="nominal" value={this.state.hexadecimal} onChange={this.changehexadecimal} />
        </div>
        <div className="row">
          <h5 className="text-left col-sm-3">Pilihan Konversi</h5>
          <select type="text" className="form-control" name="Periode" value={this.state.pilhexadecimal}
            onChange={this.changepilhexadecimal}>
            <option value="-">-</option>
            <option value="Oktal">Oktal</option>
            <option value="Biner">Biner</option>
            <option value="Decimal">Decimal</option>
          </select>
        </div>
        <hr />
        <div className="justify-content-center text-center">
          <div>
            <button type="button" name="convert" className="btn btn-danger col-sm-8 my-1" onClick={this.hex}>Convert</button>
            <div class="alert alert-secondary alert-dismissible fade show text-left my-3" role="alert" >
              {this.state.hasilhexadecimal}
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
