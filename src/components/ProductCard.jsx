import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const accessToken = await getAccessToken();

        const response = await axios.get('https://hongfah-server.onrender.com/api/v1.0/product/getall', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  const searched = (keyword) => (item) => {
    return item.name.toLowerCase().includes(keyword.toLowerCase());
  };

  const getAccessToken = async () => {
    try {
      const response = await axios.post('https://hongfah-server.onrender.com/api/v1.0/auth', {
        // Include any required data for authentication (e.g., username, password)
      });

      return response.data.access_token;
    } catch (error) {
      console.error('Error getting access token:', error);
      // Handle the error appropriately
      throw error;
    }
  };

  return (
    <div>
      <div>
        {products.filter(searched(keyword)).map((data, idx) => (
          <div key={idx}>
            <div>{data.point} PV</div>
            <div>
              <div>
                <img src={data.images[0]} alt="" />
              </div>
              <div>
                <h5>{`${data.name && data.name.substring(0, 10)}...`}</h5>
              </div>
            </div>
            <div>
              <div><h5>K {data.price} </h5></div>
              <div>
                <NavLink to={`/product/${data.id}`}>View Details</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
