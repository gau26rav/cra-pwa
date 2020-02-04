import React, {useState, useEffect, useRef} from 'react';
import { fetchEmpList } from './EmpServices';
import './employee.css';

const  Employees = React.memo(() => {
     const [empCollection, setEmpCollection] = useState([]);
    const testRef = useRef(null);
    async function getList(){
        let list = await fetchEmpList();
        setEmpCollection(list);
    }

    const  focusOnRef = ()=>{
        console.log(testRef);
        testRef && testRef.current.focus();
    }
    
     useEffect(() => {
        getList();
    }, []);

    const getValue = (amt)=>{
        return new Promise((resolve, reject)=>{
            if(amt>10){
                resolve('Resolved Amount is ' + amt);
                console.log('Hey Console')
            }
            reject('Rejection for amount '+ amt)
        })
    }
    
    return (
        <div id="emp-container">
            <table id="emp-list">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Address</td>
                    </tr>
                </thead>
                <tbody>
                {empCollection.length ? empCollection.map((emp)=>(
                    <tr className="row" key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td> 
                        <td>{emp.phone}</td>
                        <td>{emp.address.suite} {emp.address.street} </td>
                        </tr>
                )): null}
                </tbody>
            </table>
            <div>
                <input type="text" placeholder="test for ref" ref={testRef} />
                <button onClick={focusOnRef}>Click to FOCUS</button>
            </div>
        </div>
    )
})

export default Employees;
