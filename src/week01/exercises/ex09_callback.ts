export type OnMessage = (msg: string) => void;

export function runMessages(callback: OnMessage): void {
  callback("Mensagem 1");
  callback("Mensagem 2");
  callback("Mensagem 3");
}
