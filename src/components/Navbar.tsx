import type { ReactNode } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
interface Props {
  to: string;
  children: ReactNode;
}
export const Navbar = () => {
  return (
    <nav className="nav">
      Joshua's Website
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About Me</CustomLink>

        <CustomLink to="/projects">Projects</CustomLink>
      </ul>
    </nav>
  );
};
function CustomLink({ to, children, ...props }: Props) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : " "}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
