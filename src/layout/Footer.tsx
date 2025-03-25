import FlowingMenu from "../components/FlowingMenu";

const footerItems = [
  {
    link: "#",
    text: "GitHub",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "LinkedIn",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Email",
    image: "https://picsum.photos/600/400?random=3",
  },
];
export const Footer = () => {
  return (
    <div className="w-full fle max-w-screen">
      <FlowingMenu items={footerItems} />
    </div>
  );
};
