import './formComponent.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
const Formcomponent = (props) => {
  const [List, setList] = useState('');
  const [Amount, setAmount] = useState(0);
  const [formValid, setFormValid] = useState(false);
  const inputList = (event) => {
    setList(event.target.value);
  };
  const inputAmount = (event) => {
    setAmount(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault();

    const itemData = {
      id: uuidv4(),
      List: List,
      Amount: Number(Amount),
    };

    props.onAddItem(itemData);

    setList('');
    setAmount(0);
  };

  useEffect(() => {
    const checkData = List.trim().length > 1 && Amount !== 0;
    if (checkData) {
      setFormValid(true);
    }
  }, [List, Amount]);
  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="Form-control">
          <label>ชื่อรายการ</label>

          <input
            type="text"
            placeholder="ระบุชื่อรายการ"
            onChange={inputList}
            value={List}
          ></input>
        </div>
        <div className="Form-control">
          <label>จำนวนเงิน</label>
          <input
            type="number"
            placeholder="(+ รายรับ , -รายจ่าย)"
            onChange={inputAmount}
            value={Amount}
          ></input>
        </div>
        <div>
          <button type="submit" className="btn" disabled={!formValid}>
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};
export default Formcomponent;
