import React from 'react';

const Badge = ({
  icon,
  children,
}: {
  icon: React.ReactElement;
  children: React.ReactNode;
}) => {
  return (
    <div className=' flex items-center gap-2 text-center text-2xl sm:text-3xl'>
      {icon}
      <p>{children}</p>
    </div>
  );
};

export default Badge;
