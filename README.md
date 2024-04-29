# Google Apps (Type)Script
This repository contains a simple example to start a Google Apps Script project using Typescript. No transpilation is needed, you can deploy the project using `clasp push`.

## File numeration
The execution order is name-sensitive; as a result, the module directory has a `0-` prefix. We recommend continuing to use numbers to name your subsequent modules and files within the `src/` directory, like the example below:

```
src/
    0-module/
    1-utilities/
    2-macros/
    3-spagetti/
    ...
    main.ts
```

### Identify your script
In the `.clasp.json` file, replace the scriptId field with the ID of the target script.

```json
{
  "scriptId": "YOUR-SCRIPT-ID",
  "rootDir": "./src"
}
```

On Windows, the root directory must have backslashes to function properly.

```json
{
  "scriptId": "YOUR-SCRIPT-ID",
  "rootDir": ".\\src"
}
```

## Useful URLs
- [clasp Repository](https://github.com/google/clasp)
- [Script Executions](https://script.google.com/home/executions)
- [Google Apps APIs Reference](https://developers.google.com/apps-script/reference/)
