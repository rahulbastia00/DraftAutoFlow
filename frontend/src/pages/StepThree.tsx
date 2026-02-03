import React from 'react';

interface StepThreeProps {
    onBack?: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({ onBack }) => {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-6">Verification</h2>
            <div className="space-y-6">
                <p className="text-gray-600">Verification form will be implemented here.</p>
                {/* Add verification fields here */}
            </div>

            <div className="flex justify-end mt-8">
                {onBack && (
                    <button
                        onClick={onBack}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg transition-colors"
                    >
                        Back
                    </button>
                )}
            </div>
        </div>
    );
};

export default StepThree;
