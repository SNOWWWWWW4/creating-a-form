import FormField from "@/components/FormField";


export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-1 sm:grid-cols-2 justify-between p-24">
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold ">This is a form!</h1>
        <h4 className=" m-4">A very strong password is required for security!</h4>
      </section>
      <section className="flex flex-col justify-center items-center">
        <FormField />
      </section>
    </main>
  );
}
