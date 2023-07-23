import {
  Member,
  MemberId,
  MemberDTO,
  MemberShortDTO,
  MemberCreateDTO,
  MemberUpdateDTO,
} from "@xxx-shuffle/domain";

import {
  generateId,
  // getFakeMemberSubscriptionId,
  MEMBERS,
  SUBSCRIPTIONS,
} from "./ids";
import {
  // getFakeMemberLessonCount,
  SUBSCRIPTION_DICTIONARY,
} from "./subscriptions";

type MemberDictionary = {
  [key in MemberId]: Member;
};

export const MEMBER_DICTIONARY: MemberDictionary = {
  [MEMBERS[0]]: {
    name: "Ivanov Ivan",
    phone: "8(123)456-78-90",
    email: "ivanov.ivan@example.com",
    subscription: SUBSCRIPTION_DICTIONARY[SUBSCRIPTIONS[0]],
  },
  [MEMBERS[1]]: {
    name: "Petrov Petr",
    phone: "8(234)567-89-01",
    email: "",
    subscription: SUBSCRIPTION_DICTIONARY[SUBSCRIPTIONS[1]],
  },
  [MEMBERS[2]]: {
    name: "Evgenyev Evgeny",
    phone: "8(345)678-90-12",
    email: "evg.evg@test.ru",
  },
};

export function getFakeMemberList(): MemberShortDTO[] {
  return Object.entries(MEMBER_DICTIONARY).map(
    ([id, { name, subscription }]) => ({
      id,
      name,
      lessonCount: subscription?.lessonCount ?? 0,
    })
  );
}

export function getFakeMemberById(id: MemberId): MemberDTO | undefined {
  return {
    id,
    ...MEMBER_DICTIONARY[id],
  };
}

export function getFakeMemberByCode(code: string): MemberDTO | undefined {
  const id = Object.keys(MEMBER_DICTIONARY).find(
    (memberId) => MEMBER_DICTIONARY[memberId].subscription?.code === code
  );

  return id !== undefined ? getFakeMemberById(id) : undefined;
}

export function updateFakeMember({ id, ...data }: MemberUpdateDTO): void {
  MEMBER_DICTIONARY[id] = { ...MEMBER_DICTIONARY[id], ...data };
}

export function createFakeMember(data: MemberCreateDTO): string {
  const id = generateId();

  MEMBER_DICTIONARY[id] = data;

  return id;
}
