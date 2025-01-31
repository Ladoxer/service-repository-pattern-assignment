import Database, { UserRequestDto } from './Database'

// NOTE: Make db public instead of private. This is required for the tests.
export class UserRepository {
  public readonly db = Database;

  async createUser(userdata: UserRequestDto) {
    return this.db.create(userdata);
  }
}
