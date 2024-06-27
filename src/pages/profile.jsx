import Button from "../components/button/button.jsx";
import { Link } from 'react-router-dom';


export default function Profile({ onClickCustom }) {
    return (
        <div className="flex items-center justify-center shadow-xl w-full  bg-white flex-col m-auto  xl:rounded-3xl">
            <div className="bg-[url('https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg')] h-80 w-full xl:rounded-t-3xl     flex  justify-center lg:justify-start items-center">
                <div className="relative">
                    <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="" className="rounded-full w-60 h-60 mx-8 object-cover" />
                    <div className="absolute bg-blue-700 p-4 rounded-full top-44 right-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24"><path fill="white" fill-rule="evenodd" d="M20.848 1.879a3 3 0 0 0-4.243 0L2.447 16.036a3 3 0 0 0-.82 1.533l-.587 2.936a2 2 0 0 0 2.353 2.353l2.936-.587a3 3 0 0 0 1.533-.82L22.019 7.293a3 3 0 0 0 0-4.243L20.848 1.88Zm-2.829 1.414a1 1 0 0 1 1.415 0l1.171 1.171a1 1 0 0 1 0 1.415L17.933 8.55l-2.585-2.586 2.671-2.671Zm-4.086 4.086L3.862 17.45a1 1 0 0 0-.274.51l-.587 2.936 2.935-.587a1 1 0 0 0 .511-.274L16.52 9.964 13.933 7.38Z" clip-rule="evenodd" /></svg>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col xl:items-start lg:p-10 p-5">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold">Francisco Gonzales Flores</h1>
                </div>

                <div className="flex xl:items-start justify-start gap-12 flex-col w-full h-full">
                    <div className="flex flex-col gap-2 lg:w-[50%] w-full">
                        <h2 className="text-2xl font-semibold">USERNAME</h2>

                        <input type="text" name="" id="" placeholder="Frank_ou" className="text-xl border-b-2 w-full border-black focus:outline-none" />
                    </div>
                    <div className="flex flex-col gap-2 lg:w-[50%] w-full">
                        <h2 className="text-2xl font-semibold">PASSWORD</h2>
                        <input type="text" name="" id="" placeholder="********" className="text-xl border-b-2 w-full border-black focus:outline-none" />

                    </div>
                    <div className="flex flex-col gap-2 lg:w-[50%] w-full">
                        <h2 className="text-2xl font-semibold">EMAIL</h2>
                        <input type="text" name="" id="" placeholder="frank_ou@test.com" className="text-xl border-b-2 w-full border-black focus:outline-none" />
                    </div>
                </div>


                <div className="grid lg:grid-cols-2 place-items-center gap-8 mt-10 w-full">
                    
                    <Button variant="solid-red">Delete your account</Button>
                    <div className="hidden lg:block"></div>


                    <Link to={"/home"}>
                        <Button onClickCustom={onClickCustom} variant="border">Close</Button>

                    </Link>


                    <Button onClickCustom={onClickCustom} variant="solid-blue">Save Changes</Button>


                </div>


            </div>

        </div>
    );
}