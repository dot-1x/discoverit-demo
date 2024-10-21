import Mahasiswa from "@/component/mahasiswa"
export default function Home() {
  return (
    <div className="container flex">
      <h1 className="text-center">DiscoverIT - Demo app (simple CRUD)</h1>
      <Mahasiswa />
    </div>
  )
}
