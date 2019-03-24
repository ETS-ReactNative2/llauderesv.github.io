import React from 'react';

import Lists from '../Lists';
import './index.scss';

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="page-title">Skills</h1>
      <Lists
        title="Front-End Stack"
        items={['JavaScript', 'React JS', 'Angular JS', 'Redux']}
        collapsible={true}
      />
      <Lists
        title="Back-End Stack"
        items={['PHP', 'C#', 'ASP.NET MVC', 'NodeJs (Express)']}
        collapsible={true}
      />
      <Lists
        title="Database Stack"
        items={['SQL', 'MySQL & MSSQL', 'MongoDB', 'SSDT', 'Data Warehouse']}
        collapsible={true}
      />
      <Lists
        title="Mobile Development Stack"
        items={['Xamarin.iOS', 'Xamarin.Android']}
        collapsible={true}
      />
    </div>
  );
};

export default Skills;
