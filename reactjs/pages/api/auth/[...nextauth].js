import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "../../../helpers/auth";
import { connectToDatabase } from "../../../helpers/db";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectToDatabase();

        const userCollection = client.db().collection("Users");
        const lectorCollection = client.db().collection("Lectores");

        const user = await userCollection.findOne({
          email: credentials.email,
        });

        const lector = await lectorCollection.findOne({
          email: credentials.email,
        });

        if (lector) {
          const isValid = await verifyPassword(
            credentials.password,
            lector.password
          );

          if (!isValid) {
            client.close();
            throw new Error("Nemohl si byt prihlasen");
          }
          client.close();
          return { email: lector.email, name: lector.name, image: "lector" };
        } else if (user) {
          const isValid = await verifyPassword(
            credentials.password,
            user.password
          );

          if (!isValid) {
            client.close();
            throw new Error("Nemohl si byt prihlasen");
          }
          client.close();
          return { email: user.email, name: user.name, image: "user" };
        } else if (!user) {
          client.close();
          throw new Error("Uživatel nenašen");
        } else if (!lector) {
          client.close();
          throw new Error("Lektor nenalezen");
        }
      },
    }),
  ],
});
