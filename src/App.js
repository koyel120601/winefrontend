import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.formRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit called");
    const outputDiv = document.getElementById('output');
    const formData = new FormData(this.formRef.current);
    fetch('https://f558-103-220-208-78.ngrok-free.app', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        outputDiv.innerHTML = data;
      })
      .catch(error => {
        console.error(error);
        outputDiv.innerHTML = "Error: " + error.message;
      });
  }

  render() {
    const { data } = this.state;
  return (
    <div className="App">
      <h1><b>WINE QWALITY PREDICTION :</b></h1>
   
   <div id="input">
        <form  ref={this.formRef} method='POST' onSubmit={this.handleSubmit}>
          <label for="fixed acidity">fixed acidity :  
          <input type="text" id="fixed acidity" name="fixed acidity"/></label>
          <br/>
          <label for="volatile acidity">volatile acidity :  
          <input type="text" id="volatile acidity" name="volatile acidity"/></label>
          <br/>
          <label for="citric acid">citric acid :  
          <input type="text" id="citric acid" name="citric acid"/></label>
          <br/>
          <label for="residual sugar">residual sugar :  
          <input type="text" id="residual sugar" name="residual sugar"/></label>
          <br/>
          <label for="chlorides">chlorides :  
          <input type="text" id="chlorides" name="chlorides"/></label>
          <br/>
          <label for="free sulfur dioxide">free sulfur dioxide :  
          <input type="text" id="free sulfur dioxide" name="free sulfur dioxide"/></label>
          <br/>
          <label for="total sulfur dioxide">total sulfur dioxide :  
          <input type="text" id="total sulfur dioxide" name="total sulfur dioxide"/></label>
          <br/>
          <label for="density">density :  
          <input type="text" id="density" name="density"/></label>
          <br/>
          <label for="pH">pH :  
          <input type="text" id="pH" name="pH"/></label>
          <br/>
          <label for="sulphates">sulphates :  
          <input type="text" id="sulphates" name="sulphates"/></label>
          <br/>
          <label for="alcohol">alcohol :  
          <input type="text" id="alcohol" name="alcohol"/></label>
          <br/>
          <button type="button" onClick={this.handleSubmit}>Submit</button>
          </form>
          </div>
          <div id ="output">
          <p>{data}</p>
          
        
        </div>
      
    </div>
  );

}
}

export default App;
