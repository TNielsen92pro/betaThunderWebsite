import React from 'react';
import Iframe from 'react-iframe';
import Header from './header/header';
import Member from './member/member';
import { List } from 'immutable';

import './App.scss';

const members = List([{
  'name': 'Joakim',
  'contributions':
    <ul>
      <li>Team leader</li>
      <li>Main VR programmer</li>
      <li>Gameplay programmer</li>
      <li>Shader developer</li>
      <li>Website developer</li>
    </ul>,
  'others': 'lorem ipsum others',
},
{
  'name': 'Gustav',
  'contributions':
    <ul>
      <li>Head of Advanced Graphics Research</li>
      <li>Game scripting</li>
    </ul>,
  'others': 'lorem ipsum others'
},
{
  'name': 'Emil',
  'contributions':
    <ul>
      <li>Head of Android Programming</li>
      <li>Cross-Platform Networking</li>
      <li>Gameplay Developer</li>
    </ul>,
  'others': 'lorem ipsum others'
},
{
  'name': 'Daniel',
  'contributions':
    <ul>
      <li>Modelling and texturing</li>
      <li>Programming traps and destructible objects</li>
      <li>Communication leader</li>
    </ul>,
  'others': 'lorem ipsum others'
},
{
  'name': 'Timmy',
  'contributions':
    <ul>
      <li>Presentation leader</li>
      <li>VR programmer</li>
      <li>VR tester</li>
      <li>Gameplay and interaction</li>
      <li>Website developer</li>
    </ul>,
  'others': 'lorem ipsum others'
},
{
  'name': 'Simon',
  'contributions':
    <ul>
      <li>Gameplay and feature programming</li>
      <li>Networking and Multiplayer implementation</li>
      <li>Android developer</li>
    </ul>,
  'others': 'lorem ipsum others'
},
]);

