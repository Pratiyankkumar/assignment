interface GridProps {
  children: React.ReactNode;
  title: string;
  text: string;
}

export default function Grid({ children, title, text }: GridProps) {
  return (
    <div className="w-[350px] h-[300px] flex flex-col items-center gap-4 justify-center relative">
      {/* Radial Gradient Background */}
      <div
        className="absolute w-full h-full"
        style={{
          background:
            "radial-gradient(circle at top left, #252B39 20%, transparent 70%)",
        }}
      ></div>

      {/* Gradient Borders */}
      <div
        className="absolute top-0 left-[5%] w-[90%] h-[1px]"
        style={{
          background: "linear-gradient(to right, #0C0F16, #788DC5, #0C0F16)",
        }}
      ></div>

      <div
        className="absolute bottom-0 left-[5%] w-[90%] h-[1px]"
        style={{
          background: "linear-gradient(to right, #0C0F16, #788DC5, #0C0F16)",
        }}
      ></div>

      <div
        className="absolute left-0 top-[5%] h-[90%] w-[1px]"
        style={{
          background: "linear-gradient(to bottom, #0C0F16, #788DC5, #0C0F16)",
        }}
      ></div>

      <div
        className="absolute right-0 top-[5%] h-[90%] w-[1px]"
        style={{
          background: "linear-gradient(to bottom, #0C0F16, #788DC5, #0C0F16)",
        }}
      ></div>

      {/* Icon and Text */}
      {children}
      <p className="font-light text-[26px]">{title}</p>
      <p className="w-[90%] text-sm text-center font-light">{text}</p>
    </div>
  );
}
