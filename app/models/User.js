// @flow
import BaseModel from './BaseModel';

class User extends BaseModel {
  avatarUrl: string;
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  isSuspended: boolean;
  createdAt: string;
}

export default User;
