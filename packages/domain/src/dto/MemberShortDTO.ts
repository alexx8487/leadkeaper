import { Member } from "../Member";
import { MemberSubscription } from "../MemberSubscription";
import { MemberId } from "../types";

interface MemberShortDTO extends MemberSubscription {
  id: MemberId;
}

namespace MemberShortDTO {
  export function create(id: MemberId, member: Member): MemberShortDTO {
    return {
      id,
      ...MemberSubscription.create(member),
    };
  }
}

export default MemberShortDTO;
