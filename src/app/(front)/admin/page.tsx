// app/(front)/admin/page.tsx
export default function AdminPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-full max-w-sm rounded-xl bg-white p-8 shadow-md'>
        <h1 className='mb-4 text-center text-3xl font-semibold'>
          Welcome to Admin Dashboard
        </h1>
        <p className='text-center'>You are successfully logged in!</p>
      </div>
    </div>
  )
}
