import { redirect } from "next/navigation"

export const GET = async() => {
  const response = await fetch('http://localhost:3001/auth/login')

  const data = await response.json() as {url: string}

  redirect(data.url)
}
