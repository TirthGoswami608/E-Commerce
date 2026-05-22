// Utility helper functions

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price);
};

export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const truncateText = (text, length) => {
  return text.length > length ? text.substring(0, length) + '...' : text;
};
