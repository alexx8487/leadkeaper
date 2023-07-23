import { UniqueId } from "../types";
import Subscription from "./Subscription";

type PartialSubscription = Partial<Subscription> & Pick<Subscription, "code">;

namespace PartialSubscription {
  export type Update = Partial<Subscription>;

  type Transform = (subscription: PartialSubscription) => PartialSubscription;

  export function create(code: UniqueId): PartialSubscription {
    return {
      code,
    };
  }

  export function merge(update: Update): Transform {
    return (subscription) => ({
      ...subscription,
      ...update,
    });
  }

  export function set<F extends keyof PartialSubscription>(
    field: F,
    value: PartialSubscription[F]
  ): Transform {
    return merge({ [field]: value });
  }

  export function isFilled(value: PartialSubscription): value is Subscription {
    return (
      value.endDate !== undefined &&
      value.startDate !== undefined &&
      value.lessonCount !== undefined
    );
  }
}

export default PartialSubscription;
