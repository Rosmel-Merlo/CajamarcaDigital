export interface TreeMenu {
  name?: string;
  links: LinkMenu[];
}
export interface LinkMenu {
  key: string;
  name: string;
  url: string;
  icon: string;
}
