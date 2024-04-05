-- CreateTable
CREATE TABLE "Stock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Package" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "stockId" INTEGER,
    CONSTRAINT "Package_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Package" ("address", "destination", "id", "weight") SELECT "address", "destination", "id", "weight" FROM "Package";
DROP TABLE "Package";
ALTER TABLE "new_Package" RENAME TO "Package";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
