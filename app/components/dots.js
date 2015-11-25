import React from 'react';
import dynamics from 'dynamics.js'

const Dots = React.createClass({
	componentDidMount() {
		setTimeout(() => {
			this.animateLoading();
			this.animateDot11();
			this.animateDot21();
			this.animateDot31();
			this.animateDot41();
		}, 1000)
	},

	animateLoading() {
		let loading = document.getElementById('loading');
		dynamics.animate(loading, {
			opacity: 1,
		}, {
			type: dynamics.bounce,
			duration: 2000,
			frequency: 63,
			friction: 37,
			complete: this.animateLoading
		})
	},

	animateDots() {
		let dot = document.querySelector('.dot')
		let cont = document.querySelector('.dot-container')
	},

	animateDot11() {
		let dot = document.querySelectorAll('.dot')
		let cont = document.querySelectorAll('.dot-container')
		dynamics.animate(dot[0], {
			translateY: 100,
		}, {
			type: dynamics.forceWithGravity,
			duration: 1500,
			bounciness: 200,
			elasticity: 50
		})
		dynamics.animate(cont[0], {
			translateX: 150,
		}, {
			type: dynamics.linear,
			duration: 1500,
			complete: this.animateDot12
		})
	},

	animateDot12() {
		let cont = document.querySelectorAll('.dot-container')
		dynamics.animate(cont[0], {
			translateX: 100,
		}, {
			type: dynamics.easeInOut,
			duration: 1000,
			delay: 500,
			complete: this.animateDot13
		})
	},

	animateDot13() {
		let cont = document.querySelectorAll('.dot-container')
		dynamics.animate(cont[0], {
			translateX: 50,
		}, {
			type: dynamics.easeInOut,
			duration: 1100,
			delay: 400,
			complete: this.animateDot14
		})
	},

	animateDot14() {
		let cont = document.querySelectorAll('.dot-container')
		dynamics.animate(cont[0], {
			translateX: 0,
		}, {
			type: dynamics.easeInOut,
			duration: 1200,
			delay: 300,
			complete: this.animateDot11
		})
	},

	animateDot21() {
		let cont = document.querySelectorAll('.dot-container')
		dynamics.animate(cont[1], {
			translateX: -50,
		}, {
			type: dynamics.linear,
			duration: 1200,
			delay: 300,
			complete: this.animateDot22
		})
	},

	animateDot22() {
		let dot = document.querySelectorAll('.dot')
		let cont = document.querySelectorAll('.dot-container')
		dynamics.animate(dot[1], {
			translateY: 100,
		}, {
			type: dynamics.forceWithGravity,
			duration: 1500,
			bounciness: 200,
			elasticity: 50
		})
		dynamics.animate(cont[1], {
			translateX: 100,
		}, {
			type: dynamics.easeInOut,
			duration: 1500,
			complete: this.animateDot23
		})
	},

	animateDot23() {
		let cont = document.querySelectorAll('.dot-container')
		dynamics.animate(cont[1], {
			translateX: 50,
		}, {
			type: dynamics.easeInOut,
			duration: 1000,
			delay: 500,
			complete: this.animateDot24
		})
	},

	animateDot24() {
		let cont = document.querySelectorAll('.dot-container')
		dynamics.animate(cont[1], {
			translateX: 0,
		}, {
			type: dynamics.easeInOut,
			duration: 1100,
			delay: 400,
			complete: this.animateDot21
		})
	},
	
	animateDot31() {
		let cont = document.querySelectorAll('.dot-container')
		dynamics.animate(cont[2], {
			translateX: -50,
		}, {
			type: dynamics.linear,
			duration: 1100,
			delay: 400,
			complete: this.animateDot32
		})
	},

	animateDot32() {
		let cont = document.querySelectorAll('.dot-container')
		dynamics.animate(cont[2], {
			translateX: -100,
		}, {
			type: dynamics.easeInOut,
			duration: 1200,
			delay: 300,
			complete: this.animateDot33
		})
	},

	animateDot33() {
		let dot = document.querySelectorAll('.dot')
		let cont = document.querySelectorAll('.dot-container')
		dynamics.animate(dot[2], {
			translateY: 100,
		}, {
			type: dynamics.forceWithGravity,
			duration: 1500,
			bounciness: 200,
			elasticity: 50
		})
		dynamics.animate(cont[2], {
			translateX: 50,
		}, {
			type: dynamics.easeInOut,
			duration: 1500,
			complete: this.animateDot34
		})
	},

	animateDot34() {
		let cont = document.querySelectorAll('.dot-container')
		dynamics.animate(cont[2], {
			translateX: 0,
		}, {
			type: dynamics.easeInOut,
			duration: 1000,
			delay: 500,
			complete: this.animateDot31
		})
	},

	animateDot41() {
		let cont = document.querySelectorAll('.dot-container')
		dynamics.animate(cont[3], {
			translateX: -50,
		}, {
			type: dynamics.linear,
			duration: 1000,
			delay: 500,
			complete: this.animateDot42
		})
	},

	animateDot42() {
		let cont = document.querySelectorAll('.dot-container')
		dynamics.animate(cont[3], {
			translateX: -100,
		}, {
			type: dynamics.easeInOut,
			duration: 1100,
			delay: 400,
			complete: this.animateDot43
		})
	},

	animateDot43() {
		let cont = document.querySelectorAll('.dot-container')
		dynamics.animate(cont[3], {
			translateX: -150,
		}, {
			type: dynamics.easeInOut,
			duration: 1200,
			delay: 300,
			complete: this.animateDot44
		})
	},

	animateDot44() {
		let dot = document.querySelectorAll('.dot')
		let cont = document.querySelectorAll('.dot-container')
		dynamics.animate(dot[3], {
			translateY: 100,
		}, {
			type: dynamics.forceWithGravity,
			duration: 1500,
			bounciness: 200,
			elasticity: 50
		})
		dynamics.animate(cont[3], {
			translateX: 0,
		}, {
			type: dynamics.easeInOut,
			duration: 1500,
			complete: this.animateDot41
		})
	},

	render() {
		return (
			<div className="dots">
				<h1 id='loading'>Loading</h1>
				<div className="dots-container">
					<div className="dot-container">
						<div className="dot"></div>
					</div>
					<div className="dot-container">
						<div className="dot"></div>
					</div>
					<div className="dot-container">
						<div className="dot"></div>
					</div>
					<div className="dot-container">
						<div className="dot"></div>
					</div>
				</div>
			</div>
		)
	}
})

export default Dots;