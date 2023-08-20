import PropTypes from 'prop-types';
import './Item.css';

const Item = (props) => {
  const { List, Amount } = props;
  const status = Amount < 0 ? 'expense' : 'income';
  const symbol = Amount < 0 ? '-' : '+';
  //    const name=useContext(DataContext)
  return (
    <li className={status}>
      {List}
      <span>
        {symbol}
        {Math.abs(Amount)}
      </span>
    </li>
  );
};

Item.prototype = {
  List: PropTypes.string.isRequired,
  Amount: PropTypes.number.isRequired,
};
export default Item;
