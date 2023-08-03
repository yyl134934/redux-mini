import Pagenation from "../../components/pagenation";
import { useDispatch, useSelector } from "../../store";
import { updatePage } from "./reducer";

function Blog() {
  const { page } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  const handlePrevPage = () => {
    dispatch(updatePage(page - 1));
  };
  const handleNextPage = () => {
    dispatch(updatePage(page + 1));
  };

  return (
    <div>
      <Pagenation
        page={page}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
    </div>
  );
}

export default Blog;
