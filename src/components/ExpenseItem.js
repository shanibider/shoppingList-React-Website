
import './ExpenseItem.css'

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <div class="row">
                            <div className='expense-item__description'>{props.title}</div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                            </div>
                            <div class="col-8">
                                <div className='expense-item__price'>{props.amount}</div>
                            </div>
                            <div class="col-5">
                            </div>
                        </div>
                    </div>
                    <div class="col-8">
                    </div>
                    <div class="col-2">
                        <div><img class="expense-item__image" src={props.image} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;