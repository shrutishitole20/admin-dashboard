import React, { useState } from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Input from '../../components/forms/Input';
import Select from '../../components/forms/Select';
import FormField from '../../components/forms/FormField';
import Button from '../../components/common/Button';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product submitted:', formData);
  };

  return (
    <PageContainer>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Add New Product</h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          <FormField label="Product Name" required className="mb-6">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
            />
          </FormField>

          <FormField label="Category" required className="mb-6">
            <Select
              name="category"
              value={formData.category}
              onChange={handleChange}
              options={[
                { label: 'Electronics', value: 'electronics' },
                { label: 'Clothing', value: 'clothing' },
                { label: 'Home', value: 'home' },
                { label: 'Sports', value: 'sports' },
              ]}
            />
          </FormField>

          <FormField label="Price" required className="mb-6">
            <Input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              step="0.01"
            />
          </FormField>

          <FormField label="Stock Quantity" required className="mb-6">
            <Input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Enter stock quantity"
            />
          </FormField>

          <FormField label="Description" className="mb-8">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </FormField>

          <div className="flex gap-4">
            <Button type="submit" variant="primary" size="md">
              Add Product
            </Button>
            <Button type="button" variant="secondary" size="md">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </PageContainer>
  );
};

export default AddProduct;
