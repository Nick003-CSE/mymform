import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase'; // Adjust if firebase.ts is somewhere else
import Logo from './Logo';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormTextArea from './FormTextArea';
import { GENDER_OPTIONS, PROBLEM_OPTIONS, FILLED_BY_OPTIONS } from '../constants/formOptions';

const RegistrationForm: React.FC = () => {
  // const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    age: '',
    aadharNumber: '',
    address: '',
    gender: '',
    genderOther: '',
    problem: '',
    problemOther: '',
    filledBy: '',
    filledByOther: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'registrations'), {
        ...formData,
        gender: formData.gender === 'other' ? formData.genderOther : formData.gender,
        problem: formData.problem === 'other' ? formData.problemOther : formData.problem,
        filledBy: formData.filledBy === 'other' ? formData.filledByOther : formData.filledBy,
        timestamp: new Date(),
      });

      alert('Form submitted successfully!');
      setFormData({
        name: '',
        phoneNumber: '',
        age: '',
        aadharNumber: '',
        address: '',
        gender: '',
        genderOther: '',
        problem: '',
        problemOther: '',
        filledBy: '',
        filledByOther: '',
      });

      window.location.href = 'https://playful-alpaca-f6a855.netlify.app/';

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <div className="relative z-10 w-full max-w-2xl mx-auto p-8 rounded-xl backdrop-blur-xl bg-black bg-opacity-30 border border-white border-opacity-20 shadow-2xl overflow-hidden animate-fadeIn">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 pointer-events-none" />
      <div className="relative z-10">
        <Logo />
        <h1 className="text-3xl font-bold text-white mb-6">Patient Registration</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput id="name" label="Full Name" value={formData.name} onChange={handleInputChange} required placeholder="Enter your full name" />
            <FormInput id="phoneNumber" label="Phone Number" type="tel" value={formData.phoneNumber} onChange={handleInputChange} required placeholder="Enter your phone number" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput id="age" label="Age" type="number" value={formData.age} onChange={handleInputChange} required placeholder="Enter your age" />
            <FormInput id="aadharNumber" label="Aadhar Number" value={formData.aadharNumber} onChange={handleInputChange} placeholder="Enter your Aadhar number" />
          </div>

          <FormInput id="address" label="Address" value={formData.address} onChange={handleInputChange} required placeholder="Enter your address" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <FormSelect id="gender" label="Gender" options={GENDER_OPTIONS} value={formData.gender} onChange={handleSelectChange} required />
              {formData.gender === 'other' && (
                <FormTextArea id="genderOther" label="Please specify" value={formData.genderOther} onChange={handleTextAreaChange} required placeholder="Please specify your gender" rows={2} />
              )}
            </div>

            <div>
              <FormSelect id="problem" label="Problem Area" options={PROBLEM_OPTIONS} value={formData.problem} onChange={handleSelectChange} required />
              {formData.problem === 'other' && (
                <FormTextArea id="problemOther" label="Please specify" value={formData.problemOther} onChange={handleTextAreaChange} required placeholder="Please specify your problem" rows={2} />
              )}
            </div>
          </div>

          <div>
            <FormSelect id="filledBy" label="Form Filled By" options={FILLED_BY_OPTIONS} value={formData.filledBy} onChange={handleSelectChange} required />
            {formData.filledBy === 'other' && (
              <FormTextArea id="filledByOther" label="Please specify" value={formData.filledByOther} onChange={handleTextAreaChange} required placeholder="Please specify who filled this form" rows={2} />
            )}
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
