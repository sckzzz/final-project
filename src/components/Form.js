  import { Component } from '../core/Component';

  export class Form extends Component {
    setup(props) {
      this.state = {
        amount: ''
      }
      this.onSubmitCallback = props.onSubmit;

      this.$rootElement = document.createElement('form');
      this.$rootElement.className = 'donate-form';
      this.$lableElement = document.createElement('label');
      this.$lableElement.className = 'donate-form__input-label';
      this.$lableElement.textContent = 'Введите сумму в $'
      this.$inputElement = document.createElement('input');
      this.$inputElement.className = 'donate-form__donate-input';
      this.$inputElement.name = 'amount';
      this.$inputElement.type = 'number';
      this.$inputElement.max = '100';
      this.$inputElement.min = '1';
      this.$inputElement.required = true;
      this.$buttonElement = document.createElement('button');
      this.$buttonElement.disabled = true;
      this.$buttonElement.className = 'donate-form__submit-button';
      this.$buttonElement.type = 'submit';
      this.$buttonElement.textContent = 'Задонатить';

      this.$input = this.$inputElement;
      this.$button = this.$buttonElement
      
      this.$rootElement.appendChild(this.$lableElement);
      this.$rootElement.appendChild(this.$inputElement);
      this.$rootElement.appendChild(this.$buttonElement);

      this.bindEvents()
    }
    
    bindEvents() {
      this.$input.addEventListener('input', this.handleInput.bind(this));
      this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));
    }

    get isValid() {
      const amount = +this.state.amount;
      return !isNaN(amount) && amount >= 1 && amount <= 100;
    }

    handleInput(event) {
      this.state.amount = event.target.value;
      this.$button.disabled = !this.isValid
    }

    handleSubmit(event) {
      event.preventDefault()
      if (this.isValid) {
        this.onSubmitCallback(+this.state.amount)
        this.state.amount = '';
        this.$input.value = ''
        this.$button.disabled = true
      }
    }
  }
