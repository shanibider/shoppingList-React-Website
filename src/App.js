import ExpenseItem from "./components/ExpenseItem";
import banana_img from "./images/banana.jpg"
import mango_img from "./images/mango.jpg"
import eggs_img from "./images/eggs.jpg"
import milk_img from "./images/milk.jpg"
function App() {
  const expense = [
    { title: 'banana', amount: '4$', image: banana_img },
    { title: 'mango', amount: '6$', image: mango_img },
    { title: 'eggs', amount: '5$', image: eggs_img },
    { title: 'milk', amount: '1$', image: milk_img },
  ];
  return (
    <div class="container">
      <div class="row">
        <div class="col-2">
        </div>
        <div class="col-8">
          <h2>my shopping list:</h2>
          <ExpenseItem
            title={expense[0].title}
            amount={expense[0].amount}
            image={expense[0].image}
          ></ExpenseItem>
          <ExpenseItem
            title={expense[1].title}
            amount={expense[1].amount}
            image={expense[1].image}
          ></ExpenseItem>
          <ExpenseItem
            title={expense[2].title}
            amount={expense[2].amount}
            image={expense[2].image}
          ></ExpenseItem>
          <ExpenseItem
            title={expense[3].title}
            amount={expense[3].amount}
            image={expense[3].image}
          ></ExpenseItem>
        </div>
        <div class="col-2">
        </div>
      </div>
    </div>
  );
}

export default App;
