export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  searchParams.get("nim")
  return Response.json({
    status: "ok",
    data: [
      {
        name: "Nizar",
        nim: 2022150105,
      },
    ],
  })
}

export async function POST(req: Request) {
  const data = await req.formData()
}
