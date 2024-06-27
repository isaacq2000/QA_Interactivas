export default function Popup({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-70 animate-duration-200 animate-fade-in" >
            <div className="bg-white rounded-3xl shadow-lg  relative flex flex-col  justify-center z-50  xl:scale-[0.7] 2xl:scale-[0.8]">
                <button
                    className="absolute top-0 right-0 mt-4 mr-4 text-gray-700 hover:text-gray-900 text-4xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="w-full flex items-center ">{children}</div>
            </div>
        </div>
    );
};