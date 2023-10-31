import React, { useState } from 'react'

const CustomLables = () => {
    const [formData, setFormData] = useState({

    })
    const handleSetting = () => {
        console.log("Update Setting", formData)
    }
    return (
        <div className='bg-white py-5 flex flex-col'>
            <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl  font-bold'>Lables For Custom Payments</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <input value={formData.pcustomField1} onChange={(e) => { setFormData({ ...formData, pcustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <input value={formData.pcustomField2} onChange={(e) => { setFormData({ ...formData, pcustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <input value={formData.pcustomField3} onChange={(e) => { setFormData({ ...formData, pcustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <input value={formData.pcustomField4} onChange={(e) => { setFormData({ ...formData, pcustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 5:</h1>
                        <input value={formData.pcustomField5} onChange={(e) => { setFormData({ ...formData, pcustomField5: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 6:</h1>
                        <input value={formData.pcustomField6} onChange={(e) => { setFormData({ ...formData, pcustomField6: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 7:</h1>
                        <input value={formData.pcustomField7} onChange={(e) => { setFormData({ ...formData, pcustomField7: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl font-bold'>Labels for contact custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <input value={formData.ccustomField1} onChange={(e) => { setFormData({ ...formData, ccustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <input value={formData.ccustomField2} onChange={(e) => { setFormData({ ...formData, ccustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <input value={formData.ccustomField3} onChange={(e) => { setFormData({ ...formData, ccustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <input value={formData.ccustomField4} onChange={(e) => { setFormData({ ...formData, ccustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 5:</h1>
                        <input value={formData.ccustomField5} onChange={(e) => { setFormData({ ...formData, ccustomField5: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 6:</h1>
                        <input value={formData.ccustomField6} onChange={(e) => { setFormData({ ...formData, ccustomField6: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 7:</h1>
                        <input value={formData.ccustomField7} onChange={(e) => { setFormData({ ...formData, ccustomField7: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 8:</h1>
                        <input value={formData.ccustomField8} onChange={(e) => { setFormData({ ...formData, ccustomField8: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 9:</h1>
                        <input value={formData.ccustomField9} onChange={(e) => { setFormData({ ...formData, ccustomField9: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 10:</h1>
                        <input value={formData.ccustomField10} onChange={(e) => { setFormData({ ...formData, ccustomField10: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl font-bold'>Labels for product custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField1} onChange={(e) => { setFormData({ ...formData, prcustomField1: e.target.value }) }} type='text' placeholder='Custom Field 1' className='border-[1px] px-2 w-2/4 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField1Type} onChange={(e) => { setFormData({ ...formData, prcustomField1Type: e.target.value }) }} type='text' className='border-[1px] px-2 py-1 w-2/4 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField1Type === "Dropdown" &&
                            <textarea rows={2} value={formData.dropdownOption1} onChange={(e) => { setFormData({ ...formData, dropdownOption1: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField2} onChange={(e) => { setFormData({ ...formData, prcustomField2: e.target.value }) }} type='text' placeholder='Custom Field 2' className='border-[1px] w-2/4  px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField2Type} onChange={(e) => { setFormData({ ...formData, prcustomField2Type: e.target.value }) }} type='text' className='border-[1px] w-2/4 px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField2Type === "Dropdown" &&
                            <textarea rows={2} value={formData.dropdownOption2} onChange={(e) => { setFormData({ ...formData, dropdownOption2: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField3} onChange={(e) => { setFormData({ ...formData, prcustomField3: e.target.value }) }} type='text' placeholder='Custom Field 3' className='border-[1px] w-2/4 px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField3Type} onChange={(e) => { setFormData({ ...formData, prcustomField3Type: e.target.value }) }} type='text' className='border-[1px] w-2/4 px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField3Type === "Dropdown" &&
                            <textarea rows={2} value={formData.dropdownOption3} onChange={(e) => { setFormData({ ...formData, dropdownOption3: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField4} onChange={(e) => { setFormData({ ...formData, prcustomField4: e.target.value }) }} type='text' placeholder='Custom Field 4' className='border-[1px] w-2/4 px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField4Type} onChange={(e) => { setFormData({ ...formData, prcustomField4Type: e.target.value }) }} type='text' className='border-[1px] w-2/4 px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField4Type === "Dropdown" &&
                            <textarea rows={2} value={formData.dropdownOption4} onChange={(e) => { setFormData({ ...formData, dropdownOption4: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 5:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField5} onChange={(e) => { setFormData({ ...formData, prcustomField5: e.target.value }) }} type='text' placeholder='Custom Field 5' className='border-[1px] w-2/4 px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField5Type} onChange={(e) => { setFormData({ ...formData, prcustomField5Type: e.target.value }) }} type='text' className='border-[1px] w-2/4 px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField5Type === "Dropdown" &&
                            <textarea rows={2} value={formData.dropdownOption5} onChange={(e) => { setFormData({ ...formData, dropdownOption5: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 6:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField6} onChange={(e) => { setFormData({ ...formData, prcustomField6: e.target.value }) }} type='text' placeholder='Custom Field 6' className='border-[1px] w-2/4 px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField6Type} onChange={(e) => { setFormData({ ...formData, prcustomField6Type: e.target.value }) }} type='text' className='border-[1px] w-2/4 px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField6Type === "Dropdown" &&
                            <textarea rows={2} value={formData.dropdownOption6} onChange={(e) => { setFormData({ ...formData, dropdownOption6: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 7:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField7} onChange={(e) => { setFormData({ ...formData, prcustomField7: e.target.value }) }} type='text' placeholder='Custom Field 7' className='border-[1px] w-2/4 px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField7Type} onChange={(e) => { setFormData({ ...formData, prcustomField7Type: e.target.value }) }} type='text' className='border-[1px] w-2/4 px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField7Type === "Dropdown" &&
                            <textarea rows={2} value={formData.dropdownOption7} onChange={(e) => { setFormData({ ...formData, dropdownOption7: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 8:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField8} onChange={(e) => { setFormData({ ...formData, prcustomField8: e.target.value }) }} type='text' placeholder='Custom Field 8' className='border-[1px] w-2/4 px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField8Type} onChange={(e) => { setFormData({ ...formData, prcustomField8Type: e.target.value }) }} type='text' className='border-[1px] w-2/4 px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField8Type === "Dropdown" &&
                            <textarea rows={2} value={formData.dropdownOption8} onChange={(e) => { setFormData({ ...formData, dropdownOption8: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 9:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField9} onChange={(e) => { setFormData({ ...formData, prcustomField9: e.target.value }) }} type='text' placeholder='Custom Field 9' className='border-[1px] w-2/4 px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField9Type} onChange={(e) => { setFormData({ ...formData, prcustomField9Type: e.target.value }) }} type='text' className='border-[1px] w-2/4 px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField9Type === "Dropdown" &&
                            <textarea rows={2} value={formData.dropdownOption9} onChange={(e) => { setFormData({ ...formData, dropdownOption9: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 10:</h1>
                        <div className='flex'>
                            <input value={formData.prcustomField10} onChange={(e) => { setFormData({ ...formData, prcustomField10: e.target.value }) }} type='text' placeholder='Custom Field 10' className='border-[1px] w-2/4 px-2 py-1 border-gray-400 focus:outline-none' />
                            <select value={formData.prcustomField10Type} onChange={(e) => { setFormData({ ...formData, prcustomField10Type: e.target.value }) }} type='text' className='border-[1px] w-2/4 px-2 py-1 border-gray-400 focus:outline-none' >
                                <option value={""}>Field type</option>
                                <option value={"text"}>text</option>
                                <option value={"Datepicker"}>Datepicker</option>
                                <option value={"Dropdown"}>Dropdown</option>
                            </select>
                        </div>
                        {formData.prcustomField10Type === "Dropdown" &&
                            <textarea rows={2} value={formData.dropdownOption10} onChange={(e) => { setFormData({ ...formData, dropdownOption10: e.target.value }) }} type='text' placeholder='Enter dropdown options, one option per line ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />

                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl font-bold'>Labels for location custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <input value={formData.lcustomField1} onChange={(e) => { setFormData({ ...formData, lcustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <input value={formData.lcustomField2} onChange={(e) => { setFormData({ ...formData, lcustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <input value={formData.lcustomField3} onChange={(e) => { setFormData({ ...formData, lcustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <input value={formData.lcustomField4} onChange={(e) => { setFormData({ ...formData, lcustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>

                </div>
            </div>
            <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl font-bold'>Labels for Users custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <input value={formData.ucustomField1} onChange={(e) => { setFormData({ ...formData, ucustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <input value={formData.ucustomField2} onChange={(e) => { setFormData({ ...formData, ucustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <input value={formData.ucustomField3} onChange={(e) => { setFormData({ ...formData, ucustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <input value={formData.ucustomField4} onChange={(e) => { setFormData({ ...formData, ucustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>

                </div>
            </div>
            <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl font-bold'>Labels for Purchase custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <div className='flex'>
                            <input value={formData.pucustomField1} onChange={(e) => { setFormData({ ...formData, pucustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.pucustomField1Required} onChange={(e) => { setFormData({ ...formData, pucustomField1Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <div className='flex'>
                            <input value={formData.pucustomField2} onChange={(e) => { setFormData({ ...formData, pucustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.pucustomField2Required} onChange={(e) => { setFormData({ ...formData, pucustomField2Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <div className='flex'>
                            <input value={formData.pucustomField3} onChange={(e) => { setFormData({ ...formData, pucustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.pucustomField3Required} onChange={(e) => { setFormData({ ...formData, pucustomField3Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <div className='flex'>
                            <input value={formData.pucustomField4} onChange={(e) => { setFormData({ ...formData, pucustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.pucustomField4Required} onChange={(e) => { setFormData({ ...formData, pucustomField4Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl font-bold'>Labels for Purchase Shipping custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <div className='flex'>
                            <input value={formData.puShpcustomField1} onChange={(e) => { setFormData({ ...formData, puShpcustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.puShpcustomField1Required} onChange={(e) => { setFormData({ ...formData, puShpcustomField1Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <div className='flex'>
                            <input value={formData.puShpcustomField2} onChange={(e) => { setFormData({ ...formData, puShpcustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.puShpcustomField2Required} onChange={(e) => { setFormData({ ...formData, puShpcustomField2Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <div className='flex'>
                            <input value={formData.puShpcustomField3} onChange={(e) => { setFormData({ ...formData, puShpcustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.puShpcustomField3Required} onChange={(e) => { setFormData({ ...formData, puShpcustomField3Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <div className='flex'>
                            <input value={formData.puShpcustomField4} onChange={(e) => { setFormData({ ...formData, puShpcustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.puShpcustomField4Required} onChange={(e) => { setFormData({ ...formData, puShpcustomField4Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 5:</h1>
                        <div className='flex'>
                            <input value={formData.puShpcustomField5} onChange={(e) => { setFormData({ ...formData, puShpcustomField5: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.puShpcustomField5Required} onChange={(e) => { setFormData({ ...formData, puShpcustomField5Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl font-bold'>Labels for sell custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <div className='flex'>
                            <input value={formData.scustomField1} onChange={(e) => { setFormData({ ...formData, scustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.scustomField1Required} onChange={(e) => { setFormData({ ...formData, scustomField1Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <div className='flex'>
                            <input value={formData.scustomField2} onChange={(e) => { setFormData({ ...formData, scustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.scustomField2Required} onChange={(e) => { setFormData({ ...formData, scustomField2Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <div className='flex'>
                            <input value={formData.scustomField3} onChange={(e) => { setFormData({ ...formData, scustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.scustomField3Required} onChange={(e) => { setFormData({ ...formData, scustomField3Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <div className='flex'>
                            <input value={formData.scustomField4} onChange={(e) => { setFormData({ ...formData, scustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex items-center border-[1px] px-2 py-1 border-gray-400'>
                                <input value={formData.scustomField4Required} onChange={(e) => { setFormData({ ...formData, scustomField4Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl font-bold'>Labels for Purchase Shipping custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <div className='flex'>
                            <input value={formData.sShpcustomField1} onChange={(e) => { setFormData({ ...formData, sShpcustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='w-1/3 border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex w-2/3 items-center border-[1px] px-1 py-1 border-gray-400'>
                                <input value={formData.sShpcustomField1Required} onChange={(e) => { setFormData({ ...formData, sShpcustomField1Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                                <input value={formData.sShpcustomField1Default} onChange={(e) => { setFormData({ ...formData, sShpcustomField1Default: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-xs'>Is default for contact</h1>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <div className='flex'>
                            <input value={formData.sShpcustomField2} onChange={(e) => { setFormData({ ...formData, sShpcustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] w-1/3 px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex w-2/3 items-center border-[1px] px-1 py-1 border-gray-400'>
                                <input value={formData.sShpcustomField2Required} onChange={(e) => { setFormData({ ...formData, sShpcustomField2Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                                <input value={formData.sShpcustomField2Default} onChange={(e) => { setFormData({ ...formData, sShpcustomField2Default: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-xs'>Is default for contact</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <div className='flex'>
                            <input value={formData.sShpcustomField3} onChange={(e) => { setFormData({ ...formData, sShpcustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] w-1/3 px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex w-2/3 items-center border-[1px] px-1 py-1 border-gray-400'>
                                <input value={formData.sShpcustomField3Required} onChange={(e) => { setFormData({ ...formData, sShpcustomField3Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                                <input value={formData.sShpcustomField3Default} onChange={(e) => { setFormData({ ...formData, sShpcustomField3Default: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-xs'>Is default for contact</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <div className='flex'>
                            <input value={formData.sShpcustomField4} onChange={(e) => { setFormData({ ...formData, sShpcustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] w-1/3 px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex w-2/3 items-center border-[1px] px-1 py-1 border-gray-400'>
                                <input value={formData.sShpcustomField4Required} onChange={(e) => { setFormData({ ...formData, sShpcustomField4Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                                <input value={formData.sShpcustomField4Default} onChange={(e) => { setFormData({ ...formData, sShpcustomField4Default: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-xs'>Is default for contact</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 5:</h1>
                        <div className='flex'>
                            <input value={formData.sShpcustomField5} onChange={(e) => { setFormData({ ...formData, sShpcustomField5: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] w-1/3 px-2 py-1 border-gray-400 focus:outline-none' />
                            <div className='flex w-2/3 items-center border-[1px] px-1 py-1 border-gray-400'>
                                <input value={formData.sShpcustomField5Required} onChange={(e) => { setFormData({ ...formData, sShpcustomField5Required: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-sm'>Is required</h1>
                                <input value={formData.sShpcustomField5Default} onChange={(e) => { setFormData({ ...formData, sShpcustomField5Default: e.target.value }) }} type='checkbox' placeholder='Custom Field ' className=' w-4 h-4 mx-2' />
                                <h1 className='text-xs'>Is default for contact</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-col mt-5'>
                <h1 className='text-start text-xl font-bold'>Labels for types of services custom fields</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 1:</h1>
                        <input value={formData.tscustomField1} onChange={(e) => { setFormData({ ...formData, tscustomField1: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 2:</h1>
                        <input value={formData.tscustomField2} onChange={(e) => { setFormData({ ...formData, tscustomField2: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 3:</h1>
                        <input value={formData.tscustomField3} onChange={(e) => { setFormData({ ...formData, tscustomField3: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 4:</h1>
                        <input value={formData.tscustomField4} onChange={(e) => { setFormData({ ...formData, tscustomField4: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 5:</h1>
                        <input value={formData.tscustomField5} onChange={(e) => { setFormData({ ...formData, tscustomField5: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-start font-bold'>Custom Field 6:</h1>
                        <input value={formData.tscustomField6} onChange={(e) => { setFormData({ ...formData, tscustomField6: e.target.value }) }} type='text' placeholder='Custom Field ' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                    </div>

                </div>
            </div>
            <div className='flex items-center justify-center mt-5'>
                <button onClick={() => { handleSetting() }} className='bg-red-500 rounded-md text-white px-2 py-2'>Update Settings</button>
            </div>
        </div>
    )
}

export default CustomLables