export default function Home() {
  async function onSubmit(data: FormData) {
    "use server";
    console.log("Iscriviti al canale!");
    console.log(data.get("text"));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          action={onSubmit}
        >
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="text"
              type="text"
              name="text"
              placeholder="text"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit!
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
