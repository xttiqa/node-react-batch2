import { Routes, Route, Outlet, Link, BrowserRouter} from "react-router";
import MainLayout from "../layout/MainLayout";
import CRUDaxios from "../pages/CRUDaxios";
import CRUDcategory from "../pages/CRUDcategory";
 
export default function MainRoutes() {
  return (
    <div> 
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<CRUDaxios />} />
            <Route path="category" element={<CRUDcategory />} />
 
            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 

 
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
 
// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }
 
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
 
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}