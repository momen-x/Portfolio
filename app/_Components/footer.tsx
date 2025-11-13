"use client";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {currentYear} Mo&apos;men {/* {t("footer.rights")}{" "} */}
            {t("All rights reserved.")}
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 rtl:space-x-reverse">
            {[
              { name: "GitHub", icon: "🐱", url: "https://github.com/momen-x" },
              {
                name: "LinkedIn",
                icon: "[LİNKEDİN]",
                url: "https://www.linkedin.com/in/mo%E2%80%99men-alswafiri-8b6491346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
              },
              {
                name: "Email",
                icon: "✉︎",
                url: "mailto:mmm.isam.99@gmail.com",
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Made with love */}
          <div className="text-gray-500 text-sm ">
            {/* {t("footer.madeWith")} */}
            {t("Made with")}
            <span className="inline-block animate-pulse-heart">❤️</span>{" "}
            {" Mom'en"}
            {/* {t("footer.inGaza")} */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
