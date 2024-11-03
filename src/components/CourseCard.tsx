import React from 'react';

interface CourseCardProps {
  title: string;
  icon: React.ReactNode;
  ageRange: string;
  description: string;
  color: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, icon, ageRange, description, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className={`${color} p-6 flex items-center justify-center text-white`}>
        {icon}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">
            Ages {ageRange}
          </span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <button className="w-full bg-gray-50 text-gray-800 py-2 rounded-lg hover:bg-gray-100 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CourseCard;