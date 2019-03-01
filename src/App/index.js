import React, { Component } from 'react';
import {View,StyleSheet,Text,TextInput} from 'react-native';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//import Layout from './hoc/Layout';
 import Auth from './containers/Auth';

//import Logout from '../containers/Logout';
import * as actions from './Store/actions';

class App extends Component {
  componentDidMount () {
 //   this.props.onTryAutoSignup();
  }

  render () {
    let routes = (
      <Switch>
        <Route path="/" component={Auth} />
        {/* <Route path="/register" exact component={R} />
        <Route path="/otp" exact component={OTPPage} />
        <Redirect to="/" /> */}
      </Switch>
    );

    // if ( this.props.isAuthenticated ) {
    //   routes = (
    //     <Switch>
    //       <Route path="/dashboard" component={ComponentName} />
    //       <Route path="/orders" component={ComponentName} />
    //       <Route path="/logout" component={ComponentName} />
    //       <Route path="/" exact component={ComponentName} />
    //       <Redirect to="/" />
    //     </Switch>
    //   );
    // }

    return (
      <View style={{backgroundColor:'green',flex:1,height:'100vh',justifyContent:'center',alignItems:'center'}}> 
        {/* <Layout> */}
          {routes}
        {/* </Layout> */}
      </View>
    );

  }
}

// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.auth.token !== null
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onTryAutoSignup: () => dispatch( actions.authCheckState() )
//   };
// };

// export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
export default App;