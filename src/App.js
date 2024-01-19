import React, { Component } from 'react';
import './App.css';
import Media from './Components/media';
import Osis from './Components/form';

class App extends Component {
  render(){
    return(
      <header>
        <div className='title'>PANCASILA</div>
        <br></br>
        <div className='head-text'>
        <div className='text-on-image'>
          <strong>Sila Pertama</strong>
          <br></br>
          Ketuhanan Yang Maha Esa
        </div>
        <Media image='bintang.png'></Media>
        </div>
        
        <div className='head-text'>
        <div className='text-on-image'>
          <strong>Sila Kedua</strong>
          <br></br>
          Kemanusiaan Yang Adil dan Beradap
        </div>
        <Media image='rantai.png'></Media>
        </div>

        <div className='head-text'>
        <div className='text-on-image'>
          <strong>Sila Ketiga</strong>
          <br></br>
          Persatuan indonesia
        </div>
        <Media image='beringin.png'></Media>
        </div>

        <div className='head-text'>
        <div className='text-on-image'>
          <strong>Sila Keempat</strong>
          <br></br>
          Kerakyatan Yang Dipimpin Oleh Hikmad Kebijaksanaan Dalam Permusyawaratan Perwakilan
        </div>
        <Media image='banteng.png'></Media>
        </div>

        <div className='head-text'>
        <div className='text-on-image'>
          <strong>Sila Kelima</strong>
          <br></br>
          Keadilan Sosial Bagi Seluruh Rakyat Indonesia
        </div>
        <Media image='padi dan kapas.png'></Media>
        </div>

        <Osis/>
        <br></br>

      </header>
      
    )
  }
}

export default App;
