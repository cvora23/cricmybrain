define([
	"jquery",
	"underscore"
], function($, _) {
		var rules = {
			rule1: {   
				"ruleNum": "rule1",
				"ruleType" : "team",
				"ruleDesc" : "Match Winner",
				"ruleFunction" : "isSameTeam",
				"ruleCriteria" : "Check if predicted team is same as winner",
				"range" : 0
			},

			rule2: {   
				"ruleNum": "rule2",
				"ruleType" : "runs",
				"ruleDesc" : "Max runs scored by a single batsman in the match",
				"ruleFunction" : "isWithinRange",
				"ruleCriteria" : "Check if predicted runs is within a tolerance of +-3 of the max runs",
				"range" : 3
			},

			rule3: {   
				"ruleNum": "rule3",
				"ruleType" : "name",
				"ruleDesc" : "Bowler with best bowling figures in the match",
				"ruleFunction" : "isSameName",
				"ruleCriteria" : "Check if predicted name is same as winner name",
				"range" : 0
			},

			bonus1: {
				"ruleNum": "bonus1",
				"ruleType": "runs",
				"ruleDesc" : "Max runs scored by batsman with highest strike rate, only runs greater than 20 will be considered",
				"ruleFunction" : "isWithinRange",
				"ruleCriteria" : "Check if predicted runs is within a tolerance of +-3 of the max runs",
				"range" : 3
			},

			bonus2: {
				"ruleNum": "bonus2",
				"ruleType": "name",
				"ruleDesc" : "Batsman with highest sixes",
				"ruleFunction" : "isSameName",
				"ruleCriteria" : "Check if predicted name is same as winner name",
				"range" : 0
			},

			bonus3: {
				"ruleNum": "bonus3",
				"ruleType": "wickets",
				"ruleDesc" : "Total wickets in the game",
				"ruleFunction" : "isWithinRange",
				"ruleCriteria" : "Check if predicted wickets is within a tolerance of +-1 of the total wickets",
				"range" : 1
			},

			bonus4: {
				"ruleNum": "bonus4",
				"ruleType": "runs",
				"ruleDesc" : "Highest partnership in the game",
				"ruleFunction" : "isWithinRange",
				"ruleCriteria" : "Check if predicted partnership is within a tolerance of +-5 of the max partnership",
				"range" : 0
			},

			bonus5: {
				"ruleNum": "bonus5",
				"ruleType": "extras",
				"ruleDesc" : "Total extras in the game",
				"ruleFunction" : "isWithinRange",
				"ruleCriteria" : "Check if predicted extras is within a tolerance of +-2 of the total extras",
				"range" : 2
			},

			bonus6: {
				"ruleNum": "bonus6",
				"ruleType": "name",
				"ruleDesc" : "Bowler with best economy in the game",
				"ruleFunction" : "isSameName",
				"ruleCriteria" : "Check if predicted name is same as winner name",
				"range" : 0
			},

			bonus7: {
				"ruleNum": "bonus7",
				"ruleType": "wickets",
				"ruleDesc" : "Total dismisals by wicketkeeper in the game, includes catches, runouts (even if it means taking wickets off) and stumpings",
				"ruleFunction" : "isWithinRange",
				"ruleCriteria" : "Check if predicted wickets is within a tolerance of +-1 of the max wickets",
				"range" : 1
			},

			bonus8: {
				"ruleNum": "bonus8",
				"ruleType": "runs",
				"ruleDesc" : "Total runs in sixes in the game",
				"ruleFunction" : "isWithinRange",
				"ruleCriteria" : "Check if predicted runs is within a tolerance of +-3 of the total runs in sixes",
				"range" : 3
			},

			bonus9: {
				"ruleNum": "bonus9",
				"ruleType": "name",
				"ruleDesc" : "Bowler with most dot balls in the game",
				"ruleFunction" : "isSameName",
				"ruleCriteria" : "Check if predicted name is same as winner name",
				"range" : 0
			},

			bonus10: {
				"ruleNum": "bonus10",
				"ruleType": "name",
				"ruleDesc" : "Batsman with slowest strike rate, minimum 7 balls faced",
				"ruleFunction" : "isSameName",
				"ruleCriteria" : "Check if predicted name is same as winner name",
				"range" : 0
			}
		};

		var getRules = function(ruleNum) {
			return rules[ruleNum];
		};

		var getRulesDescription = function(ruleNum) {
			return rules[ruleNum].ruleDesc;
		};

		return {
			getRules: getRules,
			getRulesDescription: getRulesDescription
		};

	} 
);
