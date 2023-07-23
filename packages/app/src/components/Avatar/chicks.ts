const CHICK_COLORS = [
  "BluePurple",
  "BlueYellow",
  "GreenBlue",
  "PinkOrange",
  "PurpleWhite",
  "RedGreen",
  "YellowBlue",
  "YellowPink",
] as const;

type InferArrayType<A> = A extends Readonly<Array<infer T>> ? T : never;

export type ChickColor = InferArrayType<typeof CHICK_COLORS>;

export function getChickByIndex(index: number): ChickColor {
  return CHICK_COLORS[index % CHICK_COLORS.length];
}

export function getChickByPhoneNumber(phone: string): ChickColor {
  let index = 0;

  phone.replaceAll(/\d/, (digit) => {
    index += parseInt(digit, 10);

    return digit;
  });

  return getChickByIndex(index);
}

export function getChickByName(name: string): ChickColor {
  const index = name
    .split("")
    .reduce((index, char) => index + char.charCodeAt(0), 0);

  return getChickByIndex(index);
}
