export const demoTest = (): string => {
  let url = "";
  switch (process.env.VUE_APP_API_ENV) {
    case "dev":
      url = "";
      break;
    case "stage":
      url = "";
      break;
    case "pre":
      url = "";
      break;
    case "prd":
      url = "";
      break;

    default:
      url = "";
      break;
  }
  return url;
};
