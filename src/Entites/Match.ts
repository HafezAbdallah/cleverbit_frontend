import User from './User';

export default class Match {
  id: number = 0;
  players: Array<any> = [];
  timestamp?: Date = undefined;
  winner: User = new User();
}
