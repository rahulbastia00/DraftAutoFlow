import React, { useState } from 'react';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { FileUpload } from '../components/ui/FileUpload';

export const StepOne: React.FC = () => {
  const [platform, setPlatform] = useState('');
  const [domain, setDomain] = useState('');
  const [applicationDate, setApplicationDate] = useState('');
  const [jobUrl, setJobUrl] = useState('');
  const [jobId, setJobId] = useState('');
  const [resume, setResume] = useState<File | null>(null);

  return (
    <div className="w-full">
      {/* <h2 className="text-2xl font-bold mb-6">Job Application Details</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Job Platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          options={[
            { value: '', label: 'Select a platform' },
            { value: 'linkedin', label: 'LinkedIn Jobs' },
            { value: 'glassdoor', label: 'Glassdoor Jobs' },
            { value: 'indeed', label: 'Indeed' },
            { value: 'company', label: 'Company Career Page' },
            { value: 'other', label: 'Other' },
          ]}
        />
        <Input
          label="Job Domain"
          placeholder="e.g., Data Science, AI Intern, ML Engineer"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
        <Input
          label="Application Date"
          type="date"
          value={applicationDate}
          onChange={(e) => setApplicationDate(e.target.value)}
        />
        <Input
          label="Job ID"
          placeholder="Optional identifier from job posting"
          value={jobId}
          onChange={(e) => setJobId(e.target.value)}
        />
        <div className="md:col-span-2">
          <Input
            label="Job URL"
            placeholder="https://linkedin.com/jobs/view/..."
            value={jobUrl}
            onChange={(e) => setJobUrl(e.target.value)}
          />
        </div>
        <div className="md:col-span-2">
          <FileUpload
            label="Resume Upload"
            accept=".pdf,.doc,.docx"
            selectedFile={resume}
            onChange={(file) => setResume(file)}
            onRemove={() => setResume(null)}
          />
        </div>
      </div>
    </div>
  );
};