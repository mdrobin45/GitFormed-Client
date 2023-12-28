const SubmitButton = ({ btnText }) => {
   return (
      <input
         className="middle cursor-pointer none center rounded-lg bg-secondary py-3 px-6 text-md font-semibold w-full text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
         type="submit"
         value={btnText}
      />
   );
};

export default SubmitButton;
