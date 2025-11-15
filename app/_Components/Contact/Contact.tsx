"use client";
import { useState } from "react";
import { motion } from "framer-motion";
// import "./Contact.css";
import { TAddUser } from "@/app/validation/addUser";
import axios from "axios";
import { domin } from "@/app/lib/domin";
import GlobeCanvas from "../GlobeCanvas";
import { useLanguage } from "@/app/context/LanguageContext"; // Add this import

const contactWayList = [
  {
    appName: "contact.whatsapp",
    text: "+972598817322",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418",
    link: "https://wa.me/972598817322",
    directmessage: "contact.whatsappMessage",
    message: "contact.whatsappSendMessage",
    color: "green",
  },
  {
    appName: "contact.email",
    text: "mmm.isam.99@gmail.com",
    path: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
    link: "mailto:mmm.isam.99@gmail.com",
    directmessage: "contact.emailMessage",
    message: "contact.emailSendMessage",
    color: "blue",
  },
  {
    appName: "contact.linkedIn",
    text: "My account on linked in",
    path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
    link: "https://www.linkedin.com/in/mo%E2%80%99men-alswafiri-8b6491346",
    directmessage: "contact.linkedInMessage",
    message: "contact.linkedInSendMessage",
    color: "indigo",
  },
];

// const ContactWayCard = ({
//   appName,
//   text,
//   path,
//   link,
//   index,
//   directmessage,
//   message,
//   color = "blue",
// }: {
//   appName: string;
//   text: string;
//   path: string;
//   directmessage: string;
//   message: string;
//   link: string;
//   index: number;
//   color?: string;
// }) => {
//   const { t } = useLanguage();

//   const colorClasses =
//     {
//       green:
//         "bg-green-500/20 text-green-400 hover:border-green-500/30 hover:bg-green-500/10",
//       blue: "bg-blue-500/20 text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10",
//       indigo:
//         "bg-indigo-500/20 text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/10",
//     }[color] ||
//     "bg-blue-500/20 text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10";

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-opacity-100 transition-all duration-300 group"
//     >
//       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//         <div
//           className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 ${
//             colorClasses.split(" ")[0]
//           } ${colorClasses.split(" ")[1]}`}
//         >
//           <svg
//             className="w-6 h-6 sm:w-7 sm:h-7"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//           >
//             <path d={path} />
//           </svg>
//         </div>

//         <div className="flex-1 min-w-0 w-full">
//           <h4 className="text-white font-semibold text-base sm:text-lg mb-1 truncate">
//             {t(appName)}
//           </h4>
//           <p className="text-gray-400 text-xs sm:text-sm mb-2 break-all">
//             {t(directmessage)}
//           </p>
//           <code className="text-gray-300 text-xs sm:text-sm font-mono block mb-3 break-all">
//             {t(text)}
//           </code>

//           <button
//             onClick={() => window.open(link, "_blank")}
//             className={`w-full sm:w-auto px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
//               color === "green"
//                 ? "bg-green-500 hover:bg-green-600"
//                 : color === "blue"
//                 ? "bg-blue-500 hover:bg-blue-600"
//                 : "bg-indigo-500 hover:bg-indigo-600"
//             } text-white shadow-lg hover:shadow-xl`}
//           >
//             {t(message)}
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

