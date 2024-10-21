-- CreateTable
CREATE TABLE "Mahasiswa" (
    "nim" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "prodi" TEXT NOT NULL,

    CONSTRAINT "Mahasiswa_pkey" PRIMARY KEY ("nim")
);

-- CreateTable
CREATE TABLE "Buku" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "penulis" TEXT NOT NULL,
    "tahun_terbit" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Buku_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Peminjaman" (
    "id" SERIAL NOT NULL,
    "id_mhs" INTEGER NOT NULL,
    "id_buku" INTEGER NOT NULL,
    "tanggal_pinjam" TIMESTAMP(3) NOT NULL,
    "tanggal_kembali" TIMESTAMP(3) NOT NULL,
    "denda" INTEGER NOT NULL,

    CONSTRAINT "Peminjaman_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Peminjaman" ADD CONSTRAINT "Peminjaman_id_mhs_fkey" FOREIGN KEY ("id_mhs") REFERENCES "Mahasiswa"("nim") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Peminjaman" ADD CONSTRAINT "Peminjaman_id_buku_fkey" FOREIGN KEY ("id_buku") REFERENCES "Buku"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

