import { connect } from 'react-redux';
import './App.css';

function App(props) {
  console.log("🚀 ~ file: App.js ~ line 5 ~ App ~ props", props)
  return (
    <div>
      
    </div>
  );
}



const mapStateToProps = (state) => ({
  services: state.services,
});
// const mapDispatchToProps = {
//   removeFromCart: removeFromCart,
// };

export default connect(mapStateToProps)(App);