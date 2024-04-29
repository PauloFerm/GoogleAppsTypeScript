import { Customs } from "./0-modules/custom";

const onOpen = (): void => {
  const customMenuName = "Macros";

  /**
   * Example with Spreadsheets, can be used in Docs and Slides too
   */
  const ui = SpreadsheetApp.getUi();
  ui.createMenu(customMenuName)
    .addSubMenu(
      ui
        .createMenu("Alert")
        .addItem("Pop", "moduleAlert")
        .addItem("Dialog", "moduleDialog")
    )
    .addToUi();
};

const moduleAlert = Customs.simpleAlert;
const moduleDialog = Customs.simpleDialog;
