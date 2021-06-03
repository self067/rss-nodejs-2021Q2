export interface IIBoard {
  id: string;
  title: string;
  columns: string;
}

export interface IIUser {
  id: string;
  login: string;
  name: string;
  password?: string;
}
