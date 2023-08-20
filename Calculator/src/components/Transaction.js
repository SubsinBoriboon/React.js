import Item from './item';
import './Transaction.css';

const Transaction = (props) => {
  const { Items } = props;

  return (
    <div>
      <ul className="tran">
        {Items.map((element) => {
          return <Item {...element} key={element.id} />;
        })}
      </ul>
    </div>
  );
};
export default Transaction;
