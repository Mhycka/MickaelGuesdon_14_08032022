import React,{useState} from 'react'
import TableHeadTh from './headerTable';
import { UserContext} from './App'

/** Table Head */
function Header(){
    
  const value = React.useContext(UserContext); 

  //used to avoid that 2 arrows are "clicked" at the same time
  const [arrowClicked,setArrowClicked]=useState(false)
  
  return(
      <thead className="dataTableThead">
          <tr className="dataTableHeadTr">
              {Object.entries(value.label[0]).map((name,index)=>
                <TableHeadTh 
                  arrowClicked={arrowClicked} 
                  setArrowClicked={setArrowClicked} 
                  key={name[0]} 
                  dataType={name[0]} 
                  id={"DataTable-th-"+index} 
                  thName={name[1]} 
                />)} 
          </tr>
      </thead> )
}

export default Header