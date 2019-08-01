import React from "react";
import Customer from "./Customer";
import Order from "./Order";
function AdminPage() {
    return (
        <div className="admin">
            <h1>ADMIN-PAGE</h1>
            <GasForm/>
            <GasTable/>
            
        </div>
    );
}

export default AdminPage;