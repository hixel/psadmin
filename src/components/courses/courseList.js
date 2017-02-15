"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var CourseActions = require('../../actions/courseActions');
var toastr = require('toastr');

var CourseList = React.createClass({

	propTypes: {

		courses: React.PropTypes.array.isRequired
	},

	deleteCourse: function(id, event) {

		event.preventDefault();
		CourseActions.deleteCourse(id);
		toastr.success('Course is delete');
	},

	render: function() {

		var createCourseRow = function(course) {

			return (
				<tr key={course.Id}>
					<td>
						<a href="#" onClick={this.deleteCourse.bind(this, course.id)}>
							Delete
						</a>
					</td>
					<td>
						<Link to="manageCourse" 
							params={{id: course.id}}>{course.id}</Link>
					</td>
					<td>
						<a href={course.watchHref}>{course.title}</a>
					</td>
					<td>
						{
							course.author != null 
								? course.author.name
								: ''
						}
					</td>
					<td>
						{course.category}
					</td>
					<td>
						{course.length}
					</td>
				</tr>
			);
		};

		return (
			<table className="table">
				<thead>
					<td></td>
					<td>ID</td>
					<td>Title</td>
					<td>Author</td>
					<td>Category</td>
					<td>Length</td>
				</thead>
				<tbody>
					{this.props.courses.map(createCourseRow, this)}
				</tbody>
			</table>
		);
	}
});

module.exports = CourseList;