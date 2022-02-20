import React from "react";

const ConfirmPage = ({ values, prevStep, submit}) => {
   
    return(
        //confirm page display all values
        <div className="form-container">
        <div className="form-group">
            <div className="form-group">
            <label htmlFor="name">First Name</label>
            <input type="text" className="form-control" name="firstName" value={values.firstName} />
           
        </div>
        <div className="form-group">
            <label htmlFor="email">Last Name</label>
            <input type="text" className="form-control" name="lastName" value={values.lastName} />
          
        </div>
        <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" className="form-control" name="age" value={values.age} />
            
         </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
            type="email"
            className="form-control"
            name="email"
            value={values.email}
           
            />
        </div>
        <div className="form-group">
            <label htmlFor="phoneNumber">Phone number</label>
            <input
            type="number"
            className="form-control"
            name="PhoneNumber"
            value={values.phoneNumber}
           
            />
            
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
            type="password"
            className="form-control"
            name="password"
            value={values.password}
            
            />
            
        </div>
        <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={values.confirmPassword}
           
            />
           
        </div>
         </div> 
            <br />
            <div className="flex flex-row justify-content-between">
            <div className="text-left">
                <button className="btn btn-primary" onClick={()=>prevStep()}>Back</button>
                </div>
                <div className="text-right">
                <button className="btn btn-primary" onClick={()=>submit()}>Submit</button>
                </div>
         </div>
        </div>
    )
}
export default ConfirmPage;