import { z } from "zod";

export const hive_ = z.object({
  group_id: z.coerce.number(),
  group_name: z.string(),
  photo_url: z.object({
    String: z.string(),
    Valid: z.coerce.boolean(),
  }),
  group_type: z.string(),
});

export const userHive_ = hive_.extend({
  user_streak: z.coerce.number(),
});

export const extendedHive_ = hive_.extend({
  group_creator_id: z.coerce.number(),
  description: z.object({
    String: z.string(),
    Valid: z.coerce.boolean(),
  }),
  frequency: z.coerce.number(),
  max_members: z.coerce.number(),
  visibility: z.coerce.boolean(),
  created_at: z.string().datetime(),
});

export const extendedHiveTagName_ = extendedHive_.extend({
  tag_name: z.string(),
  total_member: z.coerce.number(),
});

export const extendedHiveTagId_ = extendedHive_.extend({
  tag_id: z.coerce.number(),
});

export const hiveWithMemberInfo_ = z.object({
  group_info: extendedHiveTagName_,
  user_id: z.coerce.number(),
  status: z.string(),
});

export const hiveMember_ = z.object({
  group_id: z.coerce.number(),
  member_id: z.coerce.number(),
  role: z.string(),
  created_at: z.string(),
  user_id: z.coerce.number(),
  username: z.string(),
  user_photourl: z.string(),
});

export const hiveRequest_ = z.object({
  group_id: z.coerce.number(),
  member_id: z.coerce.number(),
  description: z.object({
    String: z.string(),
    Valid: z.coerce.boolean(),
  }),
  created_at: z.string(),
  user_id: z.coerce.number(),
  username: z.string(),
  user_photourl: z.string(),
});

export type Hive = z.infer<typeof hive_>;
export type UserHive = z.infer<typeof userHive_>;
export type ExtendedHive = z.infer<typeof extendedHive_>;
export type ExtendedHiveTagName = z.infer<typeof extendedHiveTagName_>;
export type HiveWithMemberInfo = z.infer<typeof hiveWithMemberInfo_>;
export type HiveMember = z.infer<typeof hiveMember_>;
export type HiveRequest = z.infer<typeof hiveRequest_>;
