import { User } from '../users/User';

export class Posts {
  id: number;
  titre: string;
  data: string;
  date: string;
  img: string;
  user?: User | number;

}
