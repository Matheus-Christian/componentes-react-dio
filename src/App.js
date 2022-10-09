import Item from './components/Item';
import Card from './components/Card';
const App = () => {
  return (
    <>
      <h1>Meu primeiro componente em React</h1>
        <ul>
          <Item>
            Item 1
          </Item>
          <Item>
            Item 2
          </Item>
          <Item>
            Item 3
          </Item>
        </ul>

        <Card></Card>
    </>
  )
}

export default App;