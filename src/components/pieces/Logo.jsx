import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <span className="w-fit flex items-center">
      <Link href={"/"} className="block mx-auto">
        <Image
          src="/images/newLogo.png"
          alt=""
          height={50}
          width={50}
        />
      </Link>
    </span>
  );
}
export default Logo