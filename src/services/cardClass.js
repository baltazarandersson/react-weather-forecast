export default function cardClass(type) {
  let className;
  if (type === "wind" || type === "humidity") {
    className = "highlight-card";
  } else {
    className = "highlight-card card-small";
  }
  return className;
}
