import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import webCloudImage from "../assets/webcloud.png";
import cloudComputeImage from "../assets/cloudcompute.png";
import freelanceImage from "../assets/Freelance.png";
import { type FormEvent, useEffect, useMemo, useRef, useState } from "react";
import type { IconType } from "react-icons";

import {
  FaCode,
  FaCloud,
  FaProjectDiagram,
  FaLaptopCode,
  FaChevronDown,
  FaMobileAlt,
  FaServer,
  FaTools,
  FaUsers,
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreed: false,
  });

  const [phoneDialCode, setPhoneDialCode] = useState("91");
  const [phoneInputValue, setPhoneInputValue] = useState("");
  const [phoneCountry, setPhoneCountry] = useState("IN");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [activeService, setActiveService] = useState(0);
  const countryDropdownRef = useRef<HTMLDivElement | null>(null);  const rotatingServices: {
    title: string;
    description: string;
    image: string;
    features: { label: string; icon: IconType; className: string; iconClass: string }[];
    ctaLabel: string;
    ctaPath: string;
  }[] = [
    {
      title: "Web & App Development",
      description:
        "I build scalable web and application experiences with clean architecture, modern UI, and reliable performance.",
      image: webCloudImage,
      features: [
        { label: "Web Development", icon: FaCode, className: "rounded-lg bg-rose-50 px-2 py-1.5 md:px-3 md:py-2 font-medium text-rose-700 flex items-center gap-1.5", iconClass: "text-rose-500 text-xs" },
        { label: "App Development", icon: FaMobileAlt, className: "rounded-lg bg-sky-50 px-2 py-1.5 md:px-3 md:py-2 font-medium text-sky-700 flex items-center gap-1.5", iconClass: "text-sky-500 text-xs" },
        { label: "API Integration", icon: FaProjectDiagram, className: "rounded-lg bg-violet-50 px-2 py-1.5 md:px-3 md:py-2 font-medium text-violet-700 flex items-center gap-1.5", iconClass: "text-violet-500 text-xs" },
        { label: "UI/UX Fixes", icon: FaLaptopCode, className: "rounded-lg bg-amber-50 px-2 py-1.5 md:px-3 md:py-2 font-medium text-amber-700 flex items-center gap-1.5", iconClass: "text-amber-500 text-xs" },
      ],
      ctaLabel: "Explore Web Development",
      ctaPath: "/services?category=web-app-development",
    },
    {
      title: "Cloud Computing & Deployment",
      description:
        "I design and deploy cloud-ready systems with CI/CD, observability, and production-grade delivery workflows.",
      image: cloudComputeImage,
      features: [
        { label: "Cloud Setup", icon: FaCloud, className: "rounded-lg bg-sky-50 px-2 py-1.5 md:px-3 md:py-2 font-medium text-sky-700 flex items-center gap-1.5", iconClass: "text-sky-500 text-xs" },
        { label: "Server Ops", icon: FaServer, className: "rounded-lg bg-rose-50 px-2 py-1.5 md:px-3 md:py-2 font-medium text-rose-700 flex items-center gap-1.5", iconClass: "text-rose-500 text-xs" },
        { label: "Monitoring", icon: FaProjectDiagram, className: "rounded-lg bg-violet-50 px-2 py-1.5 md:px-3 md:py-2 font-medium text-violet-700 flex items-center gap-1.5", iconClass: "text-violet-500 text-xs" },
        { label: "Optimization", icon: FaTools, className: "rounded-lg bg-amber-50 px-2 py-1.5 md:px-3 md:py-2 font-medium text-amber-700 flex items-center gap-1.5", iconClass: "text-amber-500 text-xs" },
      ],
      ctaLabel: "Explore Cloud Services",
      ctaPath: "/services?category=cloud-computing",
    },
    {
      title: "Freelance Digital Services",
      description:
        "I provide freelance digital support across development, deployment, and growth-focused technical execution.",
      image: freelanceImage,
      features: [
        { label: "Freelance Build", icon: FaCode, className: "rounded-lg bg-rose-50 px-2 py-1.5 md:px-3 md:py-2 font-medium text-rose-700 flex items-center gap-1.5", iconClass: "text-rose-500 text-xs" },
        { label: "Quick Delivery", icon: FaCloud, className: "rounded-lg bg-sky-50 px-2 py-1.5 md:px-3 md:py-2 font-medium text-sky-700 flex items-center gap-1.5", iconClass: "text-sky-500 text-xs" },
        { label: "Client Support", icon: FaUsers, className: "rounded-lg bg-violet-50 px-2 py-1.5 md:px-3 md:py-2 font-medium text-violet-700 flex items-center gap-1.5", iconClass: "text-violet-500 text-xs" },
        { label: "Service Consulting", icon: FaLaptopCode, className: "rounded-lg bg-amber-50 px-2 py-1.5 md:px-3 md:py-2 font-medium text-amber-700 flex items-center gap-1.5", iconClass: "text-amber-500 text-xs" },
      ],
      ctaLabel: "Explore Freelance Services",
      ctaPath: "/services?category=freelance-services",
    },
  ];

  const activeServiceData = rotatingServices[activeService];

  const phoneCountries = [
    { iso: "IN", name: "India", dialCode: "91", phoneLength: 10 },
    { iso: "US", name: "United States", dialCode: "1", phoneLength: 10 },
    { iso: "GB", name: "United Kingdom", dialCode: "44", phoneLength: 10 },
    { iso: "CA", name: "Canada", dialCode: "1", phoneLength: 10 },
    { iso: "DE", name: "Germany", dialCode: "49", phoneLength: 11 },
    { iso: "FR", name: "France", dialCode: "33", phoneLength: 9 },
    { iso: "IT", name: "Italy", dialCode: "39", phoneLength: 10 },
    { iso: "ES", name: "Spain", dialCode: "34", phoneLength: 9 },
    { iso: "NL", name: "Netherlands", dialCode: "31", phoneLength: 9 },
    { iso: "SE", name: "Sweden", dialCode: "46", phoneLength: 9 },
    { iso: "CH", name: "Switzerland", dialCode: "41", phoneLength: 9 },
    { iso: "AE", name: "United Arab Emirates", dialCode: "971", phoneLength: 9 },
    { iso: "SA", name: "Saudi Arabia", dialCode: "966", phoneLength: 9 },
    { iso: "SG", name: "Singapore", dialCode: "65", phoneLength: 8 },
    { iso: "MY", name: "Malaysia", dialCode: "60", phoneLength: 9 },
    { iso: "JP", name: "Japan", dialCode: "81", phoneLength: 10 },
    { iso: "KR", name: "South Korea", dialCode: "82", phoneLength: 10 },
    { iso: "AU", name: "Australia", dialCode: "61", phoneLength: 9 },
    { iso: "NZ", name: "New Zealand", dialCode: "64", phoneLength: 9 },
    { iso: "ZA", name: "South Africa", dialCode: "27", phoneLength: 9 },
    { iso: "BR", name: "Brazil", dialCode: "55", phoneLength: 11 },
  ];

  const selectedPhoneCountry =
    phoneCountries.find((item) => item.iso === phoneCountry) ?? phoneCountries[0];
  const selectedPhoneLength = selectedPhoneCountry.phoneLength;

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    if (submitState !== "success" && submitState !== "error") return;

    const timeout = setTimeout(() => {
      setSubmitState("idle");
      setSubmitMessage("");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [submitState]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % rotatingServices.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [rotatingServices.length]);

  const isPhoneValid = useMemo(() => {
    const digits = phoneInputValue.replace(/\D/g, "");
    if (digits.length === 0) return true;
    return digits.length === selectedPhoneLength;
  }, [phoneInputValue, selectedPhoneLength]);

  const isEmailValid = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim()),
    [formValues.email]
  );

  const isFormValid = useMemo(
    () =>
      formValues.firstName.trim() !== "" &&
      isEmailValid &&
      isPhoneValid &&
      formValues.message.trim() !== "" &&
      formValues.agreed,
    [formValues, isPhoneValid, isEmailValid]
  );


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid || submitState === "sending") return;

    setSubmitState("sending");
    setSubmitMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("_captcha", "false");
    formData.set("_template", "table");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/guglothmahipal007@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitState("success");
      setSubmitMessage(
        "Thank you for your message. I will review it and get back to you soon."
      );

      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        agreed: false,
      });
      setPhoneDialCode("91");
      setPhoneInputValue("");
      setPhoneCountry("IN");
      setIsCountryOpen(false);
      form.reset();
    } catch {
      setSubmitState("error");
      setSubmitMessage(
        "Submission failed. Please try again in a moment or contact me directly."
      );
    }
  };

  const marqueeSkills = [
    { name: "React", color: "bg-blue-500" },
    { name: "Next.js", color: "bg-black" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "AWS", color: "bg-orange-500" },
    { name: "Google Cloud", color: "bg-green-500" },
    { name: "Firebase", color: "bg-yellow-500" },
    { name: "Docker", color: "bg-sky-500" },
    { name: "Kubernetes", color: "bg-indigo-500" },
    { name: "Node.js", color: "bg-green-600" },
    { name: "Tailwind CSS", color: "bg-cyan-500" },
    { name: "Framer Motion", color: "bg-pink-500" },
  ];
  return (
    <>      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-20 pb-10 md:min-h-[calc(100vh-5.25rem)] ">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_30rem] md:gap-14 lg:gap-20 items-start md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center md:pr-6 lg:pr-10"
          >
            <h2 className="tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4">
              Hello, I'm
            </h2>

            <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold mb-6">
              <span>Mahipal</span>
            </h1>

            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
              I build scalable web applications, cloud-native systems, and
              provide freelance digital services for businesses and individuals.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              <button
                onClick={() => navigate("/services")}
                className="
                  px-5 py-2.5 md:px-6 md:py-3
                  text-sm md:text-base
                  rounded-full
                  font-semibold
                  backdrop-blur-xl
                  bg-gradient-to-b from-white/40 to-gray-200/40
                  border
                  border-gray-300/70
                  shadow-[0_8px_25px_rgba(0,0,0,0.12)]
                  hover:from-white/50
                  hover:to-gray-300/50
                  hover:shadow-[0_12px_35px_rgba(0,0,0,0.18)]
                  transition-all duration-300
                  whitespace-nowrap
                  google-color-cycle
                "
              >
                Explore Services
              </button>

              <button
                onClick={() => navigate("/projects")}
                className="
                  px-5 py-2.5 md:px-6 md:py-3
                  text-sm md:text-base
                  rounded-full
                  font-semibold
                  border-2
                  transition-all duration-300
                  whitespace-nowrap

                  bg-black text-white border-black
                  hover:bg-white hover:text-black

                  dark:bg-white dark:text-black dark:border-white
                  dark:hover:bg-black dark:hover:text-white dark:hover:border-white
                "
              >
                See My Work
              </button>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3 max-w-xl mb-10 md:mb-0">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "30+", label: "Projects" },
                { value: "10+", label: "Clients" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 px-3 py-3 sm:px-4 sm:py-4 shadow-[0_8px_22px_rgba(15,23,42,0.08)] dark:shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
                >
                  <p className="text-xl sm:text-2xl font-bold leading-none">{stat.value}</p>
                  <p className="mt-1.5 text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="w-full mt-4 md:mt-14 flex justify-center md:justify-end md:pl-2"
          >
            <div className="w-full max-w-[30rem] mx-auto md:ml-auto md:mr-0">
              <form
                onSubmit={handleSubmit}
                className="relative space-y-4 border border-gray-300 dark:border-gray-700 rounded-2xl p-4 pt-10 md:p-5 md:pt-12 bg-white/45 dark:bg-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="text-xs font-medium text-green-700 dark:text-green-300">
                    Available for work
                  </span>
                </div>
                <input type="hidden" name="_subject" value="New Portfolio Inquiry" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-700 dark:text-gray-300">First name *</label>
                    <input
                      name="first_name"
                      autoComplete="given-name"
                      required
                      placeholder="First name"
                      value={formValues.firstName}
                      onChange={(e) =>
                        setFormValues((prev) => ({ ...prev, firstName: e.target.value }))
                      }
                      className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-violet-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-700 dark:text-gray-300">Last name</label>
                    <input
                      name="last_name"
                      autoComplete="family-name"
                      placeholder="Last name"
                      value={formValues.lastName}
                      onChange={(e) =>
                        setFormValues((prev) => ({ ...prev, lastName: e.target.value }))
                      }
                      className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-violet-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5 text-gray-700 dark:text-gray-300">Email *</label>
                  <input
                    name="email"
                    autoComplete="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formValues.email}
                    onChange={(e) =>
                      setFormValues((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-violet-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5 text-gray-700 dark:text-gray-300">Phone number</label>
                  <input type="hidden" name="country_code" value={`+${phoneDialCode}`} />
                  <input
                    type="hidden"
                    name="phone"
                    value={phoneInputValue ? `+${phoneDialCode} ${phoneInputValue}` : ""}
                  />

                  <div className="relative" ref={countryDropdownRef}>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setIsCountryOpen((prev) => !prev)}
                        className="w-[6rem] sm:w-[22%] h-[42px] rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-2 text-xs font-normal text-left flex-shrink-0 flex items-center justify-between whitespace-nowrap"
                      >
                        <span className="tracking-wide">{selectedPhoneCountry.iso} +{selectedPhoneCountry.dialCode}</span>
                        <FaChevronDown className="ml-1 text-[10px] text-gray-500" />
                      </button>

                      <input
                        autoComplete="tel"
                        inputMode="numeric"
                        placeholder="98765 43210"
                        value={phoneInputValue}
                        onChange={(e) => {
                          const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, selectedPhoneLength);
                          setPhoneInputValue(digitsOnly);
                          setFormValues((prev) => ({ ...prev, phone: digitsOnly }));
                        }}
                        maxLength={selectedPhoneLength}
                        className="w-full h-[42px] rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-violet-400"
                      />
                    </div>

                    {isCountryOpen && (
                      <div className="absolute left-0 z-20 mt-2 max-h-56 w-[min(20rem,calc(100vw-5rem))] sm:w-[22rem] max-w-[calc(100vw-2rem)] overflow-y-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl">
                        {phoneCountries.map((item) => (
                          <button
                            key={item.iso}
                            type="button"
                            onClick={() => {
                              setPhoneCountry(item.iso);
                              setPhoneDialCode(item.dialCode);
                              setIsCountryOpen(false);
                            }}
                            className="flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                          >
                            <span className="text-gray-700 dark:text-gray-200">{item.iso} {item.name}</span>
                            <span className="font-medium text-gray-500 dark:text-gray-400">+{item.dialCode}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {!isPhoneValid && formValues.phone.trim() !== "" && (
                    <p className="mt-1 text-[11px] text-red-500">
                      Enter exactly {selectedPhoneLength} digits for {selectedPhoneCountry.name}.
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5 text-gray-700 dark:text-gray-300">Message *</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about your project"
                    value={formValues.message}
                    onChange={(e) =>
                      setFormValues((prev) => ({ ...prev, message: e.target.value }))
                    }
                    className="w-full min-h-24 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-violet-400"
                  />
                </div>

                <label className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                  <input
                    type="checkbox"
                    required
                    checked={formValues.agreed}
                    onChange={(e) =>
                      setFormValues((prev) => ({ ...prev, agreed: e.target.checked }))
                    }
                    className="mt-0.5"
                  />
                  <span>I agree to your <Link to="/privacy-policy" className="underline underline-offset-2">privacy policy</Link>.</span>
                </label>


                <button
                  type="submit"
                  disabled={!isFormValid || submitState === "sending"}
                  className="w-full rounded-xl bg-amber-600 text-white px-5 py-2.5 font-semibold hover:bg-amber-700 transition disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-amber-600"
                >
                  {submitState === "sending" ? "Submitting..." : "Get in Touch Today"}
                </button>

                {submitState !== "idle" && submitMessage && (
                  <p
                    className={`text-xs text-center ${submitState === "success"
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-red-500"
                      }`}
                  >
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ================= HOW I HELP SECTION ================= */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
          >
            How <span className="google-color-cycle">I Help</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-r from-purple-400 to-pink-400 p-4 sm:p-6 md:p-12 text-white shadow-[0_18px_48px_rgba(157,78,130,0.22)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 flex flex-col min-h-[250px] md:min-h-[280px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.35 }}
                  >
                    <h3 className="mt-2 text-2xl md:text-4xl font-bold min-h-[4.25rem] md:min-h-[6rem]">
                      {activeServiceData.title}
                    </h3>

                    <p className="mt-4 text-sm md:text-base opacity-90 max-w-xl min-h-[4.75rem] md:min-h-[4.5rem]">
                      {activeServiceData.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-auto pt-6">
                  <button
                    onClick={() => navigate(activeServiceData.ctaPath)}
                    className="px-5 py-2.5 rounded-full bg-white/20 border border-white/30 text-sm font-semibold text-white hover:bg-white/30 transition"
                  >
                    {activeServiceData.ctaLabel}
                  </button>
                </div>
              </div>

              <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <div
                  className="
                    w-full
                    max-w-[clamp(260px,80vw,420px)]
                    rounded-xl
                    bg-white/95
                    text-gray-900
                    p-3 md:p-5
                    shadow-xl
                  "
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>

                  <div
                    className="
                      aspect-[16/9]
                      rounded-md
                      border border-gray-250
                      overflow-hidden
                    "
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeServiceData.image}
                        src={activeServiceData.image}
                        alt={activeServiceData.title}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                      />
                    </AnimatePresence>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`features-${activeService}`}
                      className="mt-3 grid grid-cols-2 gap-2 text-[11px] md:text-sm"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.35 }}
                    >
                      {activeServiceData.features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                          <div key={feature.label} className={feature.className}>
                            <Icon className={feature.iconClass} />
                            {feature.label}
                          </div>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ================= SKILLS MARQUEE ================= */}
      <section className="py-12 md:py-16 overflow-hidden border-y border-gray-200 dark:border-gray-800 bg-gradient-to-r from-gray-50/70 via-transparent to-gray-50/70 dark:from-gray-900/40 dark:via-transparent dark:to-gray-900/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-center">
            Core Stack & Tools
          </h3>
          <p className="text-center text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">
            Daily technologies used across frontend, backend, and cloud workflows.
          </p>
        </div>

        <div className="relative w-full">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />

          <div className="flex w-max animate-marquee gap-6 md:gap-8 hover:[animation-play-state:paused]">
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 text-sm md:text-base font-semibold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <span className={`w-3 h-3 rounded-full ${skill.color}`} />
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;


























