"use strict";

var React = require('react');
var AuthorStore = require('../../stores/authorStore'); 

var SelectAuthor = React.createClass({

    render: function() {

        var wrapperClass = 'form-group';
		if (this.props.error && this.props.error.length > 0) {
			wrapperClass += " " + 'has-error';
		}

        var createSelectRow = function (author) {

            var selected = {};
            if (this.props.author && 
                author.id === this.props.author.id) {

                selected.selected = 'selected';
            }

            return (

                <option {...selected} value={author.id}>
                    {author.firstName + ' ' + author.lastName}
                </option>
            );
        };

		return (

			<div className={wrapperClass}>
				<label htmlFor={this.props.name}>{this.props.label}</label>
				<div className="field">

                    <select className="form-control" 
                        onChange={this.props.onChange}
                        name={this.props.name}>
                        <option></option>
                        {AuthorStore.getAllAuthors().map(createSelectRow, this)}
                    </select>

					<div className="input">{this.props.error}</div>
				</div>
			</div>
		);
    }
});

module.exports = SelectAuthor;