import { MemberId, SubscriptionId } from "@xxx-shuffle/domain";

const counter = (function* () {
  let id = 0;

  while (true) {
    yield id;
    id++;
  }
})();

export function getNextNumber(): number {
  return counter.next().value;
}

export function generateId(): string {
  return getNextNumber().toString();
}

export const SUBSCRIPTIONS = [generateId(), generateId()];

export const MEMBERS = [generateId(), generateId(), generateId()];

const SUBSCRIPTION_OWNERSHIP = {
  [SUBSCRIPTIONS[0]]: [MEMBERS[0]],
  [SUBSCRIPTIONS[1]]: [MEMBERS[1]],
};

export function getFakeSubscriptionOwnerIds(
  subscriptionId: SubscriptionId
): MemberId[] {
  return SUBSCRIPTION_OWNERSHIP[subscriptionId];
}

export function getFakeMemberSubscriptionId(
  memberId: MemberId
): SubscriptionId | undefined {
  const subscriptionId = Object.entries(SUBSCRIPTION_OWNERSHIP).find(
    ([, ownerIds]) => ownerIds.includes(memberId)
  );

  return subscriptionId !== undefined ? subscriptionId[0] : undefined;
}
