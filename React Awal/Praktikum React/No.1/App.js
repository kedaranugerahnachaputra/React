import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      berat: "",
      tinggi: "",
      hasil: ""
    }
  }
  changeberat = (event) => {
    this.setState({ berat: event.target.value });
  }
  changetinggi = (event) => {
    this.setState({ tinggi: event.target.value });
  }
  click = (event) => {
    this.bmi = this.state.berat / (this.state.tinggi ** 2)
    this.state.hasil= ""
    if (this.bmi >= 30) {
      this.setState({hasil:'Kegemukan(Obesitas)'});
    }
    else if (this.bmi < 30 && this.bmi >= 25) {
      this.setState({hasil:'Kelebihan Berat Badan'});
    }
    else if (this.bmi < 25 && this.bmi >= 18.5) {
      this.setState({hasil:'Normal'});
    }
    else {
      this.setState({hasil:'Kekurangan Berat Badan'});
    }
  }
  render() {
    return (
      <div className="App container col-sm-4">
        <div className="alert alert-secondary">
          <h3>Body Mass Index</h3>
        </div>
        <div className="row my-1 justify-content-center text-center">
          <h5 className="text-left col-sm-3">Berat</h5>
          <input type="text" className="form-control col-sm-6" name="berat" value={this.state.berat} onChange={this.changeberat} />
        </div>
        <div className="row justify-content-center text-center">
          <h5 className="text-left col-sm-3">Tinggi</h5>
          <input type="text" className="form-control col-sm-6" name="tinggi" value={this.state.tinggi} onChange={this.changetinggi} />
        </div>
        <hr />
        <div className="justify-content-center text-center">
          <div>
            <button type="button" name="hitung" className="btn btn-info col-sm-8 my-1" onClick={this.click}>Hitung</button>
            <h4><b>Hasil</b></h4>
            <div class="alert alert-success alert-dismissible fade show text-left" role="alert" >
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