const Contact = () => {
  const [form, setForm] = useState<TAddUser>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage(); // Add this hook

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${domin}/api/momen_protoflio/users`, form);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("err becaue i dont know", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-background min-h-screen">
      <div className="contact-content py-16 px-4 md:py-24 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
            {t("contact.keepInTouch")} {/* Translate */}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t("contact.contact")} {/* Translate */}
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            {t("contact.opinion")} {/* Translate */}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Globe Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-1 w-full h-full min-h-[450px] lg:min-h-[550px] rounded-2xl overflow-hidden border border-gray-700/50 bg-blue-500/5"
          >
            <div className="w-full h-full">
              <GlobeCanvas />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <label className="block text-white font-semibold text-base">
                    {t("contact.name")} * {/* Translate */}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.namePlaceholder")}
                    className="w-full bg-gray-800/70 border-2 border-gray-600/50 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 text-base"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-white font-semibold text-base">
                    {t("contact.yourEmail")} * {/* Translate */}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.emailPlaceholder")}
                    className="w-full bg-gray-800/70 border-2 border-gray-600/50 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 text-base"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-white font-semibold text-base">
                    {t("contact.message")} * {/* Translate */}
                  </label>
                  <textarea
                    rows={6}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.messagePlaceholder")}
                    className="w-full bg-gray-800/70 border-2 border-gray-600/50 rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 resize-none transition-all duration-200 text-base min-h-[150px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-lg"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {t("contact.sending")} {/* Translate */}
                    </div>
                  ) : (
                    t("contact.sendMessage") /* Translate */
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        {/* Contact Ways */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {t("contact.otherWays")}
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              {t("contact.otherWaysDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactWayList.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => window.open(contact.link, "_blank")}
              >
                <div
                  className={`
          relative bg-linear-to-br from-gray-900/80 to-gray-800/60 
          backdrop-blur-xl rounded-2xl p-6 border-2 
          transition-all duration-300 h-full
          group-hover:shadow-2xl
          ${
            contact.color === "green"
              ? "border-green-500/20 group-hover:border-green-500/40"
              : contact.color === "blue"
              ? "border-blue-500/20 group-hover:border-blue-500/40"
              : "border-indigo-500/20 group-hover:border-indigo-500/40"
          }
        `}
                >
                  {/* Background Glow Effect */}
                  <div
                    className={`
            absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
            transition-opacity duration-500 blur-xl
            ${
              contact.color === "green"
                ? "bg-green-500/10"
                : contact.color === "blue"
                ? "bg-blue-500/10"
                : "bg-indigo-500/10"
            }
          `}
                  />

                  {/* Icon Container */}
                  <div
                    className={`
            relative z-10 w-16 h-16 rounded-2xl mb-5 
            flex items-center justify-center
            transition-all duration-300 group-hover:scale-110
            ${
              contact.color === "green"
                ? "bg-green-500/20 text-green-400"
                : contact.color === "blue"
                ? "bg-blue-500/20 text-blue-400"
                : "bg-indigo-500/20 text-indigo-400"
            }
          `}
                  >
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={contact.path} />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-white font-bold text-lg mb-2 group-hover:text-white/90">
                      {t(contact.appName)}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                      {t(contact.directmessage)}
                    </p>

                    {/* Contact Info */}
                    <div
                      className={`
              px-3 py-2 rounded-lg mb-4 text-sm font-medium
              transition-all duration-300
              ${
                contact.color === "green"
                  ? "bg-green-500/10 text-green-300 border border-green-500/20"
                  : contact.color === "blue"
                  ? "bg-blue-500/10 text-blue-300 border border-blue-500/20"
                  : "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
              }
            `}
                    >
                      <code className="break-all font-mono">
                        {contact.text}
                      </code>
                    </div>

                    {/* CTA Button */}
                    <div
                      className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-xl
              font-semibold text-sm transition-all duration-300
              transform group-hover:translate-x-1
              ${
                contact.color === "green"
                  ? "bg-green-600 hover:bg-green-500 text-white"
                  : contact.color === "blue"
                  ? "bg-blue-600 hover:bg-blue-500 text-white"
                  : "bg-indigo-600 hover:bg-indigo-500 text-white"
              }
            `}
                    >
                      <span>{t(contact.message)}</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6l6 6-6 6"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div
                    className={`
            absolute inset-0 rounded-2xl border-2 opacity-0 
            group-hover:opacity-100 transition-opacity duration-300
            ${
              contact.color === "green"
                ? "border-green-400/30"
                : contact.color === "blue"
                ? "border-blue-400/30"
                : "border-indigo-400/30"
            }
          `}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
