import React from "react";

const AboveFooter = () => {
  return (
    <div className="bg-pink-50 py-8">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Free Delivery
            </h3>
            <p className="text-sm sm:text-base text-gray-500 mt-2">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              90 Days Return
            </h3>
            <p className="text-sm sm:text-base text-gray-500 mt-2">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Secure Payment
            </h3>
            <p className="text-sm sm:text-base text-gray-500 mt-2">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboveFooter;