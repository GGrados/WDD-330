import { renderListWithTemplate } from "./utils.mjs";

function renderAlert(data) {
  return `<p style="background-color: ${data.background};color: ${data.color};">${data.message}</p>`;
}

export default class Alert {
  constructor() {
    this.path = "../json/alerts.json";
    this.alertsData = [];
  }
  async getAlerts() {
    const parent = document.querySelector(".alert-list");
    this.alertsData = await fetch(this.path)
      .then((result) => result.json())
      .catch((err) => {
        console.error(err);
      });
    renderListWithTemplate(renderAlert, parent, this.alertsData);
  }
}
