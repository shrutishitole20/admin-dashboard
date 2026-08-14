import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import TableHeader from '../../components/tables/TableHeader';
import DataTable from '../../components/tables/DataTable';
import Pagination from '../../components/tables/Pagination';
import Button from '../../components/common/Button';
import { users } from '../../data/users';

const Users = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
    { key: 'joinDate', label: 'Join Date' },
  ];

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedData = users.slice(startIdx, startIdx + itemsPerPage);

  return (
    <PageContainer>
      <TableHeader
        title="Users Management"
        subtitle="Manage and monitor all users in your system"
        actions={
          <Button variant="primary" size="md" onClick={() => navigate('/users/add')}>
            Add New User
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

export default Users;
