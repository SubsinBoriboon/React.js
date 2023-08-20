import { useState } from 'react';

const SingleContent = (props) => {
  const { title, description } = props.data;
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="container">
      <header>
        <h2>{title}</h2>
        <button onClick={() => setShowContent(!showContent)}>ดูข้อมูล</button>
      </header>
      {/* showcontent เป็นจริงถึงจะ show */}
      {showContent && <p>{description}</p>}
    </div>
  );
};
export default SingleContent;
