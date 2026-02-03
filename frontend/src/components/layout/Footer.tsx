import React from 'react';
import { Button } from '../ui/Button';

interface FooterProps {
  onSaveDraft: () => void;
  onSaveAndContinue: () => void;
  isLoading?: boolean;
  isValid?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onSaveDraft,
  onSaveAndContinue,
  isLoading = false,
  isValid = true,
}) => {
  return (
    <div className="w-full flex gap-4 mt-8">
      <Button
        variant="secondary"
        size="md"
        fullWidth
        onClick={onSaveDraft}
        disabled={isLoading}
      >
        Save Draft
      </Button>
      <Button
        variant="primary"
        size="md"
        fullWidth
        onClick={onSaveAndContinue}
        disabled={isLoading || !isValid}
      >
        {isLoading ? 'Saving...' : 'Save & Continue'}
      </Button>
    </div>
  );
};
