export default function Courses() {
    const courses = [
        { original: "TM-5500", hover: "Ingeniería de las Aplicaciones Interactivas" },
        { original: "TM-5501", hover: "Desarrollo de Aplicaciones Interactivas II" },
        { original: "TM-5502", hover: "Diseño de Páginas Web" },
        { original: "TM-5503", hover: "Inglés para Informática" },
        { original: "TM-5504", hover: "Taller Multimedia" },
    ];

    return (
        <div className="flex items-center justify-center  flex-col gap-4   m-auto">
            <h2 className="font-bold text-2xl">Registered Courses</h2>
            {courses.map((course, index) => (
                <div
                    key={index}
                    className="group relative text-center w-full shadow-xl rounded-full py-4   "
                >
                    <span className="group-hover:hidden w-40 cursor-pointer ">{course.original}</span>
                    <div className="hidden group-hover:flex items-center justify-center h-full w-40 cursor-pointer m-auto">{course.hover}</div>
                </div>
            ))}
        </div>
    );
}