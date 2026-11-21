import React, { Suspense } from 'react';
import SearchFood from '../components/SearchFood';

const getFoodPromise = () =>
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods', {
        cache: 'no-store',
    }).then((res) => {
        if (!res.ok) {
            throw new Error(`Failed to load foods: ${res.status}`);
        }

        return res.json();
    });

const FoodPage = () => {
    const foodPromise = getFoodPromise();

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <SearchFood foodPromise={foodPromise} />
            </Suspense>
        </div>
    );
};

export default FoodPage;
