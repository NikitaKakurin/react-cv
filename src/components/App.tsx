import Footer from 'components/Footer';
import Header from 'components/Header';
import Main from 'components/Main';
import Cover from 'components/Cover';
function App() {
  return (
    <div className="container flex h-screen items-center justify-center">
      <div className="w-full">
        <Header />
        <Cover>
          <Main />
        </Cover>
      </div>
    </div>
  );
}

export default App;
