import { FiUser, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.svg";
export function Header() {
  const signuser = false;
  const loadingAuth = false;
  return (
    <div className="w-full flex items-center justify-center mx-auto h-16 bg-gray-100 drop-shadow mb-4">
      <header className=" w-full flex max-w-7xl items-center justify-between px-2">
        <Link to={"/"}>
          <img src={LogoImg} alt="Logo do Site" />
        </Link>
        {!loadingAuth && signuser && (
          <Link to={"/dashboard"}>
            <div className="border-2 rounded-full p-1">
              <FiUser size={22} />
            </div>
          </Link>
        )}
        {!loadingAuth && !signuser && (
          <Link to={"/login"}>
            <div className="border-2 rounded-full p-1">
              <FiLogOut size={22} />
            </div>
          </Link>
        )}
      </header>
    </div>
  );
}
