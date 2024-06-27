import InputLogin from "../components/input/inputSignINUP/inputSignINUP.jsx";
import Button from "../components/button/button.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PasswordRecovery() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleRecovery = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://backend-todoapp.test/api/recover-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setMessage("Check your email for the recovery link.");
        setError(false);
      } else {
        setError(true);
        setMessage("Failed to send recovery email.");
      }
    } catch (error) {
      console.error("Error recovering password:", error);
      setError(true);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <body className="bg-white">
        <section className="grid grid-cols-1 md:grid-cols-2">
          <section>
            <div className="grid md:pl-20 duration-300">
              <div className="pt-10 duration-300 items-center md:items-start flex justify-center md:justify-start pb-[2rem]" >
                <img
                  className="md:w-80 xl:w-[25rem] h-auto hidden md:block pt-[3rem]"
                  src="../public/Logo_white.png"
                  alt=""
                />
                <img
                  className="w-16 h-auto md:hidden"
                  src="../public/logo_responsive_negro.png"
                  alt=""
                />
              </div>

              <div>
                <h1 className="text-3xl md:text-6xl pb-[3rem]">Recover your password</h1>
              </div>

              <div className="flex flex-row pl-23 md:justify-start justify-center items-center pb-[2rem] font-bold">
                <a className="relative group" href="/">
                  <img
                    className="w-[2rem] h-auto"
                    src="../public/goback.png "
                    alt=""
                  />
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-black bg-gray-200 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Go back
                  </span>
                </a>
              </div>

              <div className="animate-fade-in-down">
                <form
                  className="animate-fade-in-up"
                  type="submit"
                  method="POST"
                  onSubmit={handleRecovery}
                >
                  <div className="gap-2 flex flex-col justify-center items-center md:items-start my-8">
                    <InputLogin
                      title={"E-MAIL"}
                      placeholder={"Enter your e-mail"}
                      type={"email"}
                      value={email}
                      onChange={handleInputChange(setEmail)}
                    />
                  </div>

                  {message && (
                    <p
                      className={`font-bold flex justify-center md:justify-start ${
                        error ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      {message}
                    </p>
                  )}

                  <div className="flex md:flex-row flex-col gap-7 items-center pt-5">
                    <Button variant="solid-discord-blue" type="submit">
                      Recover Password
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          <section className="w-[100%] flex justify-end">
            <img
              className="h-screen hidden md:block"
              src="../public/background_sign.png"
              alt="background_signIn"
            />
          </section>
        </section>
      </body>
    </>
  );
}
