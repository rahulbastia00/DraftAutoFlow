import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { StepOne } from './pages/StepOne'
// import StepTwo from './pages/StepTwo'
import StepThree from './pages/StepThree'
import { EligibilityCheck } from './pages/EligibilityCheck'
import { StepIndicator } from './components/ui/StepIndicator'
import './App.css'

const STEPS = [
  { number: 1, title: 'Eligibility Check' },
  { number: 2, title: 'Job Details' },
  { number: 3, title: 'Review & Submit' },
];

const ApplicationTracker: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const nextStep = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <EligibilityCheck onNext={nextStep} />
      case 2:
        return <StepOne />
      case 3:
        return <StepThree />
      default:
        return <EligibilityCheck onNext={nextStep} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-amber-50 to-orange-400 flex items-center justify-center p-3 sm:p-6 font-sans">
      <div className="w-full max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl bg-white/95 backdrop-blur rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
          <div>
            {/* <p className="text-sm text-gray-500">Sign up</p> */}
            {/* <h1 className="text-3xl font-bold text-gray-900"> your account</h1> */}
          </div>
          <div className="text-xs sm:text-sm text-gray-600">
            Want to see dashboard?{' '}
            <a href="#" className="text-orange-500 font-semibold">
              Click Here
            </a>
          </div>
        </div>

        <StepIndicator steps={STEPS} currentStep={currentStep} />

        <div className="mt-6 sm:mt-8">{renderStep()}</div>

        <div className="flex flex-col sm:flex-row justify-between sm:justify-end mt-8 sm:mt-10 gap-3">
          {currentStep > 1 && (
            <button
              onClick={prevStep}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 sm:py-2 px-4 sm:px-6 rounded-lg transition-colors w-full sm:w-auto text-sm sm:text-base"
            >
              Back
            </button>
          )}
          <button
            onClick={nextStep}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 sm:py-2 px-4 sm:px-6 rounded-lg shadow-sm transition-colors w-full sm:w-auto text-sm sm:text-base"
          >
            {currentStep === STEPS.length ? 'Finish' : 'Save & Continue'}
          </button>
        </div>
      </div>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/application-track" element={<ApplicationTracker />} />
      <Route path="/" element={<Navigate to="/application-track" replace />} />
    </Routes>
  )
}

export default App