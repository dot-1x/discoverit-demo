"use client"

import { formDataToJson } from "@/utils/form.utils"

export default function Form({
  children,
  url,
  method,
  ...rest
}: {
  children: React.ReactNode
  url: string
  method: "post" | "patch" | "delete" | "put"
  [key: string]: string | number | undefined | React.ReactNode
}) {
  return (
    <form
      method={method}
      {...rest}
      onSubmit={async (ev) => {
        ev.preventDefault()
        const body = new FormData(ev.currentTarget)
        const status = await fetch(url, {
          method: method,
          body: JSON.stringify(formDataToJson(body)),
        })
        if (status.ok) {
          alert("data berhasil diproses")
        }
      }}
    >
      {children}
    </form>
  )
}
