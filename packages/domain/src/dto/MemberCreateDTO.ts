import { Member, PartialMember } from "../Member";

interface MemberCreateDTO extends Member {}

namespace MemberCreateDTO {
  export function fromMember(member: Member): MemberCreateDTO | undefined {
    return Member.isValid(member) ? member : undefined;
  }

  export function fromPartialMember(
    partialMember: PartialMember
  ): MemberCreateDTO | undefined {
    return PartialMember.isFilled(partialMember)
      ? fromMember(partialMember)
      : undefined;
  }
}

export default MemberCreateDTO;
