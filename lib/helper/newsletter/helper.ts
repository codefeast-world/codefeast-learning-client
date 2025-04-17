interface ApiResponse {
    data?: unknown;
    error?: string;
}

const subscribeNewsletter = async (email: string): Promise<ApiResponse> => {
    try {
        const response = await fetch(`${process.env.SERVER}/api/newsletter`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                server: `${process.env.SERVER_AUTH_TOKEN}`
            },
            body: JSON.stringify({ email })
        });

        const data: unknown = await response.json(); 

        if (!response.ok && typeof data === 'object' && data !== null) {
            const errorData = data as { error?: { code?: number }; message?: string };
            if (errorData.error?.code === 11000) {
                throw new Error(`Email ${email} is already subscribed.`);
            }
            throw new Error(errorData.message || 'Failed to subscribe to newsletter');
        }

        return { data };
    } catch (error: unknown) {
        console.error('Error in subscribeNewsletter:', error);
        return { error: error instanceof Error ? error.message : 'An unexpected error occurred' };
    }
};

export default subscribeNewsletter;