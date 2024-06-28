'use client'

import AccForm from "@/components/loginOptions/AccForm";
import ChangePassForm from "@/components/loginOptions/ChangePassForm";
import LoginForm from "@/components/loginOptions/LoginForm";
import useLogin from "@/hooks/useLogin";

export default function Home() {

  const { switchBool, setSwitchBool, changePass } = useLogin()

  // If changePass is true and switchBool is true then, setSwitchBool to false
  if (changePass && switchBool) {
    setSwitchBool(false);
  }

  return (
    <main className="min-h-screen grid grid-cols-1 computer:grid-cols-2 justify-between p-4 mobile:p-10 tablet:p-24 ">
      <section className="flex flex-col justify-center items-center">
        <h1>Img goes here</h1>
      </section>
      <section className="flex flex-col justify-center items-center">
        
        {/* if changePass is true then show ChangePassForm, if switchBool is true then show AccForm, if switchBool is false then show LoginForm */}
        { changePass ? (
          <ChangePassForm />
        ) : switchBool ? (
          <AccForm />
        ): (
          <LoginForm />
        )}

      </section>
    </main>
  );
}