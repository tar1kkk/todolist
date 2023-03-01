import './App.css';
import Form from './components/form/Form';
import Items from './components/items/Items';

const App = () => {

  return (
    <div>
      <Form />
      <ul className='desc'>
        <li>id</li >
        <li>title</li>
        <li>descrpition</li>
        <li>status</li>
      </ul >
      <Items />
    </div >
  );
}

export default App;
