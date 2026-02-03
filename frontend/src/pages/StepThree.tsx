import React, { useState, useEffect } from 'react';
import { TextArea } from '../components/ui/TextArea';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

interface StepThreeProps {
    onBack?: () => void;
}

interface EmailContact {
    id: string;
    name: string;
    email: string;
    position: string;
    company: string;
    relevanceScore: number;
}

const StepThree: React.FC<StepThreeProps> = ({ onBack }) => {
    const [isGeneratingEmail, setIsGeneratingEmail] = useState(false);
    const [generatedEmail, setGeneratedEmail] = useState('');
    const [emailContacts, setEmailContacts] = useState<EmailContact[]>([]);
    const [customEmails, setCustomEmails] = useState<string[]>(['']);
    const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
    const [isSending, setIsSending] = useState(false);
    const [emailGenerated, setEmailGenerated] = useState(false);

    // Mock database of email contacts
    const mockEmailDatabase: EmailContact[] = [
        {
            id: '1',
            name: 'Sarah Johnson',
            email: 'sarah.johnson@techcorp.com',
            position: 'HR Manager',
            company: 'TechCorp',
            relevanceScore: 95
        },
        {
            id: '2',
            name: 'Michael Chen',
            email: 'michael.chen@innovatetech.com',
            position: 'Talent Acquisition Lead',
            company: 'InnovateTech',
            relevanceScore: 88
        },
        {
            id: '3',
            name: 'Emily Rodriguez',
            email: 'emily.r@startupx.io',
            position: 'People Operations',
            company: 'StartupX',
            relevanceScore: 82
        }
    ];

    useEffect(() => {
        // Simulate searching database for relevant contacts
        const timer = setTimeout(() => {
            setEmailContacts(mockEmailDatabase);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const generatePersonalizedEmail = async () => {
        setIsGeneratingEmail(true);
        
        // Simulate AI email generation
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const mockEmail = `Subject: Enthusiastic Data Science Professional Seeking Opportunities

Dear Hiring Manager,

I hope this email finds you well. I recently came across an exciting opportunity at your organization and wanted to express my strong interest in joining your team.

Based on my analysis of your job requirements, I believe my background aligns perfectly with what you're looking for:

• Strong expertise in Data Science and Machine Learning
• Experience with modern development practices
• Passion for innovative problem-solving
• Ready to contribute to remote/hybrid work environments

I've uploaded my resume for your review and would love the opportunity to discuss how my skills and enthusiasm can contribute to your team's success.

I'm particularly drawn to your company's mission and would be thrilled to bring my technical expertise and fresh perspective to help drive your projects forward.

Thank you for considering my application. I look forward to hearing from you soon.

Best regards,
[Your Name]

P.S. I'm immediately available for interviews and can start as soon as needed.`;

        setGeneratedEmail(mockEmail);
        setIsGeneratingEmail(false);
        setEmailGenerated(true);
    };

    const handleContactSelection = (contactId: string) => {
        setSelectedContacts(prev => 
            prev.includes(contactId) 
                ? prev.filter(id => id !== contactId)
                : [...prev, contactId]
        );
    };

    const addCustomEmail = () => {
        setCustomEmails(prev => [...prev, '']);
    };

    const updateCustomEmail = (index: number, value: string) => {
        setCustomEmails(prev => {
            const updated = [...prev];
            updated[index] = value;
            return updated;
        });
    };

    const removeCustomEmail = (index: number) => {
        setCustomEmails(prev => prev.filter((_, i) => i !== index));
    };

    const handleSendEmails = async () => {
        const totalRecipients = selectedContacts.length + customEmails.filter(email => email.trim()).length;
        
        if (totalRecipients === 0) {
            alert('Please select at least one recipient or add a custom email address.');
            return;
        }

        if (!generatedEmail.trim()) {
            alert('Please generate an email first.');
            return;
        }

        setIsSending(true);
        
        // Simulate sending emails
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setIsSending(false);
        alert(`Successfully sent personalized emails to ${totalRecipients} recipient(s)!`);
    };

    return (
        <div className="w-full space-y-6 sm:space-y-8">
            <div className="text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">AI-Powered Cold Email Generator</h2>
                <p className="text-sm sm:text-base text-gray-600">Generate personalized emails based on your application data</p>
            </div>

            {/* Email Generation Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4"> Generated Email Content</h3>
                
                {!emailGenerated ? (
                    <div className="text-center py-8">
                        <p className="text-gray-600 mb-4">Click below to generate a personalized cold email using AI analysis</p>
                        <Button
                            onClick={generatePersonalizedEmail}
                            disabled={isGeneratingEmail}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg"
                        >
                            {isGeneratingEmail ? ' Generating Email...' : ' Generate Personalized Email'}
                        </Button>
                    </div>
                ) : (
                    <div>
                        <TextArea
                            label="Generated Email"
                            value={generatedEmail}
                            onChange={(e) => setGeneratedEmail(e.target.value)}
                            rows={12}
                            helperText="You can edit this email before sending"
                        />
                        <div className="mt-4 flex gap-3">
                            <Button
                                onClick={generatePersonalizedEmail}
                                disabled={isGeneratingEmail}
                                className="bg-blue-500 hover:bg-blue-600 text-white"
                            >
                                 Regenerate
                            </Button>
                        </div>
                    </div>
                )}
            </div>

            {/* Recipients Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Database Contacts */}
                <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
                    <h3 className="text-base sm:text-lg font-semibold mb-4">📊 Contacts from Database</h3>
                    {emailContacts.length > 0 ? (
                        <div className="space-y-3">
                            {emailContacts.map(contact => (
                                <div key={contact.id} className="flex items-center space-x-3 p-3 bg-white rounded-lg border">
                                    <input
                                        type="checkbox"
                                        id={`contact-${contact.id}`}
                                        checked={selectedContacts.includes(contact.id)}
                                        onChange={() => handleContactSelection(contact.id)}
                                        className="w-4 h-4 text-green-600"
                                    />
                                    <div className="flex-1">
                                        <label htmlFor={`contact-${contact.id}`} className="cursor-pointer">
                                            <div className="font-medium">{contact.name}</div>
                                            <div className="text-sm text-gray-600">{contact.position} at {contact.company}</div>
                                            <div className="text-sm text-blue-600">{contact.email}</div>
                                        </label>
                                    </div>
                                    <div className="text-sm font-medium text-green-600">
                                        {contact.relevanceScore}% match
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-gray-500 text-center py-4">
                             Searching database for relevant contacts...
                        </div>
                    )}
                </div>

                {/* Custom Email Addresses */}
                <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4"> Manual Email Addresses</h3>
                    <p className="text-sm text-gray-600 mb-4">Add email addresses if not found in database</p>
                    
                    <div className="space-y-3">
                        {customEmails.map((email, index) => (
                            <div key={index} className="flex gap-2">
                                <Input
                                    type="email"
                                    placeholder="Enter email address"
                                    value={email}
                                    onChange={(e) => updateCustomEmail(index, e.target.value)}
                                    className="flex-1"
                                />
                                {customEmails.length > 1 && (
                                    <Button
                                        onClick={() => removeCustomEmail(index)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-3"
                                    >
                                        ✕
                                    </Button>
                                )}
                            </div>
                        ))}
                    </div>
                    
                    <Button
                        onClick={addCustomEmail}
                        className="mt-3 bg-orange-500 hover:bg-orange-600 text-white"
                    >
                        + Add Another Email
                    </Button>
                </div>
            </div>

            {/* Send Section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4"> Send Emails</h3>
                <div className="flex items-center justify-between">
                    <div className="text-gray-700">
                        <div className="font-medium">Ready to send to:</div>
                        <div className="text-sm">
                            • {selectedContacts.length} database contact(s)
                        </div>
                        <div className="text-sm">
                            • {customEmails.filter(email => email.trim()).length} custom email(s)
                        </div>
                        <div className="text-sm font-medium mt-1">
                            Total: {selectedContacts.length + customEmails.filter(email => email.trim()).length} recipient(s)
                        </div>
                    </div>
                    
                    <Button
                        onClick={handleSendEmails}
                        disabled={isSending || !emailGenerated}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg"
                    >
                        {isSending ? ' Sending...' : ' Send Personalized Emails'}
                    </Button>
                </div>
            </div>

            {onBack && (
                <div className="flex justify-start">
                    <button
                        onClick={onBack}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg transition-colors"
                    >
                        ← Back to Job Details
                    </button>
                </div>
            )}
        </div>
    );
};

export default StepThree;
