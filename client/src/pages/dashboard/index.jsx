import { useUser } from '@clerk/clerk-react'
import { FinancialRecordForm } from './financial-record-form';
import { FinancialRecordList } from './financial-record-list';
import "./financial-record.css";
import { useFinancialRecords } from '../../contexts/financial-record-context';

export const Dashboard = () => {

    const {user} = useUser();
    const { records = [] } = useFinancialRecords(); // Default to an empty array

    // Calculate total amount using forEach
    let totalAmount = 0;
    records.forEach((record) => {
        totalAmount += record.amount;
    });
 
    return (
    <div className="dashboard-container">
        <h1>Welcome {user?.firstName}! Here are Your Finances:</h1>
        <FinancialRecordForm />
        <div>Total Monthly:  ${totalAmount.toFixed(2)}</div>
        <FinancialRecordList />
        
    </div>

    );
};