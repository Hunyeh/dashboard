import React from 'react';
import {  GridComponent, ColumnsDirective, Page, Search, Inject, ColumnDirective, Toolbar } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from "../data/data/dummy";
import { Header } from '../components';

const Employees = () => {
  const toolbarOptions = ['Search'];
  const editing = { allowDeleting: true, allowEditing: true }

  return (
    <div className='margin-2 md:margin-10 p-2 md:p-10 bg- white rounded-3xl'>
      <Header category='Page' title='Employees' />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={toolbarOptions}
        width='auto'
        pageSettings={{ pageCount : 5 }}
        editSettings={editing}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} /> )}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees;