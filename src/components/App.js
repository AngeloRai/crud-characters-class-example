import { BrowserRouter, Route } from "react-router-dom";

import CharacterList from "./characterCRUD/CharacterList";
import CharacterDetail from "./characterCRUD/CharacterDetail";
import NewCharacter from "./characterCRUD/form/NewCharacter";
import EditCharacter from "./characterCRUD/form/EditCharacter";
import DeleteCharacter from "./characterCRUD/DeleteCharacter";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={CharacterList} />
      <Route exact path="/characters/:id" component={CharacterDetail} />
      <Route exact path="/character/new-character" component={NewCharacter} />
      <Route exact path="/character/:id/edit/" component={EditCharacter} />
      <Route exact path="/character/:id/delete" component={DeleteCharacter} />
    </BrowserRouter>
  );
}

export default App;
