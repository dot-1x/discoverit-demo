"use client"

import { useEffect, useState } from "react"
import Form from "@/component/form"

interface mahasiswa {
  nama: string
  nim: number
  prodi: string
}
interface responseData {
  status: string
  data: mahasiswa[]
}
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

async function processDelete(nim: number) {
  await fetch(`${baseUrl}/api/mahasiswa`, {
    method: "delete",
    body: JSON.stringify({ nim: nim }),
  })
  alert("Data berhasil dihapus!")
}
export default function Index() {
  const [selected, setSelected] = useState<mahasiswa>()
  const [mhs, setMhs] = useState<mahasiswa[]>([])
  useEffect(() => {
    async function getMhs() {
      const data = await fetch(`${baseUrl}/api/mahasiswa`)
      const response: responseData = await data.json()
      setMhs(response.data)
    }
    getMhs()
  }, [])
  return (
    <>
      <fieldset>
        <legend>Informasi Mahasiswa</legend>
        <Form
          method="post"
          url={`${baseUrl}/api/mahasiswa`}
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
        </Form>
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
              <tr key={`${value.nim}-${value.nama}`}>
                <td>{idx + 1}</td>
                <td>{value.nim}</td>
                <td>{value.nama}</td>
                <td>{value.prodi}</td>
                <td>
                  <button
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#backdropUbah"
                    onClick={() => setSelected(value)}
                  >
                    Ubah
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => processDelete(value.nim)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div
        className="modal fade modal-lg"
        id="backdropUbah"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="ubahData"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <Form
            method="put"
            className="modal-content"
            url={`${baseUrl}/api/mahasiswa`}
          >
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="ubahData">
                Ubah Data Mahasiswa
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body row g-3" id="formUbah">
              <input
                type="hidden"
                name="nim"
                id="nim"
                className="form-control"
                defaultValue={selected?.nim}
              />
              <div className="col-3">
                <label htmlFor="nama" className="form-label">
                  Nama Mahasiswa:
                </label>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  className="form-control"
                  defaultValue={selected?.nama}
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
                  defaultValue={selected?.prodi}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Ubah
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}
