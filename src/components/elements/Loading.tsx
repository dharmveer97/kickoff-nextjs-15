'use client'

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="container p-6 max-w-sm shadow rounded-md">
        <div className="flex space-x-4 justify-center">
          {/* <Spinner label="Loading..." /> TODO: add code here and improve the loading state  */}
        </div>
      </div>
    </div>
  )
}

export default Loading
