import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>프로필</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((c) => (
            <Customer key={c.id} customer={c} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
