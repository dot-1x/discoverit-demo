import Image from "next/image"
import Mahasiswa from "@/component/mahasiswa"

export default function Home() {
  return (
    <div className="container flex">
      <h1 className="text-center">Sistem Perpustakaan</h1>
      <Mahasiswa />
    </div>
  )
}
