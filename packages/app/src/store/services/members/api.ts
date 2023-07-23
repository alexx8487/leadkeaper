import { createApi } from "@reduxjs/toolkit/query/react";
import {
  MemberId,
  MemberDTO,
  MemberShortDTO,
  MemberCreateDTO,
  MemberUpdateDTO,
  Member,
} from "@xxx-shuffle/domain";

import { airtableBaseQuery, AirtableMember } from "../../../api";
import { QRCodeData } from "../../../domain";

const membersApi = createApi({
  reducerPath: "members",
  baseQuery: airtableBaseQuery<AirtableMember>("members"),
  tagTypes: ["Member", "MemberList"],
  endpoints: (builder) => ({
    getMemberList: builder.query<MemberShortDTO[], void>({
      query: () => ({
        type: "list",
        view: "main",
      }),
      providesTags: ["MemberList"],
    }),

    getMemberById: builder.query<MemberDTO, MemberId>({
      query: (id) => ({
        type: "get",
        id,
      }),
      transformResponse: (response: AirtableMember) => {
        const {
          id,
          name,
          email,
          phone,
          code,
          lessonCount,
          startDate,
          endDate,
        } = response;

        return {
          id,
          name,
          email,
          phone,
          subscription: {
            code,
            lessonCount,
            startDate,
            endDate,
          },
        };
      },
      providesTags: (result, error, id) => [{ type: "Member", id }],
    }),

    getMemberSubscriptionByCode: builder.mutation<
      MemberDTO | undefined,
      QRCodeData
    >({
      query: (code) => ({
        type: "find",
        filterByFormula: `{code} = ${code}`,
      }),
      transformResponse: (response: AirtableMember | undefined) => {
        if (!response) {
          return undefined;
        }

        const {
          id,
          name,
          email,
          phone,
          code,
          lessonCount,
          startDate,
          endDate,
        } = response;

        return {
          id,
          name,
          email,
          phone,
          subscription: {
            code,
            lessonCount,
            startDate,
            endDate,
          },
        };
      },
      // providesTags: (result) => [{ type: "Member", id: result?.id }],
    }),

    createMember: builder.mutation<MemberId, MemberCreateDTO>({
      query: ({ name, phone, email, subscription }) => ({
        type: "create",
        records: [
          {
            fields: {
              name,
              phone,
              email,
              code: subscription?.code,
              lessonCount: subscription?.lessonCount ?? 0,
              startDate: subscription?.startDate,
              endDate: subscription?.endDate,
            },
          },
        ],
      }),
      transformResponse: ([createdId]: string[]) => createdId,
      invalidatesTags: ["MemberList"],
    }),

    deleteMember: builder.mutation<void, MemberId>({
      query: (memberId) => ({
        type: "delete",
        ids: [memberId],
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(
          membersApi.util.updateQueryData(
            "getMemberList",
            undefined,
            (draft) => {
              const index = draft.findIndex((member) => member.id === id);
              if (index !== -1) {
                draft.splice(index, 1);
              }
            }
          )
        );
      },
    }),

    updateMember: builder.mutation<MemberId, MemberUpdateDTO>({
      query: ({ id, ...patch }) => ({
        type: "update",
        records: [
          {
            id,
            fields: {
              name: patch.name,
              phone: patch.phone,
              email: patch.email,
              lessonCount: patch.subscription?.lessonCount,
              startDate: patch.subscription?.startDate,
              endDate: patch.subscription?.endDate,
              code: patch.subscription?.code,
            },
          },
        ],
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(
          membersApi.util.updateQueryData(
            "getMemberList",
            undefined,
            (draft) => {
              const index = draft.findIndex((member) => member.id === id);
              if (patch.name) draft[index].name = patch.name;
              if (patch.subscription?.lessonCount)
                draft[index].lessonCount = patch.subscription.lessonCount;
            }
          )
        );
        dispatch(
          membersApi.util.updateQueryData("getMemberById", id, (draft) => {
            return {
              ...draft,
              ...patch,
            };
          })
        );
      },
    }),

    checkIn: builder.mutation<void, MemberId>({
      query: (id) => ({
        type: "modify",
        id,
        modifier: ({ lessonCount }) => ({
          lessonCount: lessonCount - 1,
        }),
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(
          membersApi.util.updateQueryData(
            "getMemberList",
            undefined,
            (draft) => {
              const index = draft.findIndex((member) => member.id === id);
              draft[index].lessonCount--;
            }
          )
        );
        dispatch(
          membersApi.util.updateQueryData("getMemberById", id, (draft) => {
            if (draft.subscription) {
              draft.subscription.lessonCount--;
            }
          })
        );
      },
    }),
  }),
});

export default membersApi;
