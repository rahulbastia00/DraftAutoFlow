import React from 'react';
import type { UseFormReturn } from 'react-hook-form';
import { Input } from '../ui/Input';
import { Select, type SelectOption } from '../ui/Select';
import type { ApplicationFormData } from '../../hooks/useApplicationForm';

interface ApplicationFormSectionProps {
  form: UseFormReturn<ApplicationFormData>;
}

const platformOptions: SelectOption[] = [
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'naukri', label: 'Naukri' },
  { value: 'internshala', label: 'Internshala' },
  { value: 'wellfound', label: 'WellFound' },
  { value: 'indeed', label: 'Indeed' },
  { value: 'company_website', label: 'Company Website' },
  { value: 'other', label: 'Other' },
];

const jobTypeOptions: SelectOption[] = [
  { value: 'remote', label: 'Remote' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'onsite', label: 'On-site' },
];

const employmentTypeOptions: SelectOption[] = [
  { value: 'fulltime', label: 'Full-time' },
  { value: 'internship', label: 'Internship' },
];

export const ApplicationFormSection: React.FC<
  ApplicationFormSectionProps
> = ({ form }) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Row 1: Platform and Company Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <Select
          {...register('platform')}
          label="Platform"
          placeholder="Select a platform"
          options={platformOptions}
          error={errors.platform?.message}
          required
        />
        <Input
          {...register('companyName')}
          type="text"
          label="Company Name"
          placeholder="e.g., Google, Microsoft, Amazon"
          error={errors.companyName?.message}
          required
        />
      </div>

      {/* Row 2: Job Domain and Job Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <Input
          {...register('domain')}
          type="text"
          label="Job Domain"
          placeholder="e.g., Data Science, AI Intern, ML Engineer"
          error={errors.domain?.message}
          required
        />
        <Select
          {...register('jobType')}
          label="Job Type"
          placeholder="Select job type"
          options={jobTypeOptions}
          error={errors.jobType?.message}
          required
        />
      </div>

      {/* Row 2.5: Employment Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <Select
          {...register('employmentType')}
          label="Employment Type"
          placeholder="Select employment type"
          options={employmentTypeOptions}
          error={errors.employmentType?.message}
          required
        />
      </div>

      {/* Row 3: Application Date and Job ID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <Input
          {...register('applicationDate')}
          type="date"
          label="Application Date"
          error={errors.applicationDate?.message}
          required
        />
        <Input
          {...register('jobId')}
          type="text"
          label="Job ID"
          placeholder="Optional identifier from job posting"
          error={errors.jobId?.message}
        />
      </div>

      {/* Row 4: Job URL */}
      <Input
        {...register('jobUrl')}
        type="url"
        label="Job URL"
        placeholder="https://linkedin.com/jobs/view/..."
        error={errors.jobUrl?.message}
        required
        helperText="Paste the job link here"
      />
    </div>
  );
};