import { query, mutation } from "./_generated/server.js";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();

    return users;
  },
});

export const add = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await ctx.db.insert("users", {
      name: "Nayan",
    });

    return userId;
  },
});
