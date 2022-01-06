import {Form} from "./Components/Form";
import {Table} from "./Components/tableComponent";
import {Init} from "./Components/initialize";

function App() {
  return (
    <div className="container">
        <Init/>
      <Form/>
        <Table/>
    </div>
  );
}

export default App;
