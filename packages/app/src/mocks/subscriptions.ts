import { Subscription, SubscriptionId } from "@xxx-shuffle/domain";

import {
  // getFakeMemberSubscriptionId,
  // getFakeSubscriptionOwnerIds,
  SUBSCRIPTIONS,
} from "./ids";

type SubscriptionDictionary = {
  [key in SubscriptionId]: Subscription;
};

export const SUBSCRIPTION_DICTIONARY: SubscriptionDictionary = {
  [SUBSCRIPTIONS[0]]: {
    code: "1",
    lessonCount: 20,
    startDate: new Date(2021, 9, 15).valueOf(),
    endDate: Date.now() + 1000 * 60 * 60 * 24 * 7,
  },
  [SUBSCRIPTIONS[1]]: {
    code: "2",
    lessonCount: 8,
    startDate: new Date(2021, 8, 15).valueOf(),
    endDate: Date.now() - 1000 * 60 * 60 * 24 * 7,
  },
};

// export function getFakeSubscriptionById(
//   id: SubscriptionId
// ): SubscriptionDTO | undefined {
//   const subscription = SUBSCRIPTION_DICTIONARY[id];

//   if (subscription === undefined) {
//     return undefined;
//   }

//   return {
//     id,
//     ...subscription,
//     memberIds: getFakeSubscriptionOwnerIds(id),
//     isExpired: subscription.endDate < Date.now(),
//   };
// }

// export function getFakeMemberLessonCount(memberId: MemberId): number {
//   const subscriptionId = getFakeMemberSubscriptionId(memberId);

//   if (subscriptionId !== undefined) {
//     return SUBSCRIPTION_DICTIONARY[subscriptionId].lessonCount;
//   } else {
//     return 0;
//   }
// }
