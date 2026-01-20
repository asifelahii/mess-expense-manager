import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { Mess, MonthData } from '../../domain/models';

export interface AuditLog {
  id?: number;
  timestamp: Date;
  action: string;
  entity: string;
  entityId: number;
  changes: any;
}

@Injectable({
  providedIn: 'root'
})
export class DbService extends Dexie {
  messes!: Table<Mess, number>;
  monthData!: Table<MonthData, number>;
  auditLogs!: Table<AuditLog, number>;

  constructor() {
    super('MessExpenseDB');
    
    this.version(1).stores({
      messes: '++id, name, createdAt',
      monthData: '++id, messId, month, locked',
      auditLogs: '++id, timestamp, entity, entityId'
    });
  }
}
