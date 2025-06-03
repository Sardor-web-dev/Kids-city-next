-- CreateTable
CREATE TABLE "Favorites" (
    "id" SERIAL NOT NULL,
    "clothId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Favorites_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Favorites_clothId_userId_key" ON "Favorites"("clothId", "userId");

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_clothId_fkey" FOREIGN KEY ("clothId") REFERENCES "Cloth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorites" ADD CONSTRAINT "Favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
