function LastQuote({ author, quote }) {
  return (
    <div className="text-whitish p-10">
      <p>{quote}</p>
      <p className="p-4">{author}</p>
    </div>
  );
}
export default LastQuote;
