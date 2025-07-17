import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';
    this.$titleElement = document.createElement('h2');
    this.$titleElement.className = 'donates-container__title';
    this.$titleElement.textContent = 'Список донатов';
    this.$donatesElement = document.createElement('div');
    this.$donatesElement.className = 'donates-container__donates'

    this.$rootElement.append(this.$titleElement, this.$donatesElement)

    this.$listContainer = this.$donatesElement
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement)
  }
}