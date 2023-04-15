import React from "react";

type Props = {};

function ProductCard({}: Props) {
  return (
    <div className="bg-gray-200 rounded-lg p-2 space-y-8 border border-gray-300">
      <div className="w-full aspect-square bg-gray-300 rounded-lg animate-pulse"></div>
      <div className="bg-gray-50 rounded-lg p-2">
        <h3>Product</h3>
      </div>
    </div>
  );
}

export default ProductCard;
