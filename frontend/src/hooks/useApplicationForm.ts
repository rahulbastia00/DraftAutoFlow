import type { UseFormProps } from 'react-hook-form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const applicationFormSchema = z.object({
  platform: z
    .string()
    .min(1, 'Platform is required')
    .refine((val) => val !== '', 'Please select a platform'),
  domain: z
    .string()
    .min(1, 'Domain is required')
    .refine((val) => val !== '', 'Please select a domain'),
  applicationDate: z
    .string()
    .min(1, 'Application date is required')
    .refine((val) => val !== '', 'Please select an application date'),
  jobDescription: z
    .string()
    .min(10, 'Job description must be at least 10 characters')
    .max(5000, 'Job description cannot exceed 5000 characters'),
  jobId: z
    .string()
    .min(1, 'Job ID is required')
    .max(100, 'Job ID cannot exceed 100 characters'),
  jobLink: z
    .string()
    .min(1, 'Job link is required')
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
      domain: '',
      applicationDate: '',
      jobDescription: '',
      jobId: '',
      jobLink: '',
      resume: null,
    },
    ...(props ?? {}),
  });

  return form;
};
