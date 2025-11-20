import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateTripDetail=mutation({
    args:{
        userId: v.string(),
        uid: v.id('UserTable'),
        tripDetail:v.any()
    },
    handler: async (ctx, args) => {
        const result= await ctx.db.insert('TripDetailTable',{
            tripDetail:args.tripDetail,
            userId:args.userId,
            uid:args.uid
        });
    }
})