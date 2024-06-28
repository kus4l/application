import logo from "@/public/XGen logo.png";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
  return (
    <div className="bg-neutral text-neutral-content">
      <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <Link href="/" className="btn-ghost btn text-xl normal-case">
            <Image src={logo} height={200} width={200} alt="logo" />
          </Link>
        </div>
        <div className="flex-2">
          <div className="contact-number">
            <span className="text-white text-2xl">
              <span className="bg-white px-2 py-1 text-center inline-block rounded">
                <i className="bi bi-telephone-fill text-white"></i>
              </span>
              <a href="" className="text-white">
                13 232313213
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
