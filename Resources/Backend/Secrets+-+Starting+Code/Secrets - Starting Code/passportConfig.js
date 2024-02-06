import LocalStrategy from "passport-local";
import {emailExists,createUser,matchPassword} from "./helper.js";

export default (passport) => {
    passport.use(
      "local-signup",
      new LocalStrategy(async function verify(username, password, done)  {
          try {
            const userExists = await emailExists(username)
            if (userExists) {
                return done(null, false);
            }
            const user = await createUser(username, password);
            return done(null, user);
          } catch (error) {
                done(error);
          }
        }
      )
    );
    passport.use(
      "local-login",
      new LocalStrategy(async function verify(username, password, done) {
          try {
            const user = await emailExists(username);
            if (!user) return done(null, false);
            const isMatch = await matchPassword(password, user.saltpass);
            if (!isMatch) return done(null, false);
            return done(null, {id: user.id, email: user.mail});
          } catch (error) {
                return done(error, false);
          }
        }
      )
    );
  };

