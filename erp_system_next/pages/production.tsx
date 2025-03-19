import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Production = () => (
    <div>
        <Header />
        <h2>Production Details</h2>
        <div>
            <h3>Work Orders</h3>
            {/* Placeholder for work orders data */}
            <p>Details about work orders will be displayed here.</p>
        </div>
        <div>
            <h3>Stock Entry</h3>
            {/* Placeholder for stock entry data */}
            <p>Details about stock entries will be displayed here.</p>
        </div>
        <div>
            <h3>Job Cards</h3>
            {/* Placeholder for job cards data */}
            <p>Details about job cards will be displayed here.</p>
        </div>
        <div>
            <h3>Downtime Entries</h3>
            {/* Placeholder for downtime entries data */}
            <p>Details about downtime entries will be displayed here.</p>
        </div>
        <div>
            <h3>Reports</h3>
            {/* Placeholder for reports data */}
            <p>Details about reports will be displayed here.</p>
        </div>
        <div>
            <h3>Operations</h3>
            {/* Placeholder for operations data */}
            <p>Details about operations will be displayed here.</p>
        </div>
        <div>
            <h3>BOM</h3>
            {/* Placeholder for BOM data */}
            <p>Details about BOM will be displayed here.</p>
        </div>
        <Footer />
    </div>
);

export default Production;
