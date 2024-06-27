// InputSignINUP.jsx
export default function InputSignINUP({ title, placeholder, value, onChange, type }) {
  return (
    <>
      <h3 className="font-bold text-black pb-2">{title}</h3>
      <input
        required
        className="w-[60%] border-b-2 border-black focus:outline-none bg-transparent text-black placeholder:text-center md:placeholder:text-start"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
      />
    </>
  );
}
