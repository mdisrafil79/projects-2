import React, { Suspense } from 'react';
import FoodCard from '../components/FoodCard';

const FoodList = async () => {
    const res = await fetch(
        'https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods',
        { cache: 'no-store' }
    );

    if (!res.ok) {
        throw new Error(`Failed to load menu: ${res.status}`);
    }

    const data = await res.json();
    const foods = data?.data;

    if (!Array.isArray(foods)) {
        throw new Error('Menu API returned an invalid foods list');
    }

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {foods.map((food) => (
                <FoodCard key={food.id} food={food} />
            ))}
        </div>
    );
};

const MenuPage = () => {
    return (
        <div>
            <h2>Menu page</h2>
            <Suspense fallback={<p>Loading menu...</p>}>
                <FoodList />
            </Suspense>
        </div>
    );
};

export default MenuPage;