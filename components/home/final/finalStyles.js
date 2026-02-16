export const fieldBase =
  "mt-2 w-full rounded-2xl border bg-white/85 px-4 py-3 text-neutral-900 outline-none transition focus:ring-2 focus:ring-white/15";

export const fieldError =
  "border-amber-500/70 focus:ring-2 focus:ring-amber-500/25";

export const fieldOk = "border-white/10";

export function getStatusStyle(statusType) {
  return statusType === "success"
    ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-100"
    : statusType === "error"
    ? "border-amber-300/25 bg-amber-300/10 text-amber-100"
    : statusType === "info"
    ? "border-white/18 bg-white/8 text-white/80"
    : "border-transparent bg-transparent text-transparent";
}

export function getStatusDot(statusType) {
  return statusType === "success"
    ? "bg-emerald-300"
    : statusType === "error"
    ? "bg-amber-200"
    : statusType === "info"
    ? "bg-white/60"
    : "bg-transparent";
}
