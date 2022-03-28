import Header from '../Components/Header';
import Form from '../Components/Form';



/** Homepage
 * @param {function} handleSubmit- put the new employee in the state
 */
function EmployeeCreation ({handleSubmit}){

    return (
        <div>
            <Header />
            <div className="container">
                <h2>Create Employee</h2>
                <Form handleSubmit={handleSubmit} />
            </div>
         </div>
      );
}

export default EmployeeCreation