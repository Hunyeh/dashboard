import React from 'react';
import {  GridComponent, ColumnsDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from "../data/data/dummy";
import { Header } from '../components';

const Orders = () => {
  return (
    <div className='margin-2 md:margin-10 p-2 md:p-10 bg- white rounded-3xl'>
      <Header category='Page' title='Orders' />
      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Orders