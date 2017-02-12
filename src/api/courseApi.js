"use strict";

var courses = require('./courseData').courses;
var _ = require('lodash');

var _generateId = function(title) {

	return title.toUpperCase().replace(/ /g, '-');
};

var _clone = function(item) {

	return JSON.parse(JSON.stringify(item));
};

var CourseApi = {

	getAllCourses: function() {

		return _clone(courses);
	},

	getCourseById: function(id) {

		var course = _.find(courses, {id: id});
		return _clone(course);
	},

	saveCourse: function(course) {

		if (course.id) {

			var index = _.indexOf(courses, _.find(courses, {id: course.id})); 
			courses.splice(index, 1, course);
		} else {

			course.id = _generateId(course.title);
			courses.push(course);
		}
	},

	deleteCourse: function(id) {

		_.remove(courses, {id: id});
	}
};

module.exports = CourseApi;