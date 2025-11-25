import { User } from "../types";

export function printUser(user: User | null): void {
  if (!user) {
    console.log("Sem usuário");
    return;
  }

  console.log(`Usuário: ${user.name}`);
}
