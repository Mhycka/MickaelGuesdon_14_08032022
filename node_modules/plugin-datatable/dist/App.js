import React,{useState} from 'react'
import './App.scss';
import RowTr from './row';
import ShowEntries from './Entries';
import DataTableFooter from './footer';
import DataTableHead from './Header';
import DataTableSearch from './Search';

export const UserContext = React.createContext();

/**Table component
 * @param {array} label - col names of the table
 * @param {array} data - data to display in the table
 */
function DataTables({label,data}) {
    
    const [employees,setEmployees]= useState(data)
    const [showEntries,setShowEntries]=useState(10)
    const [indexPages,setIndexPages]=useState(1)
 
    //control the .map() with slice 
    const sliceBegin= indexPages*showEntries-showEntries
    const sliceEnd= indexPages*showEntries

    return(
        <UserContext.Provider value={{label:label,employees:employees,setEmployees:setEmployees,showEntries:showEntries,setShowEntries:setShowEntries,indexPages:indexPages,setIndexPages:setIndexPages,sliceBegin:sliceBegin,sliceEnd:sliceEnd}}>
            <div className="dataTables-wrapper">
                <div className="dataTables-top">
                    <ShowEntries />
                    <DataTableSearch />
                </div>
                    <table className="dataTable-table">
                       <DataTableHead />
                        {employees.length>0 ?(
                            <tbody className="dataTable-body">
                                {employees.slice(sliceBegin,sliceEnd).map((employee,index)=>
                                    <RowTr key={index+employee.lastName} data={employee} />
                                )}
                           </tbody>):(
                           <tbody><tr className="datatable-blank"><th  colSpan="9">the database is empty !</th></tr></tbody>)}
                    </table>
                    <DataTableFooter/>
            </div>
        </UserContext.Provider>
    )
}

export default DataTables