import axios from 'axios'; 
import Cookies from 'js-cookie'; 
import { apiLink } from '../auth/Api';

async function fetchUserData() {
  const token = Cookies.get("token"); 

  if (!token) {
    throw new Error('Token is missing');
  }

  console.log("Token:", token);

  try {
    const response = await axios.get(`${apiLink}/user/getUsers`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
  
    console.log("API Response:", response);
  
    if (response.data && response.data.data) {
      return response.data.data; // Adjusted based on typical API response format
    } else {
      throw new Error('Invalid data format received');
    }
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

export default fetchUserData;
