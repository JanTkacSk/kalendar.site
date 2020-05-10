import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import SignIn from './components/SignIn/SignIn.js';
import SignUp from './components/SignUp/SignUp.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Particles from 'react-particles-js';
import Rank from './components/Rank/Rank.js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'

const app = new Clarifai.App({
  apiKey: '0dd483b0a2f14d2f8a6ddf375a9396a1'
 });

const particlesParams = {
  "particles": {
      "number": {
          "value": 60,
          "density": {
            "enable": true,
            "value_area": 800

          }
      },
      "size": {
          "value": 2
      }
  }
}

class App extends Component {

  constructor(){
    super();
    this.state = {
      input:'',
      imageUrl:'',
      box: {},
      route: 'SignIn',
      IsSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        password: '',
        entries:'',
        joined: ''

    }
    }
  }

  loadUser = (user) => {

    this.setState({
      user: {
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          entries:user.entries,
          joined: user.joined
        }
      })
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});

  }

  calculateFaceLocation = (data) => {
   const clarifaiFace =  data.outputs[0].data.regions[0].region_info.bounding_box;
   const image = document.getElementById('inputimage');
   const width = Number(image.width);
   const height = Number(image.height);
   console.log(width, height, clarifaiFace);
   return{
       leftCol: clarifaiFace.left_col * width,
       topRow: clarifaiFace.top_row * height,
       rightCol: width - (clarifaiFace.right_col * width),
       bottomRow: height - (clarifaiFace.bottom_row * height)
     }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onButtonSubmitF = () => {
    this.setState({imageUrl:this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
    fetch('http://localhost:3000/image',{
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        id: this.state.user.id
        })
      })
    .then(response => response.json())
    .then(count => {
      this.setState(Object.assign(this.state.user,{entries: count}))
      // console.log(count);
    })
  }

  onRouteChangeF =  (route) => {
    if (route === 'SignIn'){
      this.setState({IsSignedIn: false});
    } else if (route === 'Home') {
      this.setState({IsSignedIn: true});
    }
    this.setState({route: route});
    

  }


  render(){

    return (
      <div className="App">
  
        <Particles
        className = "particles"
        params={particlesParams} />
        <Navigation IsSignedIn={this.state.IsSignedIn}  onRouteChange = {this.onRouteChangeF}/>
        
         { 

        this.state.route === 'Home' ?  
        <div> 
        <Logo />
        <Rank name={this.state.user.name} entries={this.state.user.entries}/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmitF} />
        <FaceRecognition Box={this.state.box} ImageUrl={this.state.imageUrl} />
        </div>
        
        : (
          this.state.route === 'SignIn' ? <SignIn loadUser = {this.loadUser} onRouteChange={this.onRouteChangeF}/>
          : <SignUp loadUser = {this.loadUser} onRouteChange={this.onRouteChangeF}/>          
          )
            

         }
      </div>
    );
  

  }
  
}

export default App;
