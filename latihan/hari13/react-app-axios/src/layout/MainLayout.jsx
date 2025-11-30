import { Routes, Route, Outlet, Link, BrowserRouter} from "react-router";

export default function MainLayout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className="navbar bg-base-100 shadow-sm w-2xl inline-block items-center">
        <ul>
          <li className="btn btn-ghost text-xl p-7">
            <Link to="/">Home</Link>
          </li>
          <li className="btn btn-ghost text-xl p-7">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="btn btn-ghost text-xl p-7">
            <Link to="/category">Category</Link>
          </li>
          <li className="btn btn-ghost text-xl p-7">
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
 
      <hr />
 
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}