import React, { useState } from 'react';
import type { UseFormReturn } from 'react-hook-form';
import { Input } from '../ui/Input';
import { Select, type SelectOption } from '../ui/Select';
import { FileUpload } from '../ui/FileUpload';
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

export const ApplicationFormSection: React.FC<
  ApplicationFormSectionProps
> = ({ form }) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = form;

  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleResumeChange = (file: File | null) => {
    setResumeFile(file);
    if (file) {
      setValue('resume', file, { shouldValidate: true });
    }
  };

  const handleResumeRemove = () => {
    setResumeFile(null);
    setValue('resume', null);
  };

  return (
    <div className="space-y-6">
      {/* Row 1: Platform and Domain */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          {...register('platform')}
          label="Platform"
          placeholder="Select a platform"
          options={platformOptions}
          error={errors.platform?.message}
          required
        />
        <Input
          {...register('domain')}
          type="text"
          label="Job Domain"
          placeholder="e.g., Data Science, AI Intern, ML Engineer"
          error={errors.domain?.message}
          required
        />
      </div>

      {/* Row 2: Application Date and Job ID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* Row 3: Job URL */}
      <Input
        {...register('jobUrl')}
        type="url"
        label="Job URL"
        placeholder="https://linkedin.com/jobs/view/..."
        error={errors.jobUrl?.message}
        required
        helperText="Paste the job link here"
      />

      {/* Row 4: Resume Upload */}
      <FileUpload
        label="Resume"
        accept=".pdf,.doc,.docx"
        onChange={handleResumeChange}
        selectedFile={resumeFile}
        onRemove={handleResumeRemove}
        error={errors.resume?.message}
        helperText="Upload your resume in PDF or DOC format"
      />
    </div>
  );
};