import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AxiosTestComponent() {

    const baseUrl = "http://localhost:8200"

    const [data, setData] = useState('');

    useEffect(() => {
        springDataSet();
    }, [])


    async function springDataSet() {
        await axios   
        .get(baseUrl + "/data-test")
        .then((res)=>{
            console.log(res);
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

	
  return (
    <div>
        <h1>
            AxiosTestComponent
        </h1>
        <h2>
            {data}
        </h2>

    </div>
  )
}


export default AxiosTestComponent;