import axios from 'axios';
import React, { useEffect, useState } from 'react';

function SendAndGet() {
    const baseUrl = 'http://localhost:8200';

    const [data, setData] = useState('');
    const [dataLoaded, setDataLoaded] = useState('');

    const submitHandle = async (e) => {
        e.preventDefault();
        await axios
            .post(baseUrl + 'test2', {
                test2: data,
            })
            .then((res) => {
                console.log('보낸결과 : ', res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const dataChange = (e) => {
        setData(e.target.value);
    };
    const dataLoadHandle = async (e) => {
        axios
            .get(baseUrl + 'resultForTest2')
            .then((res) => {
                setDataLoaded(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1>SendAndGet</h1>
            <form onSubmit={submitHandle}>
                <input name="data" value={data} onChange={dataChange} placeholder="데이터" />

                <button type="submit">보내기</button>
            </form>
            <div>
                <p>저장된 데이터</p>
                <button onClick={dataLoadHandle}>받기</button>
                <div>
                    {dataLoaded && dataLoaded.map((datas) => ( // 데이터가 배열이라고 가정하고 map으로 각 요소를 렌더링
                        <div key={datas.no}> {/* 각 데이터 항목에 고유한 key 할당 */}
                            <p>DB: {datas.content}</p> {/* 각 데이터 항목의 content 속성을 표시 */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default SendAndGet;
