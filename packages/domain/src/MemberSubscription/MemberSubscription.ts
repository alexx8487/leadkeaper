import { Member } from "../Member";

interface MemberSubscription {
  name: string;
  code?: string;
  lessonCount: number;
  endDate?: number;
}

namespace MemberSubscription {
  export type Update = Partial<Omit<MemberSubscription, "name">>;

  type Transform = (
    memberSubscription: MemberSubscription
  ) => MemberSubscription;

  export function create(member: Member): MemberSubscription {
    return {
      name: member.name,
      lessonCount: member.subscription?.lessonCount ?? 0,
      code: member.subscription?.code,
      endDate: member.subscription?.endDate,
    };
  }

  export function merge(update: Update): Transform {
    return (memberSubscription) => ({
      ...memberSubscription,
      ...update,
    });
  }

  export function isExpired(memberSubscription: MemberSubscription): boolean {
    const { endDate } = memberSubscription;

    return endDate !== undefined ? endDate > Date.now() : false;
  }
}

export default MemberSubscription;
