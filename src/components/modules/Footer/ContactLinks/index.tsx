import FacebookIcon from '/public/images/socials/facebook.svg';
import InstagramIcon from '/public/images/socials/instagram.svg';
import YoutubeIcon from '/public/images/socials/youtube.svg';

const ContactLinks = () => {
  return (
    <>
      <div className="flex flex-col gap-[6px] items-center lg:items-start">
        <a
          href="tel:+380670000000"
          className="font-semibold text-[20px] hover:text-accent-text focus:text-accent-text ease-linear duration-250"
        >
          +38 067 00 000 00
        </a>
        <a
          href=""
          className="hover:text-accent-text focus:text-accent-text ease-linear duration-250"
        >
          Україна, м. Київ, вул. Перемоги, 16/23
        </a>
      </div>
      <ul className="flex gap-[32px] justify-center lg:justify-start">
        <li>
          <a
            href="/"
            className="text-white rounded-full hover:text-accent ease-linear duration-250"
          >
            <FacebookIcon className="fill-current" />
          </a>
        </li>
        <li>
          <a
            href="/"
            className="text-white rounded-full hover:text-accent ease-linear duration-250"
          >
            <InstagramIcon className="fill-current" />
          </a>
        </li>
        <li>
          <a
            href="/"
            className="text-white rounded-full hover:text-accent ease-linear duration-250"
          >
            <YoutubeIcon className="fill-current" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default ContactLinks;
