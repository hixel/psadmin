"use strict";

var React = require('react');

var AuthorList = React.createClass({

	propTypes: {

		authors: React.PropTypes.array.isRequired
	},

	render: function() {

		var createAuthorRow = function(author) {

			return (
				<tr key={author.ID}>
					<td>
						<a href={"/#authors/" + author.id}>{author.id}</a>
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