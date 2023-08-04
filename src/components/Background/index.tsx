import background from "@/assets/background.png";
import Image from "next/image";
export default function Background(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { extra?: string }
) {
  const { extra, children, ...rest } = props;
  return (
    <div className={`relative overflow-hidden ${extra}`}>
      <Image
        className="absolute w-full top-0 opacity-20 left-0 right-0"
        src={background}
        alt={"background gradient header"}
        loading="eager"
      />
      <div {...rest}>{children}</div>
      <Image
        className="absolute w-full left-0 right-0 dark:opacity-50 bottom-0 rotate-180 -scale-x-100"
        src={background}
        alt={"background gradient footer"}
      />
    </div>
  );
}
