/*
  Warnings:

  - You are about to drop the `Mahasiswa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Peminjaman" DROP CONSTRAINT "Peminjaman_id_mhs_fkey";

-- DropTable
DROP TABLE "Mahasiswa";

-- CreateTable
CREATE TABLE "MahasiswaDiscoverIT" (
    "nim" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "prodi" TEXT NOT NULL,

    CONSTRAINT "MahasiswaDiscoverIT_pkey" PRIMARY KEY ("nim")
);

-- AddForeignKey
ALTER TABLE "Peminjaman" ADD CONSTRAINT "Peminjaman_id_mhs_fkey" FOREIGN KEY ("id_mhs") REFERENCES "MahasiswaDiscoverIT"("nim") ON DELETE RESTRICT ON UPDATE CASCADE;
