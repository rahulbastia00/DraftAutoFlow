import React, { useRef } from 'react';
import clsx from 'clsx';
import { Upload, FileText, X } from 'lucide-react';

interface FileUploadProps {
  label?: string;
  error?: string;
  helperText?: string;
  accept?: string;
  onChange?: (file: File | null) => void;
  selectedFile?: File | null;
  onRemove?: () => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  error,
  helperText,
  accept = '.pdf,.doc,.docx',
  onChange,
  selectedFile,
  onRemove,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
    const [isDragActive, setIsDragActive] = React.useState(false);

    const handleDrag = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === 'dragenter' || e.type === 'dragover') {
        setIsDragActive(true);
      } else if (e.type === 'dragleave') {
        setIsDragActive(false);
      }
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragActive(false);

      const files = e.dataTransfer.files;
      if (files && files[0]) {
        onChange?.(files[0]);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.currentTarget.files;
      if (files && files[0]) {
        onChange?.(files[0]);
      }
    };

    const handleClick = () => {
      inputRef.current?.click();
    };

    const handleRemove = (e: React.MouseEvent) => {
      e.stopPropagation();
      onRemove?.();
    };

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
            <span className="text-gray-500 ml-1">(Optional)</span>
          </label>
        )}
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={handleClick}
          className={clsx(
            'border-2 border-dashed rounded-lg p-8 transition-all duration-200 cursor-pointer',
            {
              'border-orange-500 bg-orange-50': isDragActive,
              'border-gray-300 bg-gray-50 hover:border-orange-300 hover:bg-orange-50':
                !isDragActive && !error,
              'border-red-500 bg-red-50': error,
            }
          )}
        >
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            onChange={handleChange}
            className="hidden"
            aria-label="File upload input"
          />

          {selectedFile ? (
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-orange-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {selectedFile.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {(selectedFile.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
              <button
                onClick={handleRemove}
                className="p-1 hover:bg-gray-200 rounded-md transition-colors"
                type="button"
                aria-label="Remove file"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          ) : (
            <div className="text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">
                Drag and drop your file here
              </p>
              <p className="text-xs text-gray-500 mt-1">
                or click to select (PDF, DOC, DOCX)
              </p>
            </div>
          )}
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {helperText && !error && (
          <p className="text-gray-500 text-sm mt-2">{helperText}</p>
        )}
      </div>
    );
  };

FileUpload.displayName = 'FileUpload';
