import React from 'react';
import { ApplicationFormSection } from '../components/sections/ApplicationFormSection';
import { useApplicationForm } from '../hooks/useApplicationForm';

export const StepOne: React.FC = () => {
  const form = useApplicationForm();

  return (
    <div className="w-full">
      <ApplicationFormSection form={form} />
    </div>
  );
};