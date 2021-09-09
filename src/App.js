import "./App.css";
import { EasybaseProvider, useEasybase } from "easybase-react";
import { useEffect } from "react";
import ebconfig from "./ebconfig";
import { Grid, Paper } from "@material-ui/core";
import HeightContainer from "./HeightContainer";

const App = () => {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} m={3} l={3}>
          <Paper>Game</Paper>
        </Grid>
        <Grid item xs={12} sm={6} m={3} l={3}>
          <Paper>Game</Paper>
        </Grid>
        <Grid item xs={12} sm={6} m={3} l={3}>
          <Paper>Game</Paper>
        </Grid>
        <Grid item xs={12} sm={6} m={3} l={3}>
          <Paper>Game</Paper>
        </Grid>
        <Grid item xs={12} sm={6} m={3} l={3}>
          <Paper>Game</Paper>
        </Grid>
      </Grid>
      <HeightContainer />
    </EasybaseProvider>
  );
};

function Notes() {
  const { Frame, sync, configureFrame } = useEasybase();
  console.log(Frame);

  useEffect(() => {
    configureFrame({ tableName: "NOTES", limit: 10 });
    sync();
  }, [configureFrame, sync]);

  const noteRootStyle = {
    border: "2px #0af solid",
    borderRadius: 9,
    margin: 20,
    backgroundColor: "#efefef",
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
    position: "absolute",
    left: 10,
    top: 10,
    fontSize: 21,
  };

  const handleClick = () => {
    const newTitle = prompt("Please enter a title for your note");
    const newDescription = prompt("Please enter your description");

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
