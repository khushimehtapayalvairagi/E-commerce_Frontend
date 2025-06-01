import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Admin from "../Admin/components/Admin";


const AdminRouter =()=>{
   
        
          
            
  
    return(
        <div>
            <Routes>
                <Route path="/*" element={<Admin/>}>   </Route>
            </Routes>
        </div>
    )
}

export default AdminRouter;