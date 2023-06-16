import { useState, useEffect } from 'react';

interface Product {
  id: string;
  title: string;
  images: string[];
}

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_API_URL}`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching products');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, error, loading };
};

export default useFetchProducts;