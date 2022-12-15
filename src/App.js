import './App.css';
import image from './shoppingList.jpg';
import imageTwo from './shopping.jpg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <img src={image} width='250px' alt='shopping' />
      </div>
      <div className='container'>
        <h1>Grocery List</h1>
      </div>
      <GroceryList />
      <div className='container'>
        <img src={imageTwo} width='200px' alt='shopping man' />
      </div>
      
    </div>
  );
}

export default App;
