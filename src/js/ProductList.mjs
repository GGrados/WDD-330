import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `<li class="product-card">
          <a href="product_pages/index.html?product=${product.Id}">
            <img src="${product.Image}" alt="Image of ${product.Name}">
            <h3 class="card__brand">${product.Brand.Name}</h3>
            <h2 class="card__name">${product.Name}</h2>
            <p class="product-card__price">$${product.SuggestedRetailPrice}</p>
          </a>
        </li>`;
}
function getNumberElements(list, elementNumber) {
  let minNum = elementNumber;
  if (minNum > list.length) {
    minNum = list.length;
  }
  return list.slice(0, minNum);
}
export default class ProductListing {
  constructor(category, dataSource, htmlListElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.htmlListElement = htmlListElement;
  }

  async init() {
    const list = await this.dataSource.getData();
    renderListWithTemplate(
      productCardTemplate,
      this.htmlListElement,
      getNumberElements(list,4),
      "afterbegin",
      true,
    );
  }
}
