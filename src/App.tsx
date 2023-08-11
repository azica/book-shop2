import Header from "./components/Header";
import BookList from "./components/BookList";
import Toast from "./components/Toast";

function App() {
  return (
    <div className="App">
      <Header />
      <BookList />
	  <Toast/>
    </div>
  );
}

export default App;
