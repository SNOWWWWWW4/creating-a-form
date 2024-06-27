import FormField from "@/components/FormField";


export default function Home() {

  return (
    <main className="min-h-screen grid grid-cols-1 computer:grid-cols-2 justify-between p-4 mobile:p-10 tablet:p-24 ">
      <section className="flex flex-col justify-center items-center bg-slate-200 rounded-lg mobile:bg-white mobile:mx-10">
        <h1 className="text-3xl font-bold ">This is a form!</h1>
        <h4 className="m-4 text-balance text-center">A very strong password is required for security!</h4>
      </section>
      <section className="flex flex-col justify-center items-center">
        <FormField />
      </section>
    </main>
  );
}
