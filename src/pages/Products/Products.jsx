import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import TableHeader from '../../components/tables/TableHeader';
import Button from '../../components/common/Button';

const Products = () => {
  const navigate = useNavigate();
  const [products] = useState([
    { id: 1, name: 'Product 1', category: 'Electronics', price: '$99.99', stock: 45, status: 'Active' },
    { id: 2, name: 'Product 2', category: 'Clothing', price: '$29.99', stock: 120, status: 'Active' },
    { id: 3, name: 'Product 3', category: 'Electronics', price: '$149.99', stock: 12, status: 'Active' },
    { id: 4, name: 'Product 4', category: 'Home', price: '$59.99', stock: 0, status: 'Out of Stock' },
  ]);

  return (
    <PageContainer>
      <TableHeader
        title="Products Management"
        subtitle="Manage your product inventory"
        actions={
          <Button variant="primary" size="md" onClick={() => navigate('/products/add')}>
            Add Product
          </Button>
        }
      />

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{product.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{product.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{product.price}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{product.stock}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageContainer>
  );
};

export default Products;
