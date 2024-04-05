const ContactForm = () => {
  return (
    <>
      <div>
        <p className="font-bold text-accent-text text-center lg:text-left mb-[12px]">
          Підпишіться на розсилку
        </p>
        <p className="max-w-[353px] lg:max-w-full text-grey text-center lg:text-left">
          Отримуйте цікаву й актуальну інформацію про курси та знижки
        </p>
      </div>
      <form className="flex flex-col lg:flex-row gap-[20px] lg:gap-[12px] w-full">
        <input
          type="text"
          name="email"
          placeholder="Введіть ваш e-mail"
          className="bg-input-bg rounded-md h-[48px] lg:w-full py-[12px] px-[14px] text-[14px] text-grey "
        />
        <button
          type="submit"
          className="flex justify-center items-center w-full lg:w-[150px] p-[16px] lg:py-[12px] lg:px-[24px] font-bold text-black bg-accent hover:bg-accent-dark focus:bg-accent-dark ease-linear duration-250 rounded-md"
        >
          Відправити
        </button>
      </form>
    </>
  );
};

export default ContactForm;
