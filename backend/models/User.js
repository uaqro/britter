const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
	{
		name: String,
		rfc: String,
		currency: String,
		originalBalance: String,
		level: Number,
		coins: Number,
		accountNumber: Number,
		welcome: Boolean,
		cc: String,
		email: String,
		balance: String,
		clientNumber: String,
		fixedIncome: Number,
		fixedSpend: Number,
		SavingObj: Number,
		level: Number,
		spendGoals: [Schema.ObjectId]
	},
	{
		timestamps: true,
		versionKey: false
	}
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);

// saveGoals: [
//   {
//     fund: Schema.ObjectId,
//     savings: { qty: Number, date: Date },
//     goal: Number
//   }
// ],
// dailyBudget: {
//   monday: Number,
//   tuesday: Number,
//   wednesday: Number,
//   thursday: Number,
//   friday: Number,
//   saturday: Number,
//   sunday: Number
// }
