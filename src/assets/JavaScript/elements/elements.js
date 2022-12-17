import { Header } from './sub_elements/header.js'
import { Body } from './sub_elements/body.js'
import { Footer } from './sub_elements/footer.js'

export default class Elements {
    constructor() {
      this.headerObject = new Header();
      this.bodyObject = new Body();
      this.footerObject = new Footer();      
      this.name = 'Elements';
    }

    getHeader() {
      return this.headerObject.getHead();
    }
    getBody() {
      return this.bodyObject;
    }
    getFooter() {
      return this.footerObject;
    }
  }