"use strict";

var React = require('react');

var SelectAuthor = React.createClass({

    render: function() {

        var wrapperClass = 'form-group';
		if (this.props.error && this.props.error.length > 0) {
			wrapperClass += " " + 'has-error';
		}

        var createSelectRow = function (author) {

            return (

                <option>{author.firstName + ' ' + author.lastName}</option>
            );
        }

		return (
			<div className={wrapperClass}>
				<label htmlFor={this.props.name}>{this.props.label}</label>
				<div className="field">

                    <select className="form-control">
                        <option></option>
                        {this.props.authors.map(createSelectRow, this)}
                    </select>

					<div className="input">{this.props.error}</div>
				</div>
			</div>
		);
    }
});

module.exports = SelectAuthor;