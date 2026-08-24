import CoachesSection from '@/Sections/Fitora/Coaches&Trainers/Coaches';
import Trainers from '@/Sections/Fitora/Coaches&Trainers/Trainers';

const page = () => {
    return (
        <div>
            <h1 className='mb-2 text-red-500'>Note: Change the project UI & Theme</h1>
            <CoachesSection />
            <Trainers />
        </div>
    );
};

export default page;