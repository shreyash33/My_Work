let mongoose = require("mongoose");

var contactSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	gender: String,
	phone: String,
	createDate: {
		type: Date,
		default: Date.now,
	},
});

var Contact = (module.exports = mongoose.model("contact", contactSchema));

module.exports.get = function (callback, limit) {
	Contact.find(callback).limit(limit);
};
