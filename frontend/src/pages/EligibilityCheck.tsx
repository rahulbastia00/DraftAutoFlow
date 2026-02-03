import React, { useState } from 'react';
import { TextArea } from '../components/ui/TextArea';
import { FileUpload } from '../components/ui/FileUpload';
import { Button } from '../components/ui/Button';

interface EligibilityCheckProps {
    onNext?: () => void;
}

export const EligibilityCheck: React.FC<EligibilityCheckProps> = ({ onNext }) => {
    const [jobDescription, setJobDescription] = useState('');
    const [resume, setResume] = useState<File | null>(null);
    const [isChecking, setIsChecking] = useState(false);
    const [eligibilityResult, setEligibilityResult] = useState<'eligible' | 'not-eligible' | null>(null);
    const [showResult, setShowResult] = useState(false);

    const handleResumeChange = (file: File | null) => {
        setResume(file);
    };

    const handleResumeRemove = () => {
        setResume(null);
    };

    const handleEligibilityCheck = async () => {
        if (!jobDescription.trim() || !resume) {
            alert('Please provide both job description and resume to check eligibility.');
            return;
        }

        setIsChecking(true);
        setShowResult(false);

        // Simulate API call for eligibility check
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Mock eligibility determination (70% chance of being eligible)
        const isEligible = Math.random() > 0.3;
        setEligibilityResult(isEligible ? 'eligible' : 'not-eligible');
        setIsChecking(false);
        setShowResult(true);

        // If eligible, automatically move to next step after showing result
        if (isEligible && onNext) {
            setTimeout(() => {
                onNext();
            }, 2000);
        }
    };

    const handleRetry = () => {
        setEligibilityResult(null);
        setShowResult(false);
    };

    const getButtonStyle = () => {
        if (isChecking) {
            return "bg-blue-500 hover:bg-blue-600 text-white";
        }
        if (eligibilityResult === 'eligible') {
            return "bg-green-500 hover:bg-green-600 text-white";
        }
        if (eligibilityResult === 'not-eligible') {
            return "bg-red-500 hover:bg-red-600 text-white";
        }
        return "bg-orange-500 hover:bg-orange-600 text-white";
    };

    const getButtonText = () => {
        if (isChecking) return 'Checking Eligibility...';
        if (eligibilityResult === 'eligible') return '✓ Eligible - Proceeding...';
        if (eligibilityResult === 'not-eligible') return '✗ Not Eligible';
        return 'Check Eligibility Score';
    };

    return (
        <div className="space-y-6">
            {/* Job Description Field */}
            <div>
                <TextArea
                    label="Job Description"
                    placeholder="Paste the complete job description here..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    rows={8}
                    required
                    helperText="Copy and paste the full job description from the job posting"
                />
            </div>

            {/* Resume Upload */}
            <div>
                <FileUpload
                    label="Resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeChange}
                    selectedFile={resume}
                    onRemove={handleResumeRemove}
                    helperText="Upload your resume in PDF or DOC format"
                />
            </div>

            {/* Eligibility Check Button */}
            <div className="flex justify-center pt-4">
                <Button
                    onClick={handleEligibilityCheck}
                    disabled={!jobDescription.trim() || !resume || isChecking}
                    className={`font-semibold py-3 px-8 rounded-lg shadow-sm transition-all duration-300 ${getButtonStyle()}`}
                >
                    {getButtonText()}
                </Button>
            </div>

            {/* Result Message */}
            {showResult && (
                <div className={`mt-6 p-4 rounded-lg text-center transition-all duration-300 ${eligibilityResult === 'eligible'
                        ? 'bg-green-100 border border-green-300'
                        : 'bg-red-100 border border-red-300'
                    }`}>
                    {eligibilityResult === 'eligible' ? (
                        <div className="text-green-800">
                            <h3 className="font-semibold text-lg mb-2">🎉 Great News!</h3>
                            <p>You meet the eligibility requirements for this position. Redirecting to application form...</p>
                        </div>
                    ) : (
                        <div className="text-red-800">
                            <h3 className="font-semibold text-lg mb-2">❌ Not Eligible</h3>
                            <p className="mb-3">Based on your resume and job requirements, you may not meet all the criteria for this position.</p>
                            <button
                                onClick={handleRetry}
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                            >
                                Try Again
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};