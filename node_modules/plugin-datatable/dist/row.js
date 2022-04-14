import React from 'react';
import TdElement from './elementTable';

/**Row of the table
 * @param {array} data -data to display in the <td>
  */
function Row({data}){

    return(
        <tr className="dataTable-tr">
            {Object.values(data).map((typeData,index)=> 
             <TdElement  key={typeData+index} id={"DataTable-td-"+index} typeData={typeData} />
                )}
        </tr>
    )
}

export default Row