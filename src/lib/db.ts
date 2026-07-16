/**
 * Database client helper.
 * In the future, this file will establish a direct database connection (e.g. Prisma or Drizzle)
 * to connect directly to the database from Next.js route handlers or server actions.
 */

export interface DatabaseConnection {
  connect: () => Promise<void>;
  query: <T = any>(sql: string, params?: any[]) => Promise<T[]>;
}

let dbInstance: DatabaseConnection | null = null;

export async function getDbClient(): Promise<DatabaseConnection> {
  if (dbInstance) return dbInstance;

  console.log("[DB] Initializing database connection placeholder...");
  
  dbInstance = {
    connect: async () => {
      console.log("[DB] Connected to database placeholder");
    },
    query: async (sql, params) => {
      console.log(`[DB] Mock SQL executed: ${sql}`, params);
      return [];
    }
  };

  return dbInstance;
}
export default getDbClient;