function App() {
  return (
    <div className="App">
      <Header />
      <div className={'memberWrapper'}>
        {members.map((member, index) => {
          return (
            <Member
              name={member.name}
              contributions={member.contributions}
            />
          )
        })}
      </div>
      <div className={'video'}>
        <p className={'videoLabel'}>Project demo</p>
        <Iframe url="https://www.youtube.com/embed/RueNdJamGIY"
          width="700px"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative" />
      </div>
      <h1 className={'headerText'}>DESCRIPTION OF PROJECT</h1>

      <div className={'informationDiv'}>
        <div className={'textRow'}>
          <div className={'textColumn'}>
            <h2 className={'infoText'}>Goal and motivation of the project</h2>
            <p className={'infoText miniText'}>
              The project explores new ideas in asymmetric multiplayer games with focus on incorporating multiple paradigms of interaction, such as VR and mobile touch controls.
              The goal is to create a new experience of interaction and graphics by combining state of the art techniques. We aim on creating a new and interesting experience that will immerse both players in a battle of grit and crucial decision-making whilst also retaining replayability. One player will use a VR headset with controls and fight through a dungeon, trying to reach the end. The other player will use a mobile device to place enemies and activate traps to stop the VR player at any cost, this creates a truly unique gameplay experience every time.
            </p>
          </div>
          <div className={'textColumn'}>
            <h2 className={'infoText'}>Graphics and interaction technologies used</h2>
            <p className={'infoText miniText'}>
              We decided to use Unity as the game engine driving the project. The reason for the decision is that Unity is well documented and compatible with the technology we wanted to use. The VR setup used is mainly HTC Vive 2, the choice was simply a matter of what was available at the time.
              Our idea was always to make a game that is played with at least two people. For the game we created, using a phone/tablet as a second screen where a player can interfere with the VR player was the best fit for making our game multiplayer. At the end, it turned out to be really fun as well.
              Overall we have used free available assets to quickly create a dungeon and enemies and focused on doing other graphics implementations by ourselves for specific effects such as sword trail, spawning of enemies, laser, fireball etc.
            </p>
          </div>
        </div>
        <div className={'textRow'}>
          <div className={'textColumn'}>
            <h2 className={'infoText'}>Challenges & Obstacles</h2>
            <p className={'infoText miniText'}>
              The main challenges of our project was to have the game fully synchronized between the VR and the mobile player to minimize lag.
              Another challenge was to create some nice looking graphics to use in the game that was created by us.
              Creating a multiplayer session between two different platforms that run the game turned a real challenge and caused some problems during development. The problems mostly occur because we are several people working on the same files trying to improve the game at the same time.
              Another obstacle that we had was working with Unity and Git as it cause some merge conflicts but these were always easy to solve, just tiresome.

            </p>
          </div>
        </div>

        <div className={'textRow'}>
          <div className={'textColumn'}>
            <h2 className={'infoText'}>Related work</h2>
            <div className={'relatedWork'}>
              <div className={'relatedCol longImgDiv'}>
                <img className={'relatedImg longImg'} alt={''} src={'https://lh4.googleusercontent.com/B2wv_Q8YZOpJ_G2mujylJ6YWNRNL12qlrdsSyWysTYFxyoEoqpzWXi5_M-MtDw3yeh3cl2RslvgbXvkI065uEU6XvwNH8DFxvJY7lkxlaFSAp5sLrsVqZTKeUYQI8_YY5lR-FYt3'} />
              </div>
              <div className={'relatedCol'}>
                Cross-platform Application Development using Unity Game Engine<br />
                Pratik P. Patil, Ronald Alvares<br />
                2015
                <img className={'relatedImg'} alt={''} src={'https://lh4.googleusercontent.com/-dFfNiQO4BuLSfzVsAE3JWFjjIUCh5q4bX1iV3FRMDvboB-hLQqNuSMirSiq5AkbwvDpLgU9Rfr7yBcV433odXZHv4vCgR_PrpJAO_tF2K-jnQdKF_QOAu-wmPoTYCpj30dGmcwRM04'} />
              </div>
            </div>
            <div className={'relatedWork'}>
              <div className={'relatedCol longImgDiv'}>
                <img className={'book'} alt={''} src={'https://lh4.googleusercontent.com/PcqxGW0-n1_iCzhu-XS-S2Ov7hn_VMPEfcd8QIgiQ35MuMwGmg9DUYeEF_I1q_ugl0Is5r5EEUs3JLGuk76z3ApAMNWTTcW6-i5YK97F'} />
              </div>
              <div className={'relatedCol small'}>
                Understanding Virtual Reality<br />
                William R. Sherman and Alan B. Craig<br />
                2018
              </div>
            </div>
          </div>
          <div className={'textColumn'}>
            <h2 className={'infoText'}>Lessons learned</h2>
            <p className={'infoText miniText split'}>
              Using Git as version control for a Unity project can be troublesome and cause difficult merge conflicts. It has worked out for us in the end but it has caused some problems during the development and also during presentation.
              Our main take-away from the networking part is that it isn’t worth trying to reinvent the wheel. We briefly tried using a low-level API from unity for the cross-platform networking. Networking is a lot more complex than we thought and it isn’t worth trying to learn how to do it if you don’t need to for the project.
            </p>
            <h2 className={'infoText'}> User testimonials (what did people say?):</h2>
            <p className={'infoText miniText'}>
              <p className={'testimonial'}>“I thought it was really fun and I am interested in how it will develop in the future!”</p><br />
              <p className={'testimonial'}>“Wow! I spawned an orc that killed my friend!”</p><br />
              <p className={'testimonial'}>“This is actually really fun!”</p><br />
              <p className={'testimonial'}>“This project is already at an A-level”</p>
            </p>
          </div>
        </div>
      </div>
      <div className={'video'}>
        <p className={'videoLabel'}>Watch a short documentary of the project process below</p>
        <Iframe url="https://www.youtube.com/embed/bxMp1A_O6nA"
          width="700px"
          height="450px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative" />
      </div>
    </div >
  );
}

export default App;
