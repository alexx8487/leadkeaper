import { Member } from "../Member";
import { MemberId } from "../types";

interface MemberDTO extends Member {
  id: MemberId;
}

namespace MemberDTO {
  export function create(id: MemberId, member: Member): MemberDTO {
    return {
      id,
      ...member,
    };
  }
}

export default MemberDTO;
