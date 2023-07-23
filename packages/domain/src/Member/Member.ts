import { Subscription } from "../Subscription";

interface Member {
  name: string;
  phone: string;
  email: string;
  subscription?: Subscription;
}

namespace Member {
  export function create(): Member {
    return {
      name: "",
      phone: "",
      email: "",
    };
  }

  export function isNameValid(data: Pick<Member, "name">): boolean {
    return data.name.length !== 0;
  }

  export function isSubscriptionValid(
    data: Pick<Member, "subscription">
  ): boolean {
    return (
      data.subscription === undefined || Subscription.isValid(data.subscription)
    );
  }

  export function isValid(member: Member): boolean {
    return isNameValid(member) && isSubscriptionValid(member);
  }
}

export default Member;
