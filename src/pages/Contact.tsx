import ContactCard from "../components/ContactCard";
import NavBar from "../components/NavBar";
import LinkedIn from "../assets/images/linkedIn.png";
import GitHub from "../assets/images/github.webp";
import Phone from "../assets/images/Phone.png";
import Email from "../assets/images/email.png";

const Contact = () => {
  return (
    <div className="w-full pb-3 overflow-scroll">
      <NavBar currentPage="contact" />
      <div className="text-center w-full py-[3%]">
        <h2 className="text-[35px] font-semibold">Let's Connect</h2>
        <p className="w-half text-[#5D5F65] font-semibold">
          Ready to collaborate and create something amazing together?
        </p>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 px-[3%] w-[50%] mx-auto mt-[5%]">
          <ContactCard name="Phone Number" link="360-790-6401" icon={Phone} />
          <ContactCard
            name="Email"
            link="stephenshin1@hotmail.com"
            icon={Email}
            animationDelay={0.2}
          />
          <ContactCard
            name="LinkedIn"
            link="https://www.linkedin.com/in/stephen-shin-680bb0201/"
            icon={LinkedIn}
            animationDelay={0.4}
          />
          <ContactCard
            name="GitHub"
            link="https://github.com/shinste"
            icon={GitHub}
            animationDelay={0.6}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
