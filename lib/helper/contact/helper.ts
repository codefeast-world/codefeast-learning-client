interface ApiResponse {
    data?: unknown;
    error?: string;
}

interface ErrorResponse {
    error?: {
        code?: number;
        keyValue?: {
            phoneNumber?: string;
        };
    };
    message?: string;
}

const addContactTicket = async (
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    subject: string,
    message: string
): Promise<ApiResponse> => {
    try {
        const response = await fetch(`${process.env.SERVER}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                server: `${process.env.SERVER_AUTH_TOKEN}`
            },
            body: JSON.stringify({ firstName, lastName, email, phoneNumber, subject, message })
        });

        const data: ErrorResponse = await response.json();

        if (!response.ok) {
            if (data?.error?.code === 11000) {
                throw new Error(`Phone number ${data.error.keyValue?.phoneNumber} is already registered.`);
            }
            throw new Error(data.message || 'Failed to add contact');
        }

        return { data };
    } catch (error: unknown) {
        console.error('Error in addContactTicket:', error);
        if (error instanceof Error) {
            return { error: error.message || 'An unexpected error occurred' };
        }
        return { error: 'An unexpected error occurred' };
    }
};

export default addContactTicket;