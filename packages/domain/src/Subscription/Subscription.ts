import { UniqueId } from "../types";

interface Subscription {
  code?: UniqueId;
  lessonCount: number;
  startDate: number;
  endDate: number;
}

namespace Subscription {
  export type Update = Partial<Subscription>;

  export function create(
    code: UniqueId,
    lessonCount: number,
    startDate: number,
    endDate: number
  ): Subscription {
    return {
      code,
      lessonCount,
      startDate,
      endDate,
    };
  }

  export function isExpired(subscription: Subscription): boolean {
    return subscription.endDate < Date.now();
  }

  export function isIntervalValid(subscription: Subscription): boolean {
    return subscription.startDate < subscription.endDate;
  }

  export function isValid(subscription: Subscription): boolean {
    return isIntervalValid(subscription);
  }
}

export default Subscription;
