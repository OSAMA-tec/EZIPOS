
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const customerGroupSchema = new Schema({
    groupName: {
        type: String,
        required: true
    },
    priceCalculation: {
        type: String,
        enum: ['Percentage', 'Selling Price Group'],
        required: true
    },
    calculationPercentage: {
        type: Number,
        required: function() {
            return this.priceCalculation === 'Percentage';
        }
    },
    sellingPriceGroup: {
        type: String,
        enum: ['retail', 'Saleman', 'Local Sale' ,'Minimum points','Sale Points'] // Add other possible values
    },
    // ... (other fields)
});

const CustomerGroup = mongoose.model("CustomerGroup", customerGroupSchema);
module.exports = CustomerGroup;
