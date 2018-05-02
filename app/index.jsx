import React from 'react';
import ReactDom from 'react-dom';
import AppBar from 'material-ui/AppBar';
import {pink500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: pink500,
  },
});

class App extends React.Component {
    render() {
        return (   
      <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <AppBar
                  title="Hello World!"
                  iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <h1>Material-UI Example</h1>
                <h2>example using Material-UI and React</h2>
                <RaisedButton label="Raised Button" secondary={true} />
                <FlatButton label="Flat Button" secondary={true}/>
            </div>
      </MuiThemeProvider>
        );
    } 
}

ReactDom.render(<App/>,document.getElementById('app'));