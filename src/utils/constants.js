// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';
export const API_TIMEOUT = 30000; // 30 seconds

// Pagination
export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

// Date Formats
export const DATE_FORMAT = 'MM/DD/YYYY';
export const DATE_TIME_FORMAT = 'MM/DD/YYYY HH:mm:ss';
export const TIME_FORMAT = 'HH:mm:ss';

// Currency
export const DEFAULT_CURRENCY = 'USD';

// Validation Patterns
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_PATTERN = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
export const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

// User Roles
export const USER_ROLES = {
  ADMIN: 'admin',
  MODERATOR: 'moderator',
  USER: 'user',
};

// Status Options
export const STATUS_OPTIONS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PENDING: 'pending',
  ARCHIVED: 'archived',
};

// Order Status
export const ORDER_STATUS = {
  PENDING: 'Pending',
  PROCESSING: 'Processing',
  SHIPPED: 'Shipped',
  DELIVERED: 'Delivered',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled',
};

export default {
  API_BASE_URL,
  API_TIMEOUT,
  DEFAULT_PAGE_SIZE,
  PAGE_SIZE_OPTIONS,
  DATE_FORMAT,
  DATE_TIME_FORMAT,
  TIME_FORMAT,
  DEFAULT_CURRENCY,
  EMAIL_PATTERN,
  PHONE_PATTERN,
  PASSWORD_PATTERN,
  USER_ROLES,
  STATUS_OPTIONS,
  ORDER_STATUS,
};
