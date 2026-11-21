import React from 'react';
import Counter from '../components/Counter';

const DashboardPage = () => {
    console.log('Dashboard page rander')
    return (
        <div>
            <h2>Dashboard Page</h2>

            <Counter></Counter>
            <ul>
                <li>Dashboard Item 2</li>
                <li>Dashboard Item 2</li>
                <li>Dashboard Item 3</li>
            </ul>
        </div>
    );
};

export default DashboardPage;