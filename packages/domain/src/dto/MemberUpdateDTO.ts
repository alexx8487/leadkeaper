import { Member, PartialMember } from "../Member";
import { MemberId } from "../types";

interface MemberUpdateDTO extends Partial<Member> {
  id: MemberId;
}

namespace MemberUpdateDTO {
  export function fromPartialMember(
    id: MemberId,
    update: PartialMember
  ): MemberUpdateDTO | undefined {
    return PartialMember.isUpdateValid(update)
      ? {
          id,
          ...update,
        }
      : undefined;
  }
}

export default MemberUpdateDTO;
