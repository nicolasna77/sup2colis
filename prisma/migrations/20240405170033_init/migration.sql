/*
  Warnings:

  - You are about to alter the column `weight` on the `Package` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to drop the column `capacity` on the `Stock` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Package" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "destination" TEXT NOT NULL,
    "stockId" INTEGER,
    CONSTRAINT "Package_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Package" ("address", "destination", "id", "stockId", "weight") SELECT "address", "destination", "id", "stockId", "weight" FROM "Package";
DROP TABLE "Package";
ALTER TABLE "new_Package" RENAME TO "Package";
CREATE TABLE "new_Stock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "stock" INTEGER DEFAULT 0
);
INSERT INTO "new_Stock" ("id", "name") SELECT "id", "name" FROM "Stock";
DROP TABLE "Stock";
ALTER TABLE "new_Stock" RENAME TO "Stock";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
