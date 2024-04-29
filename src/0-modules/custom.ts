/**
 * Custom module functions
 */
export namespace Customs {
  /**
   * Simple alert pop up
   */
  export const simpleAlert = (): void => {
    const ui = SpreadsheetApp.getUi();
    ui.alert("This is a simple alert!");
  };

  /**
   * Simple dialog pop up
   */
  export const simpleDialog = (): void => {
    const ui = SpreadsheetApp.getUi();
    const response = ui.prompt(
      "Text input",
      "Give me some text:",
      ui.ButtonSet.YES_NO
    );

    if (response.getSelectedButton() == ui.Button.YES) {
      ui.alert(`The input: ${response.getResponseText()}.`);
    } else if (response.getSelectedButton() == ui.Button.NO) {
      ui.alert("The user didn't want to provide an input.");
    } else {
      ui.alert("The user clicked the close button in the dialog's title bar.");
    }
  };
}
