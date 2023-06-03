import { LANGS } from "@/config/constants";
import BackButton from "./BackButton";

const Header = () => {
  // TODO Fix locale
  // const { locale, setLocale } = useLocale();
  // const { formatMessage } = useIntl();

  return (
    <div className="fixed top-0 z-10 w-full py-3 text-white bg-purple-700">
      <div className="flex justify-between max-w-screen-xl px-5 mx-auto 2xl:px-0">
        <h1 className="text-2xl font-bold">
          <span className="hidden md:block">PokeSearch</span>
          <span className="block md:hidden">PSearch</span>
        </h1>
        <select
          data-testid="lang-select"
          aria-label="Select a language"
          className="px-2 bg-transparent cursor-pointer"
          // value={locale}
          // onChange={(val) => setLocale(val.target.value)}
        >
          {LANGS.map((l) => (
            <option key={l} value={l}>
              {l.toUpperCase()}
            </option>
          ))}
        </select>
        <BackButton />
      </div>
    </div>
  );
};

export default Header;
