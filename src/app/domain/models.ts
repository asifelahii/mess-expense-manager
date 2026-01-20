export interface Mess {
  id?: number;
  name: string;
  description?: string;
  createdAt: Date;
}

export interface MonthData {
  id?: number;
  messId: number;
  month: string; // yyyy-mm format
  totalExpense: number;
  memberCount: number;
  locked: boolean;
}

export interface Member {
  id?: number;
  messId: number;
  name: string;
  joinedAt: Date;
}

export interface Expense {
  id?: number;
  messId: number;
  month: string;
  description: string;
  amount: number;
  date: Date;
  category: 'meal' | 'bazar' | 'shared' | 'other';
}
