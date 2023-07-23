enum ScanError {
  Invalid,
  Used,
}

namespace ScanError {
  const ERROR_MESSAGES: Record<ScanError, string> = {
    [ScanError.Invalid]: "QR code is invalid",
    [ScanError.Used]: "This QR code is used by member",
  };

  export function getMessage(error: ScanError): string {
    return ERROR_MESSAGES[error];
  }
}

export default ScanError;
