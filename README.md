## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

In package.json add seed to script
run: 

$ npm run seed 

to see initial data populated

Setting up the database:
    - Allow latest updates by vercel to be accessible by the codebase. $ vercel env pull .env.development.local
    - Enable 'vercel' command in terminal. $ npm install -g vercel
    - Connect vercel/postgres database to an existing Github project. $ vercel link
       Press 'Y' + 'Enter' for questions, type name of Github repo
    - Install the vercel/postgres SDK: $ npm install @vercel/postgres
    - Seed the database with an initial 10 instances of customers & data in scripts/seed.js
    - hide secret key


Authentication setup
$ npm install next-auth@beta

app/lib/actions.ts
auth.ts
middleware.ts
sidenav.tsx (signout)

Sign in:
Email: user@nextmail.com
Password: 123456