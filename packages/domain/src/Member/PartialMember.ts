import { PartialSubscription } from "../Subscription";
import Member from "./Member";

interface PartialMember extends Omit<Partial<Member>, "subscription"> {
  subscription?: PartialSubscription;
}

namespace PartialMember {
  type Transform = (member: PartialMember) => PartialMember;

  export function create(
    name: string = "",
    phone: string = "",
    email: string = "",
    subscription?: PartialSubscription
  ): PartialMember {
    return {
      name,
      phone,
      email,
      subscription,
    };
  }

  export function isNameValid(data: Pick<PartialMember, "name">): boolean {
    const { name } = data;

    return name === undefined || Member.isNameValid({ name });
  }

  export function isSubscriptionValid(
    data: Pick<PartialMember, "subscription">
  ): boolean {
    const { subscription } = data;

    return (
      subscription === undefined ||
      (PartialSubscription.isFilled(subscription) &&
        Member.isSubscriptionValid({ subscription }))
    );
  }

  export function isUpdateValid(
    value: PartialMember
  ): value is Partial<Member> {
    return isNameValid(value) && isSubscriptionValid(value);
  }

  export function isFilled(value: PartialMember): value is Member {
    return (
      value.subscription === undefined ||
      PartialSubscription.isFilled(value.subscription)
    );
  }

  export function merge(update: PartialMember): Transform {
    return (member) => ({
      ...member,
      ...update,
    });
  }

  export function set<F extends keyof PartialMember>(
    field: F,
    value: PartialMember[F]
  ): Transform {
    return merge({ [field]: value });
  }
}

export default PartialMember;
