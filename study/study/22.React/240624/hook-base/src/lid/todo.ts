export interface Todo {
  getIsComplete(): boolean;
  getContent(): string;
  getPriority(): number;
  getCreateAt(): string;
  getlimit(): string;
}

export class Todo implements Todo {
  private isComplate: boolean;
  private content: string;
  private priority: number;
  private createAt: string;
  private limit: string;
  // 캡슐화, 밖에서 마음대로 못가져다 쓴다.

  constructor(content: string, priority: number, limit: string) {
    this.content = content;
    this.isComplate = false;
    this.priority = priority;
    const date = new Date();
    this.createAt = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    this.limit = limit;
  }
  getIsComplete(): boolean {
    return this.isComplate;
  }
  getContent(): string {
    return this.content;
  }
  getPriority(): number {
    return this.priority;
  }
  getCreateAt(): string {
    return this.createAt;
  }
  getlimit(): string {
    return this.limit;
  }
  setComplate(): void {
    this.isComplate = true;
  }
}
