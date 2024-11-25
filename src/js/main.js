import { loadHeaderAndFooter } from "./utils.mjs";
import Alert from "./Alert.js";

// Get header and footer
loadHeaderAndFooter();

const listAlert = new Alert();
listAlert.getAlerts();
