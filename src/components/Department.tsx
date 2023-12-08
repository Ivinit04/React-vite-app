// src/DepartmentListComponent.tsx
import React, { useState } from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Checkbox } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import Department from '../DepartmentModel';

interface DepartmentListComponentProps {
  departments: Department[];
}

const DepartmentListComponent: React.FC<DepartmentListComponentProps> = ({ departments }) => {
  const [openDepartments, setOpenDepartments] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleClick = (department: string) => {
    if (openDepartments.includes(department)) {
      setOpenDepartments((prev) => prev.filter((d) => d !== department));
    } else {
      setOpenDepartments((prev) => [...prev, department]);
    }
  };

  const handleSelect = (item: string) => {
    // Check whether the department checkbox is checked or unchecked
    const isDepartmentChecked = selectedItems.includes(item);

    // Toggle the selection state of the item
    if (selectedItems.includes(item)) {
      setSelectedItems((prev) => prev.filter((i) => i !== item));
    } else {
      setSelectedItems((prev) => [...prev, item]);
    }

    // Check or uncheck the sub-department checkboxes based on the department checkbox state
    const department = departments.find((dep) => dep.department === item);
    if (department) {
      const subDepartments = department.sub_departments;

      if (isDepartmentChecked) {
        // If the department checkbox is checked, check its sub-department checkboxes
        setSelectedItems((prev) => prev.filter((i) => !subDepartments.includes(i) && i !== item)
        );
        
      } else {
        // If the department checkbox is unchecked, uncheck its sub-department checkboxes
        setSelectedItems((prev) => [...prev, ...subDepartments]);
      }
    
      
    }
  };

  return (
    <List>
      {departments.map((department) => (
        <React.Fragment key={department.department}>
          <ListItemButton onClick={() => handleClick(department.department)}>
            <ListItemIcon>
              {openDepartments.includes(department.department) ? <Remove /> : <Add />}
            </ListItemIcon>
            <ListItemText primary={department.department} />
            <Checkbox
              checked={selectedItems.includes(department.department)}
              onChange={() => handleSelect(department.department)}
            />
          </ListItemButton>
          <Collapse in={openDepartments.includes(department.department)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.sub_departments.map((subDepartment) => (
                <ListItemButton
                  key={subDepartment}
                  onClick={() => handleSelect(subDepartment)}
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary={subDepartment} />
                  <Checkbox
                    checked={selectedItems.includes(subDepartment)}
                    onChange={() => handleSelect(subDepartment)}
                  />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentListComponent;
