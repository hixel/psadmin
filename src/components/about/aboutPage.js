"use strict";

var React = require('react');

var About = React.createClass({

	render: function() {

		return (
			<div>
				<h1>About</h1>
				<p>
					Techlogies:
					<ul>
						<li>React</li>
						<li>Bootstrap</li>
						<li>Gulp</li>
					</ul>
				</p>
			</div>
		);
	}
});

module.exports = About;