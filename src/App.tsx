import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./graphql/query";

const App = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  console.log(data)
  return (<div>hi</div>);
}

export default App;