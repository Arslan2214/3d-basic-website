import { CanvasContainer } from "./components/CanvasContainer";
// import { Header } from "./components/Header";

function App() {
  return (
    <main className="overflow-x-hidden">
      <div className="h-screen w-full fixed top-0 z-10 hidden lg:block">
        <CanvasContainer />
      </div>
    </main>
  );
}

export default App;
