// var mongoose = require('mongoose');
import {Schema, model} from 'mongoose';

const prodSchema: Schema = new Schema({	
	name: {
		type: String,
		required: true,
		unique: false,
		default: ''
	},
	type: {
		type: String,
		required: true,
		default: ''
	},
	price: {
		type: String,
		default: ''
	},
	imgUrl: {
		type: String,
		default: ''
	}
}, { versionKey: false });

// order schema should be created late on for order management

// use the schema instance to define your Prods model
/* Mongoose automatically looks for the plural version of your model name. Thus, for the example above, the model user is for the users collection in the database.
** declare a model called Prods which has schema prodSchema
 */
export default model('Prods', prodSchema);