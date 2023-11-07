import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "1",
      title: "Car Insurance",
      date: new Date(),
      amount: "$420.69",
    },
    {
      id: "2",
      title: "Car Wash",
      date: new Date(),
      amount: "$69.420",
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
