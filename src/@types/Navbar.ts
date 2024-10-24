export interface Navbar {
  name: string;
  icon?: React.ReactNode;
  link: string;
  classname?: string;
}
export interface NavbarProps {
  navbars: Navbar[];
}
