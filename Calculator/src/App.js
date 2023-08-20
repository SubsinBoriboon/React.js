import './App.css';
import Formcomponent from './components/formComponent';
import Transaction from './components/Transaction';
import { useState, useEffect } from 'react';
import DataContext from './data/dataContext';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReportComponent from './components/reportComponent';
// import ReportComponent from './components/reportComponent'
const Title = () => (
  <h3 style={{ color: 'red', textAlign: 'center' }}>
    โปรแกรมบัญชีรายรับ-รายจ่าย
  </h3>
);
const design = { color: 'green', textAlign: 'center' };
const Description = () => <h3 style={design}>บันทึกข้อมูลบัญชีในแต่ละวัน</h3>;
function App() {
  const initialdata = [
    { id: 1, list: 'ค่ารักษาพยาบาล', Amount: '-1000' },
    { id: 2, list: 'เงินเดือน', Amount: '30000' },
    { id: 3, list: 'ค่าน้ำค่าไฟ', Amount: '-3000' },
    { id: 4, list: 'ค่าอาหาร', Amount: '-10000' },
  ];
  const [Items, setItems] = useState(initialdata);
  const onAddNewItem = (newItems) => {
    setItems((preItems) => {
      return [newItems, ...preItems];
    });
  };
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  useEffect(() => {
    const Amounts = Items.map((Items) => Items.Amount);
    const income = Amounts.filter((element) => element > 0).reduce(
      (total, element) => (total += element)
    );
    const expense = Amounts.filter((element) => element < 0).reduce(
      (total, element) => (total -= element),
      0
    );
    console.log('ยอดรายได้ =', income);
    console.log('ยอดรายจ่าย =', expense);
    setReportIncome(income);
    setReportExpense(expense);
  }, [Items, reportExpense, reportIncome]);

  return (
    <DataContext.Provider
      value={{ income: reportIncome, expense: reportExpense }}
    >
      <div className="Container">
        <Title />

        <Router>
          <div>
            <ul className="horizontal-menu">
              <div>
                <li>
                  <Link to="/">ข้อมูลบันชี</Link>
                </li>
                <li>
                  <Link to="/insert">บันทึกข้อมูล</Link>
                </li>
              </div>
            </ul>

            <Switch>
              <div>
                <Route path="/" exact>
                  <ReportComponent />
                </Route>

                <Route path="/insert" exact>
                  <Description />
                  <Formcomponent onAddItem={onAddNewItem} />
                  <Transaction Items={Items} />
                </Route>
              </div>
            </Switch>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
// React Router คือ การกดแล้วเปลี่ยนหน้าเว็บ ความเข้าใจแบบง่าย
