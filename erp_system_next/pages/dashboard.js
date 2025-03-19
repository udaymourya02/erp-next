import React from 'react';
import Link from 'next/link';

const Dashboard = () => {
    return (
        <div>
            <h1>Welcome to the ERP System Dashboard</h1>
            <nav>
                <ul>
                    <li><Link href="/accounting">Accounting</Link></li>
                    <li><Link href="/sales">Sales</Link></li>
                    <li><Link href="/inventory">Inventory</Link></li>
                    <li><Link href="/production">Production</Link></li>

                    <li><Link href="/manufacturing">Manufacturing</Link></li>
                    <li><Link href="/quality">Quality Control</Link></li>
                    <li><Link href="/crm">CRM</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/hr">HR and Payroll</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;
