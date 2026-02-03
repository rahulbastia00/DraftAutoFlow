import React from 'react';

interface StepTwoProps {
    onBack?: () => void;
    onNext?: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ onBack, onNext }) => {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
            <div className="space-y-6">
                <p className="text-gray-600">Contact details form will be implemented here.</p>
                {/* Add contact details form fields here */}
            </div>

            <div className="flex justify-end mt-8 gap-3">
                {onBack && (
                    <button
                        onClick={onBack}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg transition-colors"
                    >
                        Back
                    </button>
                )}
                {onNext && (
                    <button
                        onClick={onNext}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-sm transition-colors"
                    >
                        Save & Continue
                    </button>
                )}
            </div>
        </div>
    );
};

export default StepTwo;
