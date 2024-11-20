export type Page = 'home' | 'about' | 'services' | 'gallery' | 'contact';

export const initialState: {
  sidebarIsOpen: boolean;
  page: Page;
} = {
  sidebarIsOpen: false,
  page: 'home',
};
