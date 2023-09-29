import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: "kwy120",
    image: "https://picsum.photos/64/64",
    name: "김우영",
    birthday: "920120",
    gender: "남자",
    job: "회사원",
  },
  {
    id: "skyelly96",
    image: "https://picsum.photos/64/64",
    name: "권민아",
    birthday: "990102",
    gender: "여자",
    job: "비서",
  },
  {
    id: "tonabii",
    image: "https://picsum.photos/64/64",
    name: "지성온",
    birthday: "961212",
    gender: "남자",
    job: "대학생",
  },
];
function App() {
  return (
    <div>
      {customers.map((c) => (
        <Customer key={c.id} customer={c} />
      ))}
    </div>
  );
}

export default App;
