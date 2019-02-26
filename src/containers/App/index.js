import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//import Layout from '../../hoc/Layout';
// import Auth from '../containers/Login';

//import Logout from '../containers/Logout';
import * as actions from '../../Store/actions';

class App extends Component {
  componentDidMount () {
 //   this.props.onTryAutoSignup();
  }

  render () {
    // let routes = (
    //   <Switch>
    //     <Route path="/" component={Auth} />
    //     <Route path="/register" exact component={ComponentName} />
    //     <Redirect to="/" />
    //   </Switch>
    // );

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

    // return (
    //   <div>
    //     <Layout>
    //       {routes}
    //     </Layout>
    //   </div>
    // );

    return(
        <div>This App works !</div>
    )
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