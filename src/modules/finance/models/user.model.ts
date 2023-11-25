import mongoose, { Document, Schema } from 'mongoose';

interface User extends Document {
  nome: string;
  email: string;
}

const userSchema = new Schema<User>({
  nome: String,
  email: { type: String, unique: true }
});

const UserModel = mongoose.model<User>('User', userSchema,"user");
export default UserModel;
