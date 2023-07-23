import { Subscription } from "@xxx-shuffle/domain";

import { formatDate } from "../../utils";

interface SubscriptionViewData {
  expired: boolean;
  text: string;
}

export function getSubscriptionViewData(
  subscription: Subscription
): SubscriptionViewData {
  if (Subscription.isExpired(subscription)) {
    return {
      expired: true,
      text: `Expired at ${formatDate(subscription.endDate)}`,
    };
  } else {
    return {
      expired: false,
      text: `${subscription.lessonCount} lessons till ${formatDate(
        subscription.endDate
      )}`,
    };
  }
}
