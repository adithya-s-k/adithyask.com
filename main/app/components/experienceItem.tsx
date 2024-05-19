import React, { ReactNode } from 'react';

interface ExperienceItemProps {
  role: string;
  company: string;
  duration: string;
  image?: string;
  children?: ReactNode;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  role,
  company,
  duration,
  image,
  children,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between space-y-4">
      {image && (
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={`${company} Logo`}
            className="w-16 h-16 rounded-full"
          />
        </div>
      )}
      <div>
        <h3 className="text-xl font-semibold">{role}</h3>
        <p className="text-sm">{company}</p>
        {children}
      </div>
      <p className="text-sm">{duration}</p>
    </div>
  );
};

export default ExperienceItem;
