"use strict";

var React = require('react');

var About = React.createClass({

	statics: {

		willTransitionTo: function(transition, params, query, callback) {

			if (!confirm('Are you sure?')) {

				transition.abort();
			} else {

				callback();
			}
		},

		willTransitionFrom: function(transition, component) {

			if (!confirm('Are you sure leave a page that?')) {

				transition.abort();
			}
		}
	},

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