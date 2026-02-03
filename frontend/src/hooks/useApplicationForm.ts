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
    .min(1, 'Job Domain is required'),
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
      domain: '',
      applicationDate: '',
      jobId: '',
      jobUrl: '',
      resume: null,
    },
    ...(props ?? {}),
  });

  return form;
};
