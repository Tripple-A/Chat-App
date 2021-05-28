import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    this.element.reset()
    console.log('reset')
  }

  reset() {
    this.element.reset()
    
  }
}
console.log('hello controller')