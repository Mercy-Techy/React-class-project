import Home from "./routes/home/home.component";
import { Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>I am the shop component</h1>;
};

//when you use index it is a short hand for index={true}. it means that is the default outlet for that particular route that will show with it then for other route u will need to add the path
const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Route>
  </Routes>
  )
};

export default App;
