"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');

var AuthorList = React.createClass({

	propTypes: {

		authors: React.PropTypes.array.isRequired
	},

	deleteAuthor: function(id, event) {

		event.preventDefault();
		AuthorActions.deleteAuthor(id);
		toastr.success('Author delete');
	},

	render: function() {

		var createAuthorRow = function(author) {

			return (
				<tr key={author.Id}>
					<td>
						<a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>
							Delete
						</a>
					</td>
					<td>
						<Link to="manageAuthor" 
							params={{id: author.id}}>{author.id}</Link>
					</td>
					<td>
						{author.firstName} {author.lastName}
					</td>
				</tr>
			);
		};

		return (
			<table className="table">
				<thead>
					<td></td>
					<td>ID</td>
					<td>Name</td>
				</thead>
				<tbody>
					{this.props.authors.map(createAuthorRow, this)}
				</tbody>
			</table>
		);
	}
});

module.exports = AuthorList;