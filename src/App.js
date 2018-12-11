import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <body>
    <div className="container text center-p">
      <nav class="navbar navbar-expand-lg navbar-lg blue"
       class="form-inline my-2 my-lg-0 cari"/><form>
         <center>
      <input class="form-control mr-sm-2" type="search" 
      placeholder="Ketik Nama Anda" 
      aria-label="Search"
       text="Ketik Nama Anda"/>
       </center>
       <center>
       <h3 class="mt-4"></h3>
      <button class="btn btn-outline-success my-5 my-sm-0" 
      type="submit">Buat Profil Picture</button>  
      </center>
      </form> 
      <div class="row">
      <div class="col-4 p-0 text center">
      <a href="#"></a>
      <div class="row">
          <div class= "col-4 p-0 img">
          </div>

      </div>
      </div>
      </div>
      </div>
      </body>  
      
    );
  }
}

export default App;
