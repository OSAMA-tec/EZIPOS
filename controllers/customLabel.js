
const CustomLabel = require('../models/customLabel');
const customLabel = async (req, res) => {
    try {
        const { labelFor, inputValue, customFieldNumber, Type, dropdownOptions, isRequired } = req.body;
    
        if (!labelFor || !inputValue || !customFieldNumber || !Type) {
          return res.status(400).json({ message: 'All fields are required' });
        }
        let htmlCode;
        if (Type === 'text') {
          htmlCode = `<div className='flex flex-col '>
                        <label for="product_custom_field1">${inputValue}:</label>
                        <input value={formData.pcustomField1} onChange={(e) => { setFormData({ ...formData, pcustomField1: e.target.value }) }} type='text' placeholder=${inputValue} className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                      </div>`;
        } else if (Type === 'datepicker') {
          htmlCode = `<div class="form-group">
                        <label for="product_custom_field1">${inputValue}:</label>
                        <input type="date" name="product_custom_field1" id="product_custom_field1" value="" class="form-control" placeholder=${inputValue} data-listener-added_994d9aba="true">
                      </div>`;
        } else if (Type === 'dropdown') {
          const options = dropdownOptions.map(option => `<option value="${option}">${option}</option>`).join('');
          htmlCode = `<div class="form-group">
                        <label for="product_custom_field1">${inputValue}</label>
                        <select class="form-control select2 select2-hidden-accessible valid" id="product_custom_field1" name="product_custom_field1" tabindex="-1" aria-hidden="true" aria-invalid="false">
                          <option selected="selected" value="">${inputValue}</option>
                          ${options}
                        </select>
                      </div>`;
        } else if (Type === 'text' && isRequired) {
          htmlCode = `<div class="form-group">
                        <label for="custom_field_1">${inputValue}:*</label>
                        <input class="form-control" placeholder=${inputValue} required="" name="custom_field_1" type="text" id="custom_field_1">
                      </div>`;
        }
        const update = {
          labelFor,
          labelCode: htmlCode,
          inputValue,
          customFieldNumber,
          Type,
        };
        const options = { new: true, upsert: true };
    
        const updatedCustomLabel = await CustomLabel.findOneAndUpdate({ labelFor, customFieldNumber }, update, options);
    
        res.status(201).json(updatedCustomLabel);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
}


const getCustomLabels=async (req,res)=>{
    try {
        const { labelFor, customFieldNumber } = req.body;
    
        if (!labelFor || !customFieldNumber) {
          return res.status(400).json({ message: 'Both labelFor and customFieldNumber are required' });
        }
    
        const customLabel = await CustomLabel.findOne({ labelFor, customFieldNumber });
    
        if (!customLabel) {
          return res.status(404).json({ message: 'No custom label found with the provided labelFor and customFieldNumber' });
        }
    
        res.status(200).json(customLabel);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
}
module.exports = { customLabel ,getCustomLabels};