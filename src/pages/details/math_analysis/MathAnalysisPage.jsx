import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { contentsLength } from "./mathAnalysisContents";

const MathAnalysisPage = () => {
  return (
    <>
      <Outlet />
      <Breadcrumbs path="algebra" length={contentsLength} />
    </>
  );
};

export default MathAnalysisPage;