import Theme from "../../components/thems";
import { useDispatch, useSelector } from "../../store";
import Blog from "../blog";
import { updateToggle } from "./reducer";

function Home() {
  const { toggle } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(updateToggle(!toggle));
  };

  return (
    <div>
      <Theme toggle={toggle} onToggle={handleToggle} />
      <Blog />
    </div>
  );
}

export default Home;
