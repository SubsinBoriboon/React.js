// import DataContext from "../data/dataContext"
import { useContext } from 'react';
import DataContext from '../data/dataContext';
import './reportComponent.css';

const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };
  return (
    <div>
      <h4>ยอดคงเหลือ (บาท)</h4>
      <h2>฿{formatNumber(income - expense)}</h2>
      <div className="report-container">
        <div>
          <h4>รายได้ทั้งหมด :</h4>
          <p className="report plus"> {formatNumber(income)}</p>
        </div>
        <div>
          <h4>รายจ่ายทั้งหมด :</h4>
          <p className="report minus">{formatNumber(expense)}</p>
        </div>
      </div>
    </div>
  );
};
export default ReportComponent;
