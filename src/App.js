import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ToggleButton from 'react-toggle-button';
import nevermind from './assets/audio/Nevermind.mp3';
import familiar from './assets/audio/Familiar.mp3';
import redbone from './assets/audio/Redbone.mp3';
import { useLocation } from 'react-router-dom';

import pause from './assets/image/pause.svg';
import play from './assets/image/play-button.svg';
import playDark from './assets/image/play-button-dark.svg';
import pauseDark from './assets/image/pause-button-dark.svg';
import zerg from './assets/image/zerg.png';
import { Howl, Howler } from "howler";
import { BrowserRouter as Router, Link, Route, Switch, } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Link as CustomLink } from './components/Link';


class App extends React.Component {

  constructor(props) {
    super(props);
    // this.soundAutoPlay(nevermind);
    // let location = useLocation();
    this.state = {
      title: 'Ilyes Portfolio',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Full stack developer',
        text: 'Check my projects below'
      },
      about: {
        title: 'CV',
      },
      contact: {
        title: 'Contact',
      },
      darkmode: true,
    }
  }

  musicOn;
  currentSong;
  soundId;
  saveSeek;
  soundAutoPlay = (src) => {
    Howler.stop();
    const sound = new Howl({
      src
    })
    this.currentSong = sound;
    sound.play();
    this.soundId = sound.play(/* Nothing here because it's default*/)
    Howler.volume(0.1);
    console.log(this.currentSong);

  }

  soundPlay = (src) => {
    this.musicOn = true;
    if (this.currentSong) {
      this.currentSong.play(this.soundId);
      this.currentSong.seek(this.saveSeek, this.currentSong);
    } else {
      this.soundAutoPlay(nevermind);
    }
  }

  soundPause = (src) => {
    this.musicOn = false;
    this.currentSong.pause();
    this.saveSeek = this.currentSong.seek(this.soundId);
  }



  // audioClips = [
  //   { sound: nevermind, label: 'Nevermind' },
  //   { sound: familiar, label: 'Familiar' },
  //   { sound: redbone, label: 'Redbone' }
  // ]
  // RenderButtonAndSound = () => {
  //   return audioClips.map((soundObj, index) => {
  //     return (
  //       <button key={index} onClick={() => this.soundPlay(soundObj.sound)}>
  //         {soundObj.label}
  //       </button>
  //     )
  //   })
  // }

  render() {
    let linkClass;
    let darkText;
    let playButton = play;
    let pauseButton = pause;
    if (this.state.darkmode) {
      linkClass = 'dark-mode-link';
      darkText = 'dark-text';
      playButton = playDark;
      pauseButton = pauseDark;
    }
    return (
      < Router >
        <Container className={this.state.darkmode ? "dark-mode" : "light-mode"} fluid={true}>
          <Navbar className="sticky-top " bg="transparent" expand="lg">
            <div>
              <Navbar.Brand className={darkText + " starcraft-font"}><img src={zerg} className="zerg-logo" alt="zerg" />Ilyes Satouri</Navbar.Brand>
              <div className="d-flex">
                <p className="mr-3 my-auto">Music:</p>
                <img src={playButton} className="music-button dark-mode-link" onClick={() => this.soundPlay()} alt="play"></img>
                <img src={pauseButton} className="music-button" onClick={() => this.soundPause()} alt="pause"></img>
              </div>
              <div className="d-flex">
                <p className="mr-3 my-auto">Dark Mode: </p>
                <ToggleButton
                  value={this.state.darkmode}

                  onToggle={(value) => {
                    this.setState({
                      // darkmode: !value,
                      darkmode: !this.state.darkmode,

                    })
                    this.forceUpdate();
                  }} />

              </div>
            </div>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className={linkClass + " nav-link nav-item starcraft-font"} to="/" onClick={() => { this.musicOn ? this.soundAutoPlay(nevermind) : this.musicOn = false }}>Home</Link>
                <Link className={linkClass + " nav-link nav-item starcraft-font"} to="/about" onClick={() => { this.musicOn ? this.soundAutoPlay(familiar) : this.musicOn = false }}>CV</Link>
                <Link className={linkClass + " nav-link nav-item starcraft-font"} to="/contact" onClick={() => { this.musicOn ? this.soundAutoPlay(redbone) : this.musicOn = false }}>Contact</Link>


              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} darkmode={this.state.darkmode} />}></Route>
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text} darkmode={this.state.darkmode} />}></Route>
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text} darkmode={this.state.darkmode} />}></Route>
          <Footer darkmode={this.state.darkmode} />
        </Container>
      </Router >
    )
  }
}

export default App;
