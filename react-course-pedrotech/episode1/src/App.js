import './App.css';

function App() {
  return (
    <div className="App">
      <Job salary={10000} position="Senior SDE" company="Amazon" />
    </div>
  );
}
const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};
export default App;
