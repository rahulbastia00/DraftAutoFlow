import React, { useState } from 'react';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { TextArea } from '../components/ui/TextArea';
import { FileUpload } from '../components/ui/FileUpload';
import EducationFormSection from '../components/sections/EducationFormSection';

interface StepOneProps {
  onNext?: () => void;
}

interface Education {
  degree: string;
  college: string;
  year: string;
}

export const StepOne: React.FC<StepOneProps> = ({ onNext }) => {
  const [educationList, setEducationList] = useState<Education[]>([
    { degree: 'Degree Name', college: 'College name appears here', year: '1999' }
  ]);
  const [editingEducation, setEditingEducation] = useState<Education | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const handleSaveEducation = (edu: Education) => {
    if (editingEducation) {
      setEducationList(educationList.map(e => e === editingEducation ? edu : e));
    } else {
      setEducationList([...educationList, edu]);
    }
    setEditingEducation(null);
    setIsAdding(false);
  };

  const handleAddNewEducation = () => {
    setEditingEducation(null);
    setIsAdding(true);
  };

  const handleCancel = () => {
    setEditingEducation(null);
    setIsAdding(false);
  };

  const handleDelete = (edu: Education) => {
    setEducationList(educationList.filter(e => e !== edu));
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Basic Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <Input label="Full Name" placeholder="Enter Full Name" />
        </div>
        <div className="md:col-span-2">
          <Input label="Constituency" placeholder="Search Constituency" />
        </div>
        <Select
          label="Select Party You Work For"
          options={[
            { value: 'party1', label: 'Party 1' },
            { value: 'party2', label: 'Party 2' },
          ]}
        />
        <Select
          label="Position"
          options={[
            { value: 'position1', label: 'Position 1' },
            { value: 'position2', label: 'Position 2' },
          ]}
        />
        <Input label="Date Of Birth" type="date" />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input type="radio" name="gender" className="form-radio text-orange-500 focus:ring-orange-500" />
              <span className="ml-2">Male</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" className="form-radio text-orange-500 focus:ring-orange-500" />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>
        <div className="md:col-span-2">
          <TextArea label="Vision & Mission" placeholder="Type Here..." />
        </div>
        <div className="md:col-span-2">
          <FileUpload label="Add Photo" accept="image/*" />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Education</h3>
        <div className="space-y-4">
          {educationList.map((edu, index) => (
            <EducationFormSection
              key={index}
              educationInfo={edu}
              onDelete={() => handleDelete(edu)}
              isEditing={false}
            />
          ))}
          {isAdding && (
            <EducationFormSection
              isEditing={true}
              onSave={handleSaveEducation}
              onCancel={handleCancel}
            />
          )}
        </div>
        {!isAdding && (
          <button onClick={handleAddNewEducation} className="text-orange-500 font-semibold mt-4 hover:text-orange-600">
            + Add Another Education
          </button>
        )}
      </div>

      <div className="flex justify-end mt-8">
        <button
          onClick={onNext}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-sm transition-colors"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};
