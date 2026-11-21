import React, { Suspense } from 'react';
import FoodCard from '../components/FoodCard';

const getFoods = async () => {
    try {
        const res = await fetch(
            'https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods',
            { cache: 'no-store' }
        );

        if (!res.ok) {
            return { foods: [], error: true };
        }

        const data = await res.json();
        const foods = Array.isArray(data)
            ? data
            : data?.data ?? data?.foods ?? [];

        return { foods, error: false };
    } catch {
        return { foods: [], error: true };
    }
};

const FoodList = async () => {
    const { foods, error } = await getFoods();

    if (error) {
        return <p>Menu data could not be loaded.</p>;
    }

    if (foods.length === 0) {
        return <p>No menu items found.</p>;
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {foods.map((food, index) => (
                <FoodCard key={food.id ?? index} food={food} />
            ))}
        </div>
    );
};

const MenuPage = () => {
    return (
        <div>
            <h2>Menu Page</h2>
            <Suspense fallback={<p>Loading menu...</p>}>
                <FoodList />
            </Suspense>
        </div>
    );
};

export default MenuPage;
