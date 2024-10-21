import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  console.log("Mengambil data...")
  const mahasiswa = await prisma.mahasiswaDiscoverIT.findMany()
  console.log(`berhasil mengambil ${mahasiswa.length} data mahasiswa`)
  return Response.json({
    status: "ok",
    data: mahasiswa,
  })
}

export async function POST(req: Request) {
  const data = await req.json()
  console.log("Data diterima: ", data)
  await prisma.mahasiswaDiscoverIT.create({
    data: {
      nim: parseInt(data.nim),
      nama: data.nama,
      prodi: data.prodi,
    },
  })
  console.log("Data berhasil ditambah")
  return Response.json({ status: "ok", data: data }, { status: 201 })
}

export async function PUT(req: Request) {
  const data = await req.json()
  console.log("Data diterima: ", data)
  const newdata = await prisma.mahasiswaDiscoverIT.update({
    where: {
      nim: parseInt(data.nim),
    },
    data: {
      nama: data.nama,
      prodi: data.prodi,
    },
  })
  console.log("data berhasil diubah")
  return Response.json({ status: "ok", data: newdata }, { status: 200 })
}

export async function DELETE(req: Request) {
  const data = await req.json()
  console.log("Data diterima: ", data)
  await prisma.mahasiswaDiscoverIT.delete({
    where: {
      nim: parseInt(data.nim),
    },
  })
  console.log("data berhasil dihapus")
  return Response.json({ status: "ok", nim: data.nim }, { status: 202 })
}
