import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";
import "./App.css";
import Customer from "./components/Customer";

function App() {
  const [customers, setCustomers] = useState();
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    let timer = setInterval(progress, 20);
    callApi()
      .then((res) => setCustomers(res))
      .catch((err) => console.log(err));
  }, []);

  const callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };

  const progress = () => {
    setCompleted((prev) => (prev >= 100 ? 0 : prev + 1));
  };

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
          {customers ? (
            customers.map((c) => <Customer key={c.id} customer={c} />)
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">
                <CircularProgress variant="indeterminate" value={completed} />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
