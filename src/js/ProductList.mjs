

export default class ProductListing{
  constructor(category,dataSource,htmllistElement){
    this.category = category;
    this.source = this.dataSource
    this.element = htmllistElement; 
  }

  async init() {
    const list = await this.dataSource.getData();
  }

}

