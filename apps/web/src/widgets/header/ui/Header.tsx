function Header({ children }: { children: React.ReactNode }) {
  return <header>{children}</header>;
}

export default Header;

/**
 *
 * How to Use
 *
 * <Header>
 *   <NavigationBar />
 *   <Other />
 * </Header>
 */
