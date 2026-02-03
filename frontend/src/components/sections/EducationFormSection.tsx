import React from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

interface Education {
    degree: string;
    college: string;
    year: string;
}

interface EducationFormSectionProps {
    educationInfo: Education;
    onSave: (education: Education) => void;
    onCancel: () => void;
    onDelete: () => void;
    isEditing: boolean;
}

const EducationFormSection: React.FC<Partial<EducationFormSectionProps>> = ({
    educationInfo,
    onSave,
    onCancel,
    onDelete,
    isEditing,
}) => {
    const [education, setEducation] = React.useState(
        educationInfo || { degree: '', college: '', year: '' }
    );

    const handleSave = () => {
        if (onSave) {
            onSave(education);
        }
    };

    if (isEditing) {
        return (
            <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                        label="Degree"
                        placeholder="Enter Degree"
                        value={education.degree}
                        onChange={(e) => setEducation({ ...education, degree: e.target.value })}
                    />
                    <Input
                        label="College / University"
                        placeholder="Enter College / University"
                        value={education.college}
                        onChange={(e) => setEducation({ ...education, college: e.target.value })}
                    />
                    <Input
                        label="Graduation Year"
                        placeholder="MM/DD/YYY"
                        value={education.year}
                        onChange={(e) => setEducation({ ...education, year: e.target.value })}
                    />
                </div>
                <div className="flex justify-end gap-4 mt-4">
                    <Button onClick={onCancel} variant="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} variant="primary">
                        Save
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
            <div>
                <p className="font-bold">{educationInfo?.degree}</p>
                <p className="text-sm text-gray-600">{educationInfo?.college}</p>
            </div>
            <div className="flex items-center gap-4">
                <p className="text-sm text-gray-600">{educationInfo?.year}</p>
                <button onClick={() => { }} className="text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                    </svg>
                </button>
                <button onClick={onDelete} className="text-gray-500 hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default EducationFormSection;
