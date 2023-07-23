import members from "./api";

export { members };

export const {
  useGetMemberByIdQuery,
  useGetMemberListQuery,
  useUpdateMemberMutation,
  useCreateMemberMutation,
  useGetMemberSubscriptionByCodeMutation,
  useCheckInMutation,
  useDeleteMemberMutation,
} = members;
