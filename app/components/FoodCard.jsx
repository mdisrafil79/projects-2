import Image from "next/image";
import React from "react";

const FoodCard = ({ food }) => {
  const title = food?.dish_name ?? food?.title ?? food?.name ?? 'Menu item';
  const description = food?.cuisine ?? food?.description ?? 'Delicious menu item';

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image
          src={food?.image_link ?? 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'}
          alt={title}
          width={400}
          height={300}
          className="h-56 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {food?.category && <div className="badge badge-outline">{food.category}</div>}
          {food?.price != null && <div className="badge badge-outline">৳{food.price}</div>}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
