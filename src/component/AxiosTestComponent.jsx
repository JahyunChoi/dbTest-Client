import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AxiosTestComponent() {
    const baseUrl = 'http://localhost:8200';

    const [data, setData] = useState('');
    const [data2, setData2] = useState('');
    const [data3, setData3] = useState('');

    useEffect(() => {
        //컨포넌트가 마운트될때 실행
        springDataSet();
    }, []);

    async function springDataSet() {
        await axios
            .get(baseUrl + '/data-test')
            .then((res) => {
                console.log(res);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const forSubmit = async (e) => {
        e.preventDefault();

        await axios
            .post(baseUrl + '/data-test/click', {
                data2: data2,
            })
            .then((res) => {
                alert('보내고 다시받은데이터\n' + JSON.stringify(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const dataChange = (e) => {
        setData2(e.target.value);
    };

    useEffect(() => {
        putSpringData();
    }, []);

    function putSpringData() {
        axios
            .get(baseUrl + '/test')
            .then((res) => {
                console.log(res.data);
                setData3(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <h1>AxiosTestComponent</h1>

            <h2>{data}</h2>
            <form onSubmit={forSubmit}>
                <input name="data2" value={data2} onChange={dataChange} placeholder="데이터2" />
                <button type="submit">보내기</button>
            </form>

            <div>
                <h2>연동데이터</h2>
                <div>
                    {data3
                        ? data3.map((datas) => (
                              <div key={datas.no}>
                                  <div>번호: {datas.no}</div>
                                  <div>타입: {datas.type}</div>
                                  <div>제목: {datas.title}</div>
                                  <div>내용: {datas.content}</div>
                              </div>
                          ))
                        : ''}
                </div>
            </div>
        </div>
    );
}

export default AxiosTestComponent;
