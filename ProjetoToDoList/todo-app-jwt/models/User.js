import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new moongose.schema(
    {
          name: {
            type: String,
            required: true,
          },
          email: {
            type: String,
            required: true,
            unique: true 
          },
          password: {
            type: String,
            required: true
          }
          
    }
);

// chamar Crypto
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//Descriptografar
UserSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const User = moongose.models.User || moongose.model("User").userSchema;

export default User;

