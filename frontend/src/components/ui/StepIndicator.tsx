import React from 'react';
import clsx from 'clsx';
import { Check } from 'lucide-react';

interface Step {
  number: number;
  title: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  title?: string;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  steps,
  currentStep,
  title = 'Application Tracker',
}) => {
  return (
    <div className="w-full">
      <h1 className="text-center text-2xl font-bold text-gray-900 mb-8">
        {title}
      </h1>
      <div className="flex items-center justify-center gap-8">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center gap-3">
              <div
                className={clsx(
                  'w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg',
                  'transition-all duration-200',
                  {
                    'bg-orange-500 text-white shadow-lg shadow-orange-500/50':
                      step.number === currentStep,
                    'bg-orange-200 text-orange-600':
                      step.number < currentStep,
                    'bg-gray-200 text-gray-500': step.number > currentStep,
                  }
                )}
              >
                {step.number < currentStep ? (
                  <Check className="w-6 h-6" />
                ) : (
                  step.number
                )}
              </div>
              <p
                className={clsx('text-sm font-medium whitespace-nowrap', {
                  'text-gray-900': step.number === currentStep,
                  'text-gray-700': step.number < currentStep,
                  'text-gray-400': step.number > currentStep,
                })}
              >
                {step.title}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div
                className={clsx(
                  'w-16 h-1 rounded-full transition-all duration-200',
                  step.number < currentStep
                    ? 'bg-orange-200'
                    : 'bg-gray-200'
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
