/*
  Warnings:

  - You are about to drop the column `userId` on the `Package` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Package" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL,
    "weight" REAL NOT NULL,
    "destination" TEXT NOT NULL
);
INSERT INTO "new_Package" ("address", "destination", "id", "weight") SELECT "address", "destination", "id", "weight" FROM "Package";
DROP TABLE "Package";
ALTER TABLE "new_Package" RENAME TO "Package";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
