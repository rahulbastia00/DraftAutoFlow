export interface WebhookData {
    jobDescription: string;
    resume?: File | null;
}

export interface WebhookResponse {
    success: boolean;
    message?: string;
    data?: any;
}

export class WebhookService {
    private static readonly webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

    static async submitToN8n(data: WebhookData): Promise<WebhookResponse> {
        try {
            if (!this.webhookUrl) {
                throw new Error('N8n webhook URL not configured');
            }

            console.log('🚀 Sending data to N8n webhook:', this.webhookUrl);
            console.log('📝 Job Description length:', data.jobDescription.length);
            console.log('📄 Resume file:', data.resume ? `${data.resume.name} (${data.resume.size} bytes)` : 'Not provided');

            // Create FormData for proper file handling
            const formData = new FormData();
            formData.append('jobDescription', data.jobDescription);

            if (data.resume) {
                formData.append('resume', data.resume, data.resume.name);
            }

            const response = await fetch(this.webhookUrl, {
                method: 'POST',
                body: formData,
            });

            const responseData = await response.text();
            console.log('✅ N8n webhook response status:', response.status);
            console.log('📥 N8n webhook response data:', responseData);

            if (!response.ok) {
                throw new Error(`Webhook request failed: ${response.status} ${response.statusText}`);
            }

            // Try to parse as JSON, fallback to text
            let parsedData;
            try {
                parsedData = JSON.parse(responseData);
            } catch {
                parsedData = responseData;
            }

            return {
                success: true,
                message: 'Data successfully sent to N8n webhook',
                data: parsedData,
            };
        } catch (error) {
            console.error('❌ Error sending data to N8n webhook:', error);

            return {
                success: false,
                message: error instanceof Error ? error.message : 'Unknown error occurred',
            };
        }
    }
}