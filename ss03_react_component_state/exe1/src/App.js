import "./App.css";
import StudentInfo from "./components/student_info/StudentInfo";

function App() {
  const students = [
    {
      id: 1,
      name: "Nguyen Van A",
      age: 15,
      address: "Ha Noi",
    },
    {
      id: 2,
      name: "Nguyen Van A",
      age: 15,
      address: "Ha Noi",
    },
    {
      id: 3,
      name: "Nguyen Van A",
      age: 15,
      address: "Ha Noi",
    },
  ];
  return (
    <div>
      <StudentInfo list={students} />
    </div>
  );
}

export default App;
