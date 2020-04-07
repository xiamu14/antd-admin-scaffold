interface SubMenu {
  title: string;
  icon: string;
  path: string;
}

export interface Menu {
  title: string;
  icon: string;
  path?: string;
  children?: SubMenu[];
}

export interface Route {
  path: string;
  exact?: boolean;
  component: string;
}
