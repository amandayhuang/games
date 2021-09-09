import './App.css';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect } from 'react';
import ebconfig from './ebconfig';

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center' }}>
      <EasybaseProvider ebconfig={ebconfig}>
        <Notes />
        <NewNoteButton />
      </EasybaseProvider>
    </div>
  );
}

function Notes() {
  const { Frame, sync, configureFrame } = useEasybase();
  console.log(Frame);

  useEffect(() => {
    configureFrame({ tableName: 'NOTES', limit: 10 });
    sync();
  }, []);

  const noteRootStyle = {
    border: '2px #0af solid',
    borderRadius: 9,
    margin: 20,
    backgroundColor: '#efefef',
    padding: 6,
  };

  return (
    <div style={{ width: 400 }}>
      {Frame().map((ele) => {
        console.log(ele);
        return (
          <div style={noteRootStyle}>
            <h3>{ele.title}</h3>
            <p>{ele.description}</p>
            <small>{String(ele.createdat).slice(0, 10)}</small>
          </div>
        );
      })}
    </div>
  );
}

function NewNoteButton() {
  const { Frame, sync } = useEasybase();

  const buttonStyle = {
    position: 'absolute',
    left: 10,
    top: 10,
    fontSize: 21,
  };

  const handleClick = () => {
    const newTitle = prompt('Please enter a title for your note');
    const newDescription = prompt('Please enter your description');

    Frame().push({
      title: newTitle,
      description: newDescription,
      createdat: new Date().toISOString(),
    });

    sync();
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      📓 Add Note 📓
    </button>
  );
}

export default App;
