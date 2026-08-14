import React, { useState } from 'react';
import PageContainer from '../../components/layout/PageContainer';
import TableHeader from '../../components/tables/TableHeader';
import DataTable from '../../components/tables/DataTable';
import Pagination from '../../components/tables/Pagination';
import Button from '../../components/common/Button';
import { orders } from '../../data/orders';

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const columns = [
    { key: 'orderNumber', label: 'Order Number' },
    { key: 'customer', label: 'Customer' },
    { key: 'amount', label: 'Amount' },
    { key: 'status', label: 'Status' },
    { key: 'date', label: 'Date' },
  ];

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedData = orders.slice(startIdx, startIdx + itemsPerPage);

  return (
    <PageContainer>
      <TableHeader
        title="Orders Management"
        subtitle="View and manage all customer orders"
        actions={
          <Button variant="primary" size="md">
            New Order
          </Button>
        }
      />

      <DataTable columns={columns} data={paginatedData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </PageContainer>
  );
};

export default Orders;
