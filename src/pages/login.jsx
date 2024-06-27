import InputLogin from "../components/input/inputSignINUP/inputSignINUP.jsx";
import Button from "../components/button/button.jsx";
import { useNavigate } from 'react-router-dom';


import { useState } from "react";

export default function Login() {
  const [isOnLogin, setIsOnLogin] = useState(true);
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profile_type_id, setProfile_type_id] = useState(1);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://backend-todoapp.test/api/singup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, lastname, surname, password, email, profile_type_id}),
      });

      if (response.ok) {
        navigation.navigate('/home');
      } else {
        console.log('Failed to register user');
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://backend-todoapp.test/api/login',

        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        },
      )
      if (response.ok) {
        navigate('/home');
      } else {
        setError(true);
        console.log('Failed exists');
      }
    } catch (error) {
      console.error('Error loggin user:', error);
    }
  };

  return (
    <>
      <body className="bg-white" >

      
        <section className="grid grid-cols-1 md:grid-cols-2">
          {isOnLogin ? (
            <section>
              <div className="grid md:pl-20 duration-300">
                <div className="pt-10 duration-300 items-center md:items-start flex justify-center md:justify-start">
                  <img className="md:w-80 xl:w-[20rem] h-auto hidden md:block" src="../public/Logo_white.png" alt="" />
                  <img className="w-10 h-auto md:hidden" src="../public/logo_responsive_negro.png" alt="" />
                </div>

                <div className="flex flex-row pl-23 md:justify-start justify-center gap-3 pt-[3rem] lg:pb-24 items-center">
                  <a className="text-black lg:text-5xl text-4xl font-light hover:text-blue-600 cursor-pointer" onClick={() => setIsOnLogin(false)}>Sign Up</a>
                  <p className="text-black lg:text-3xl text-2xl">or</p>
                  <a className="text-discord-blue lg:text-5xl text-4xl font-light hover:text-blue-600 cursor-pointer scale-105 duration-300" onClick={() => setIsOnLogin(true)}>Sign In</a>
                </div>

                <div className="animate-fade-in-down">
                  <form className='animate-fade-in-up' type="submit" method="POST" onSubmit={handleSignIn}>
                    <div className="gap-2 flex flex-col justify-center items-center md:items-start my-8">
                      <InputLogin title={"E-MAIL"} placeholder={"Enter your e-mail"} type={"email"} value={email} onChange={handleInputChange(setEmail)} />
                      <InputLogin title={"PASSWORD"} type={"password"} placeholder={"Enter your password"} value={password} onChange={handleInputChange(setPassword)} />
                    </div>

                    {error && <p className="text-red-500 font-bold flex justify-center md:justify-start">Wrong e-mail or password</p>}


                    <div className="flex md:flex-row flex-col gap-7 items-center pt-5">
                      <Button variant="solid-discord-blue" type="submit">Sign In</Button>
                      <a className="text-black hover:underline hover:text-blue-500" href="/password-recovery">Did you forget your password?</a>
                    </div>
                  </form>

                </div>
              </div>
            </section>
          ) : (
            <section>
              <div className="grid md:pl-20 duration-300">
                <div className="pt-10 duration-300 items-center md:items-start flex justify-center md:justify-start">
                  <img className="md:w-80 xl:w-[20rem] h-auto hidden md:block" src="../public/Logo_white.png" alt="" />
                  <img className="w-16 h-auto md:hidden" src="../public/logo_responsive_negro.png" alt="" />
                </div>

                <div className="flex flex-row pl-23 md:justify-start justify-center gap-3 pt-[3rem] lg:pb-15">
                  <a className="lg:text-5xl text-4xl font-light text-blue-600 cursor-pointer scale-105 duration-300" onClick={() => setIsOnLogin(false)}>Sign Up</a>
                  <p className="text-black lg:text-3xl text-2xl flex items-center">or</p>
                  <a className="lg:text-5xl text-4xl font-light text-black cursor-pointer" onClick={() => setIsOnLogin(true)}>Sign In</a>
                </div>

                <form className="animate-fade-in-up" type="submit" method="POST" onSubmit={handleSignUp}>
                  <div className="gap-2 flex flex-col justify-center items-center md:items-start my-8">
                    <InputLogin title={"NAME"} placeholder={"Enter your name"} value={name} onChange={handleInputChange(setName)} />
                    <InputLogin title={"LASTNAME"} placeholder={"Enter your lastname"} value={lastname} onChange={handleInputChange(setLastName)} />
                    <InputLogin title={"SURNAME"} placeholder={"Enter your surname"} value={surname} onChange={handleInputChange(setSurname)} />
                    <InputLogin type={"password"} title={"PASSWORD"} placeholder={"Enter your password"} value={password} onChange={handleInputChange(setPassword)} />
                    <InputLogin title={"E-MAIL"} placeholder={"Enter your e-mail"} type={"email"} value={email} onChange={handleInputChange(setEmail)} />
                  </div>

                  <div className="flex md:flex-row flex-col gap-7 items-center pt-5">
                    <Button type="submit" variant="solid-discord-blue">Sign Up</Button>
                    <a className="text-black hover:underline hover:text-blue-500" href="/home">Did you forget your password?</a>
                  </div>
                </form>
              </div>
            </section>
          )}

          <section className="w-[100%] flex justify-end relative">
            <img className="h-screen hidden md:block z-index" src="../public/background_sign.png" alt="background_signIn" />
          </section>
        </section>
      </body>
    </>
  );
}
