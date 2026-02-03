import type { UseFormProps } from 'react-hook-form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const applicationFormSchema = z.object({
  platform: z
    .string()
    .min(1, 'Platform is required')
    .refine((val) => val !== '', 'Please select a platform'),
  companyName: z
    .string()
    .min(1, 'Company name is required')
    .max(200, 'Company name cannot exceed 200 characters'),
  domain: z
    .string()
    .min(1, 'Job Domain is required'),
  jobType: z
    .string()
    .min(1, 'Job type is required')
    .refine((val) => val !== '', 'Please select a job type'),
  employmentType: z
    .string()
    .min(1, 'Employment type is required')
    .refine((val) => val !== '', 'Please select an employment type'),
  applicationDate: z
    .string()
    .min(1, 'Application date is required'),
  jobId: z
    .string()
    .max(100, 'Job ID cannot exceed 100 characters')
    .optional(),
  jobUrl: z
    .string()
    .min(1, 'Job URL is required')
    .url('Please enter a valid URL'),
  resume: z.instanceof(File).optional().nullable(),
});

export type ApplicationFormData = z.infer<typeof applicationFormSchema>;

type UseApplicationFormProps = Omit<
  UseFormProps<ApplicationFormData>,
  'resolver'
>;

export const useApplicationForm = (props?: UseApplicationFormProps) => {
  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationFormSchema),
    mode: 'onChange',
    defaultValues: {
      platform: '',
      companyName: '',
      domain: '',
      jobType: '',
      employmentType: '',
      applicationDate: '',
      jobId: '',
      jobUrl: '',
      resume: null,
    },
    ...(props ?? {}),
  });

  return form;
};
