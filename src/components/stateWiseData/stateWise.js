import React, {useState,useEffect} from 'react';
import "./stateWise.css";

const Statewise = () => {
    const [data, setData] = useState([]);

    const getData = async() => {
       const res = await fetch("https://data.covid19india.org/data.json");
       const data = await res.json();
       setData(data.statewise);
    }

    useEffect(() => {
        getData();
    },[]) ;

    return (
            <>
                <div className="container-fluid mt-5">
                    <div className="main-heading">
                        <h1 className="mb-5 text-center">India Covid-19 Dashboard</h1>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>State</th>
                                    <th>Confirmed</th>
                                    <th>Recovered</th>
                                    <th>Deaths</th>
                                    <th>Active</th>
                                    <th>Updated At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((val,index)=>{
                                        return (
                                            <tr key={index}>
                                                <th>{val.state}</th>
                                                <td>{val.confirmed}</td>
                                                <td>{val.recovered}</td>
                                                <td>{val.deaths}</td>
                                                <td>{val.active}</td>
                                                <td>{val.lastupdatedtime}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
    )
}

export default Statewise;