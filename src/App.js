import Form from "./Form";
import FormMemo from "./FormMemo";
import { useAxios } from "./useAxios";
import { useFetch } from "./useFetch";

function App() {
  const response = useAxios("https://jsonplaceholder.typicode.com/users/3");
  console.log("RES: ", response);
  return (
    <div className="App">
      {/* <Form /> */}
      <FormMemo />
    </div>
  );
}

export default App;
