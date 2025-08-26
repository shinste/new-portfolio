interface ContactCardProps {
  name: string;
  link: string;
  icon: string;
  animationDelay?: number;
}
const ContactCard: React.FC<ContactCardProps> = ({
  name,
  link,
  icon,
  animationDelay,
}) => {
  return (
    <div
      className="p-4 rounded-lg shadow-sm border-1 border-gray-200 hover:shadow-lg fade-in"
      style={{ animationDelay: `${animationDelay || 0}s` }}
    >
      <div className="flex justify-center">
        <img src={icon} className="h-20" />
      </div>
      <h2 className="font-semibold text-[18px]">{name}</h2>
      <a
        href={
          name === "Phone Number"
            ? undefined
            : name === "Email"
            ? `mailto:${link}`
            : link
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-[12px] text-[#2345ED]">{link}</p>
      </a>
    </div>
  );
};

export default ContactCard;
