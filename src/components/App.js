import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: []
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    this.$totalAmount =  document.createElement('h1');
    this.$totalAmount.className = 'total-amount';
    this.$totalAmount.textContent = `Итого: $`

    this.$count = document.createElement('span')
    this.$count.textContent = `${this.state.total}`;

    this.$total = this.$count

    this.$totalAmount.appendChild(this.$count)
    this.$rootElement.appendChild(this.$totalAmount)
    const donateForm = new Form({
      onSubmit: this.onItemCreate.bind(this)
    });
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
    this.donateList = donateList

  }
  
  onItemCreate(amount) {
    const item = new ListItem({ amount });

    this.state.donates.push(item);
    this.donateList.addItem(item);

    this.state.total += amount;
    this.$total.textContent = this.state.total
  }
}




