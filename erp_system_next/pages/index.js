import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Login to ERP System</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" required />
                </label>
                <label>
                    Select Department:
                    <select name="department" required>
                        <option value="accounting">Accounting</option>
                        <option value="sales">Sales</option>
                        <option value="inventory">Inventory</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="quality">Quality Control</option>
                        <option value="crm">CRM</option>
                        <option value="projects">Projects</option>
                        <option value="hr">HR and Payroll</option>
                    </select>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
