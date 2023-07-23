type QRCodeData = string;

const NUMBER_REGEX = /^\d+$/;

namespace QRCodeData {
  export function create(code: string): QRCodeData {
    return code;
  }

  export function parse(data: any): QRCodeData | undefined {
    if (NUMBER_REGEX.test(data)) {
      return create(data);
    } else {
      return undefined;
    }
  }
}

export default QRCodeData;
