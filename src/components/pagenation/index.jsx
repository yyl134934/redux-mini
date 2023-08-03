function Pagenation({ page, onPrevPage, onNextPage }) {
  return (
    <div>
      <button disabled={page === 0} onClick={onPrevPage}>
        上一页
      </button>
      {page}
      <button disabled={page === 10} onClick={onNextPage}>
        下一页
      </button>
    </div>
  );
}
export default Pagenation;
