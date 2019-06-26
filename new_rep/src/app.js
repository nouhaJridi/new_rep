import React from 'react';



class App extends React.Component {
  componentDidMount(){
    setTimeout(alert("HELLO"),2000);
  }
  componentWillUnmount(){alert("Good Bye");}

  

  render(){
    return null;
  }
}

export default App;