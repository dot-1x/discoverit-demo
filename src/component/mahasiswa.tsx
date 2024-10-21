import { useEffect } from "react"

interface responseData {
  status: string
  data: Array<{
    name: string
    nim: number
  }>
}
export default async function Index() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mahasiswa`)
  const response: responseData = await data.json()
  const mhs = response.data
  return (
    <>
      <fieldset>
        <legend>Informasi Mahasiswa</legend>
        <form
          action="action.php"
          method="post"
          className="row g-3"
          id="tambahMahasiswa"
        >
          <div className="col-3">
            <label htmlFor="nim" className="form-label">
              NIM:
            </label>
            <input
              type="number"
              name="nim"
              id="nim"
              className="form-control"
              required
            />
          </div>
          <div className="col-3">
            <label htmlFor="nama" className="form-label">
              Nama Mahasiswa:
            </label>
            <input
              type="text"
              name="nama"
              id="nama"
              className="form-control"
              required
            />
          </div>
          <div className="col-3">
            <label htmlFor="prodi" className="form-label">
              Prodi:
            </label>
            <input
              type="text"
              name="prodi"
              id="prodi"
              className="form-control"
              required
            />
          </div>
          <input type="hidden" name="types" value="addMahasiswa" />
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Tambah Mahasiswa
            </button>
          </div>
        </form>
      </fieldset>
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>NIM</th>
            <th>Nama</th>
            <th>Prodi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {mhs.map((value, idx) => {
            return (
              <tr key={`${value.nim}-${value.name}`}>
                <td>{idx + 1}</td>
                <td>{value.nim}</td>
                <td>{value.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
