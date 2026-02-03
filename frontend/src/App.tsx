import React, { useState } from 'react'
import { StepOne } from './pages/StepOne'
import StepTwo from './pages/StepTwo'
import StepThree from './pages/StepThree'
import { StepIndicator } from './components/ui/StepIndicator'
import './App.css'

const STEPS = [
  { number: 1, title: 'Basic Details' },
  { number: 2, title: 'Contact Details' },
  { number: 3, title: 'Verification' },
];

const App: React.FC = () => {
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
        return <StepOne onNext={nextStep} />
      case 2:
        return <StepTwo onBack={prevStep} onNext={nextStep} />
      case 3:
        return <StepThree onBack={prevStep} />
      default:
        return <StepOne onNext={nextStep} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-amber-50 to-orange-400 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-5xl bg-white/95 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-500">Sign up</p>
            <h1 className="text-3xl font-bold text-gray-900">Create your account</h1>
          </div>
          <div className="text-sm text-gray-600">
            Already a Member?{' '}
            <a href="#" className="text-orange-500 font-semibold">
              Sign In
            </a>
          </div>
        </div>

        <StepIndicator steps={STEPS} currentStep={currentStep} />

        <div className="mt-8">{renderStep()}</div>

        <div className="flex justify-end mt-10 gap-3">
          {currentStep > 1 && (
            <button
              onClick={prevStep}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Back
            </button>
          )}
          <button
            onClick={nextStep}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-sm transition-colors"
          >
            {currentStep === STEPS.length ? 'Finish' : 'Save & Continue'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
