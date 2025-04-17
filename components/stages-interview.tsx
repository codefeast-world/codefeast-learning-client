import { DeveloperCard } from "./developer-card";
import { StagesInterviewProps } from '@/types';

export function StagesInterview({ Heading, data }: StagesInterviewProps
) {
    return (
        <section className="container mx-auto py-16 md:py-24 w-[80%] text-center">
            <div className="space-y-8">
                <div>
                    <h2 className="text-[#188EF8] dark:text-white text-3xl md:text-4xl font-bold mb-8">
                       {Heading}
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((developer, index) => (
                        <DeveloperCard
                            key={index}
                            image={developer.image}
                            title={developer.title}
                            description={developer.description}
                            titleClassName="text-xl my-2" 
                            descriptionClassName="text-sm opacity-75" 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}