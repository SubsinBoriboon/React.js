import './App.css';
import data from '../src/data';
import { useState } from 'react';
import SingleContent from './Components/SingleContent';
function App() {
  const [content, setContent] = useState(data);
  // console.log(content);
  return (
    <div className="App">
      <main>
        {/* {JSON.stringify(data)} */}
        <div className="container">
          <h1>Document</h1>
          <div>
            {content.map((item, index) => {
              return (
                <div key={index} className="content">
                  <SingleContent data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
