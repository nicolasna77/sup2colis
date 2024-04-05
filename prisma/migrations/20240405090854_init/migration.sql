-- CreateTable
CREATE TABLE "Package" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL,
    "weight" REAL NOT NULL,
    "destination" TEXT NOT NULL,
    "userId" INTEGER NOT NULL
);
