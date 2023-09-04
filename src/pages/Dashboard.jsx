import React, { useEffect, useMemo, useState } from 'react'
import axios from "axios"
import {ResponsiveContainer ,BarChart , Bar , XAxis , YAxis } from "recharts"
const Dashboard = () => {
  const [productData, setProductData] = useState([])
  const FetchProductData = useMemo(() => {
    return async () => {
      try {
        const { data } = await axios.get('http://localhost:3004/products');
        setProductData(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
  }, []);

  useEffect(() => {
    FetchProductData(); 
  }, [FetchProductData]);
  return <>
   <h1>Product BarChart</h1>
  <div className='barchart'>
  <ResponsiveContainer width="50%" aspect={3}>
    <BarChart data={productData} width={400} height={400}> 
     <XAxis dataKey="title"/>
     <YAxis/>
     <Bar dataKey="price" fill='red'/>
    </BarChart>
  </ResponsiveContainer>
  </div>
  </>
}

export default Dashboard