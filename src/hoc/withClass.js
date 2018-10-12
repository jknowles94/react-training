import React from 'react';

const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      // uses spread operater to pass all the props so they load in the component
      <WrappedComponent {..props}/>
    </div>
  )
}

export default withClass;

// Can also use statefull components to check if the user is signed in for example - a lot of third party packages use HOC 

// import React, {Component} from 'react';

// const withClass = (WrappedComponent, className) => {
//   return class extends Component {
//     render() {
//       return (
//         <div className={className}>
//           // uses spread operater to pass all the props so they load in the component
//           <WrappedComponent {..this.props}/>
//         </div>
//       )
//     }
//   }
// }

export default withClass;

// In the app component that will then be exported like the following

// export default withClass(app, classes.app);