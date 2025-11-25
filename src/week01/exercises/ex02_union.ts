export type Role = "admin" | "user" | "manager";

export function canAccessDashboard(role: Role): boolean {
  return role === "admin";
}
