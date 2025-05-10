import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contacts" className="rounded-2xl w-full max-w-[1250px] mx-auto mt-10 bg-[#9f887e] text-white py-10 px-4 flex flex-col items-center gap-6">
      <h2 className="text-3xl font-extrabold">Контакты</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center text-lg font-medium">
        <div className="space-y-2">
          <p>
            Телефон:{" "}
            <a
              href="tel:+998973970034"
              className="underline hover:text-gray-200"
            >
              +998 97 397 00 34
            </a>
          </p>
          <p>Адрес: Ул. Бустонсарой (Бирлик 24)</p>
        </div>

        <div className="space-y-2">
          <p>
            <Link
              className="underline hover:text-gray-200"
              href="https://www.instagram.com/kids_city_sam/"
              target="_blank"
            >
              Instagram: @kids_city_sam
            </Link>
          </p>
          <p>
            <Link
              className="underline hover:text-gray-200"
              href="https://t.me/kids_city_sam"
              target="_blank"
            >
              Telegram: t.me/kids_city_sam
            </Link>
          </p>
        </div>
      </div>

      <div className="w-full mt-8">
        <iframe
          className="w-full h-[300px] rounded-md border-none"
          src="https://yandex.uz/map-widget/v1/?display-text=kids%20city&ll=66.964099%2C39.661719&mode=search&oid=157073967785&ol=biz&sctx=ZAAAAAgBEAAaKAoSCXHjFvNzvlBAETEnaJPD00NAEhIJJGO1%2BX8dJ0ARe8A8ZMqHE0AiBgABAgMEBSgKOABA3lBIAWoCdXqdAc3MzD2gAQCoAQC9ARx8XCjCAQapldqSyQSCAglraWRzIGNpdHmKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=66.964099%2C39.661719&sspn=0.000705%2C0.000298&text=kids%20city&z=21"
          allowFullScreen
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
