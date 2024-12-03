import Header from "./components/Header/Header.js";
import Concept from "./components/Concept/Concept.js";
import Concepts from "./Concepts.js"

const App = () => {
  return (
    <div>
      <Header />
      <div id="concepts">
        {Concepts.map((Con) => (
          <Concept 
            title = {Con.title}
            image = {Con.image}
            description = {Con.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;