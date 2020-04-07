import { Menu, Route } from "./type";
import { admin } from "./collection/admin";

export const routes: Record<string, Route> = { ...admin.routes };

export const menus: Menu[] = [];
