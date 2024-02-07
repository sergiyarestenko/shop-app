export interface IUser {
  id: string;
  name: string;
}

export interface IUserGroup {
  id: string;
  participants: IUser[];
}
