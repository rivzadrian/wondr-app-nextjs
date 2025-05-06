import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
 
const prisma = new PrismaClient();
 
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });
        if (!user) throw new Error('No user found');
        const valid = await bcrypt.compare(credentials.password, user.password);
        if (!valid) throw new Error('Invalid password');
        return { id: user.id, name: user.firstName, email: user.email };
      },
    }),

    GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRETS,
        authorization: {
            params: {
                scope: 'read.user',
            }
        }
    })
  ],

  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token) session.user.id = token.id;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
export { handler as GET, handler as POST };
 