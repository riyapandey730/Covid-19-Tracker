import React, { useEffect ,useState} from 'react';
import './Covid.css';
const Covid=()=>
{
    const[data,setdata]=useState([]);
    const getcoviddata=async()=>
    {try{
        const res= await fetch('https://data.covid19india.org/data.json');
         const data=await res.json();
         console.log(data.statewise[0]);
         setdata(data.statewise[0]);
    }
    catch(err)
    {
       console.log(err);
    }
     
    }
    useEffect(()=>
    {
//getcoviddata();
    },[])
    return(
        <React.Fragment>
        <section>
        <h1> LIVE</h1>
        <h2>COVID-19 TRACKER</h2>
        <ul>
        <li className="card">
        <div className="card_main">
        <div className="card_inner"> </div>
        <p className="card_name"> <span>OUR </span>COUNTRY</p>
        <p className="card_total card_small">INDIA</p>
        </div>
        </li>
        <li className="card">
        <div className="card_main">
        <div className="card_inner"> </div>
        <p className="card_name"> <span>TOTAL </span>RECOVERED</p>
        <p className="card_total card_small">{data.recovered}</p>
        </div>
        </li>
        <li className="card">
        <div className="card_main">
        <div className="card_inner"> </div>
        <p className="card_name"> <span>TOTAL</span>CONFIRMED</p>
        <p className="card_total card_small">{data.confirmed}</p>
        </div>
        </li>
        <li className="card">
        <div className="card_main">
        <div className="card_inner"> </div>
        <p className="card_name"> <span>TOTAL </span>DEATHS</p>
        <p className="card_total card_small">{data.deaths}</p>
        </div>
        </li>
        <li className="card">
        <div className="card_main">
        <div className="card_inner"> </div>
        <p className="card_name"> <span>TOTAL </span>ACTIVE</p>
        <p className="card_total card_small">{data.active}</p>
        </div>
        </li>
        <li className="card">
        <div className="card_main">
        <div className="card_inner"> </div>
        <p className="card_name"> <span>TOTAL </span>UPDATED</p>
        <p className="card_total card_small">{data.lastupdatedtime}</p>
        </div>
        </li>
        </ul>
        </section>
        </React.Fragment>
    );
}
export default Covid;