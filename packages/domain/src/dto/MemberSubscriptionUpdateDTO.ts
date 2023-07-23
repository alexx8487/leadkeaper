import { MemberId } from "../types";
import { MemberSubscription } from "../MemberSubscription";

interface MemberSubscriptionUpdateDTO extends MemberSubscription.Update {
  memberId: MemberId;
}

namespace MemberSubscriptionUpdateDTO {
  export function create(
    memberId: MemberId,
    update: MemberSubscription.Update
  ) {
    return {
      memberId,
      ...update,
    };
  }
}

export default MemberSubscriptionUpdateDTO;
