define([
	"jquery",
	"underscore",
	"backbone",
	"backbone-validation"
], function($, _, Backbone){

	var MatchesModel = Backbone.Model.extend({
		urlRoot: "/matches",
	});
	return MatchesModel;
});