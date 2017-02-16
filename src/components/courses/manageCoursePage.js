"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');

var ManageCoursePage = React.createClass({

	mixins: [

		Router.Navigation
	],

	statics: {

		willTransitionFrom: function(transition, component) {

			if (component.state.dirty 
				&& !confirm('Leave without saving?')) {

				transition.abort();
			}
		}
	},

	getInitialState: function() {

		return {

			course: { 

				id: '', 
				title: '', 
				watchHref: '', 
				author: null, 
				length: '', 
				category: '' 
			},
			authors: AuthorStore.getAllAuthors(),
			errors: {},
			dirty: false
		};
	},

	componentWillMount: function() {

		var courseId = this.props.params.id;

		if (courseId) {

			this.setState({
				course: CourseStore.getCourseById(courseId)
			});
		}
	},

	setCourseState: function(event) {

		this.setState({
			dirty: true
		});
		var field = event.target.name;
		var value = event.target.value;
		this.state.course[field] = value;

		return this.setState({
			course: this.state.course
		});
	},

	courseFormIsValid: function() {

		var formIsValid = true;
		this.state.errors = {};

		if (this.state.course.title.length < 5) {

			this.state.errors.title = 
				'Title must be at least 5 characters';
				formIsValid = false;
		}

		if (!/^http(s)?:\/\/.+$/g.test(this.state.course.watchHref)) {

			this.state.errors.watchHref = 
				'Incorrect wath href';
			formIsValid = false;
		}

		if (!/^\d+(:\d+)?$/g.test(this.state.course.length)) {

			this.state.errors.length = 
				'Length must have format as "mm:ss" or "mm"';
				formIsValid = false;
		}

		this.setState({
			errors: this.state.errors
		});

		return formIsValid;
	},

	saveCourse: function(event) {

		event.preventDefault();

		if (!this.courseFormIsValid()) {
			return;
		}

		var created = this.state.course.id;
		if (created) {

			CourseActions.updateCourse(this.state.course);
		} else {

			CourseActions.createCourse(this.state.course);
		}

		this.setState({
			dirty: false
		});
		toastr.success('Course ' + 
			(created ? 'updated.' : 'saved.'));
		this.transitionTo('courses');
	},

	render: function() {

		return (	
			<CourseForm 
				course={this.state.course}
				authors={this.state.authors}
				onChange={this.setCourseState}
				onSave={this.saveCourse}
				errors={this.state.errors} />
		);
	}
});

module.exports = ManageCoursePage;