export const logMessage = (
  message: string,
  level: "log" | "warning" | "error",
) => {
  switch (level) {
    case "warning":
      console.warn(message);
      break;
    case "error":
      console.error(message);
    default:
      console.log(message);
      break;
  }
};
