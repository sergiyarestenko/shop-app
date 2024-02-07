export interface IItem {
  id: string;
  title: string;
  // created: string; // data
  // createdBy: string; //user
  measure?: string;
}

export interface IShopItem extends IItem {
  quantity: number | string;
  completed: boolean;
  key?:string
}

export interface IShopList {
  id: string;
  title: string;
  created: string; // data
  createdBy: string; //user
  items: IShopItem[];
  assignedTo?: string; //user
  status: string; // planning, active, completed, archived
}
