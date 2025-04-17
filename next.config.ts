import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/meet',
                destination: 'https://meet.google.com/vpg-grvj-yiz?pli=1&authuser=0',
                permanent: false
            }
        ];
    }
};

export default nextConfig;
