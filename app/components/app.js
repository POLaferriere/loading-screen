import React from 'react';
import { IndexLink } from 'react-router';
import $ from 'jquery';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import dynamics from 'dynamics.js';

var App = React.createClass({
  // componentWillMount() {
  //   $.ajax({
  //     headers: {
  //       'X-Parse-Application-Id': 'LomjuWXwGTl997odu05M1tcaRiH4NUxPVMBLwhAX',
  //       'X-Parse-REST-API-Key': 'UkSKlYbpVzeb1Qo2in5z9m8Wp4NbSyRPoHwDKWLc',
  //     },
  //     url: 'https://api.parse.com/1/classes/Trivia',
  //     method: 'GET',
  //     complete: setTimeout(() => {this.setState({loading: false})})
  //   })
  // },

  componentDidMount() {
    this.animateDots();
  },

  animateDots() {
    let dots = document.querySelectorAll('.dot');
    dynamics.animate(document.querySelector('.dots'), {
      rotateZ: 180,
    }, {
      type: dynamics.easeInOut,
      duration: 3000,
      complete: () => {
        dynamics.animate(document.querySelector('.dots'), {
          rotateZ: 360,
        }, {
          type: dynamics.easeInOut,
          duration: 3000,
        })
      }
    })
    dynamics.animate(dots[0], {
      translateX: 45,
    }, {
      type: dynamics.easeInOut,
      duration: 3000,
      complete: () => {
        dynamics.animate(dots[0], {
          translateX: 0,
        }, {
          type: dynamics.easeInOut,
          duration: 3000,
        })
      }
    })
    dynamics.animate(dots[1], {
      translateX: 15,
    }, {
      type: dynamics.easeInOut,
      duration: 3000,
      complete: () => {
        dynamics.animate(dots[1], {
          translateX: 0,
        }, {
          type: dynamics.easeInOut,
          duration: 3000,
        })
      }
    })
    dynamics.animate(dots[2], {
      translateX: -15,
    }, {
      type: dynamics.easeInOut,
      duration: 3000,
      complete: () => {
        dynamics.animate(dots[2], {
          translateX: 0,
        }, {
          type: dynamics.easeInOut,
          duration: 3000,
        })
      }
    })
    dynamics.animate(dots[3], {
      translateX: -45,
    }, {
      type: dynamics.easeInOut,
      duration: 3000,
      complete: () => {
        dynamics.animate(dots[3], {
          translateX: 0,
        }, {
          type: dynamics.easeInOut,
          duration: 3000,
        })
      }
    })
  },

  getInitialState() {
    return {
      loading: true,
    }
  },

  render() {
    return (
      <div className='loading-screen'>
        <ReactCSSTransitionGroup
          transitionName='loading'
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          
          {this.state.loading && 
          <div className="loading">
            <h1 key={1}>Loading</h1>
            <ul className="dots">
              <li className="dot"></li>
              <li className="dot"></li>
              <li className="dot"></li>
              <li className="dot"></li>
            </ul>
          </div> }

          {!this.state.loading &&
          <h1 key={2}>Is Loaded</h1>}

      </ReactCSSTransitionGroup>
      </div>
    )
  }
});

export default App;
