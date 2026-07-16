'use server'

import { getDbClient } from "@/lib/db"

/**
 * Server Actions placeholder for direct database interactions.
 * Next.js 'use server' actions run securely on the server and can be invoked from client components.
 */
export async function submitContactForm(data: { name: string; email: string; message: string }) {
  console.log("[Server Action] Contact form submission received:", data)
  
  try {
    const db = await getDbClient()
    await db.query(
      "INSERT INTO contact_submissions (name, email, message, created_at) VALUES ($1, $2, $3, NOW())",
      [data.name, data.email, data.message]
    )
    return { success: true, message: "Thank you! Your inquiry has been submitted." }
  } catch (error) {
    console.error("[Server Action] Error processing submission:", error)
    return { success: false, message: "An error occurred. Please try again later." }
  }
}
