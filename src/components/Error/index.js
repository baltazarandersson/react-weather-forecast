import "./index.css";

export default function Error({ error }) {
  return (
    <>
      <div className="error">
        <div>{`ERROR ${error.cod} :`}</div>
        <div>{error.message}</div>
      </div>
      <div className="error-tip">
        <div>{"Try with this format :"}</div>
        <div>{"city, country abbreviation"}</div>
        <div>{"example: Montevideo, UY"}</div>
      </div>
    </>
  );
}
