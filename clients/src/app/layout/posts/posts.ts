import {User} from '../users/user';

export class Posts {
  id: number;
  titre: string;
  data: string;
  date: string;
  img: string;
  user?: User | number;
}
