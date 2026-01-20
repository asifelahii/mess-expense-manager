import { MonthData, Expense } from './models';

/**
 * Pure calculation functions for mess expense calculations
 */

/**
 * Calculate per-person cost for a month
 */
export function calculatePerPersonCost(totalExpense: number, memberCount: number): number {
  if (memberCount === 0) return 0;
  return totalExpense / memberCount;
}

/**
 * Calculate total expenses from an array of expenses
 */
export function calculateTotalExpense(expenses: Expense[]): number {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0);
}

/**
 * Format month string to readable format
 */
export function formatMonth(monthStr: string): string {
  const [year, month] = monthStr.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

/**
 * Check if a month is locked
 */
export function isMonthLocked(monthData: MonthData): boolean {
  return monthData.locked;
}

/**
 * Get current month in yyyy-mm format
 */
export function getCurrentMonth(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}
