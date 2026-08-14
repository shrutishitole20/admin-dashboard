import React from 'react';

const TableHeader = ({ title, subtitle, actions, className = '' }) => {
  return (
    <div className={`flex flex-col md:flex-row md:items-center md:justify-between mb-6 ${className}`}>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        {subtitle && <p className="text-gray-600 text-sm mt-1">{subtitle}</p>}
      </div>
      {actions && <div className="flex gap-2 mt-4 md:mt-0">{actions}</div>}
    </div>
  );
};

export default TableHeader;
