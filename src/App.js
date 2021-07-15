import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import CardsList from './components/CardsList';
import { cards } from './components/Cards.const';
import { nanoid } from 'nanoid';

export default function App() {
  return (
    <div className="App">
      <CardsList key={nanoid()}>
        <Card image={'http://placehold.it/318x180/'} item={cards[0]} />
        <Card item={cards[1]} />
      </CardsList>
    </div>
  );
}
