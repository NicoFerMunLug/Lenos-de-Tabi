import React, { ReactNode } from 'react';

interface SectionHeaderProps {
  id: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ id, title, subtitle, children }) => {
  return (
    <div id={id} className="mb-12"> {/* Agregado el id aquí */}
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm md:text-base text-coffee-700">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default SectionHeader;