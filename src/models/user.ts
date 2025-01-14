import { Schema, model, models } from 'mongoose';
const UserSchema = new Schema({
  user_id: {
      type: String,
      required: [true, 'User id is required.'],
      unique: [true, "User id is already exists"],
    },
  
    email: {
      type: Object,
      unique: [true, "email already exists"],
    },

    firstName: {
      type: String,
      required: [true, 'User id is required.'],
    },

    lastName: {
      type: String,
      required: [true, 'User id is required.'],
    },

    imageUrl: {
      type: String,
      required: [true, 'User id is required.'],
    },

    techField: { type : Array , default : [] },

    years: { type: Number},

    content: {
      type: String,
    }
  });
  
  const User = models.User || model('User', UserSchema);
  
  export default User;