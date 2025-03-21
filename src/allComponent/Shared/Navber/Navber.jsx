"use client";
import logo from "../../../assets/image/logo.png";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
// import { useUser } from "@/context/user.provider";
// import { logout } from "@/services/AuthService";

const Navbar = () => {
//   const { user, setIsLoading: userLoading } = useUser();

  // handle logout and reload after logout
  const handleLogout = () => {
    // logout();
    // userLoading(true);

    // if (protectedRoutes.some((route) => pathName.match(route))) {
    //   router.push("/");
    // }
  };

  return (
    <nav className="py-6 bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.10)]  md:block sticky top-0 z-20">
      <div className="lg:w-[1216px] w-96 m-auto flex justify-between items-center text-[#314660]">
        <Link href="/">
          <Image src={logo}  className="lg:w-[137px] w-4/5"  alt="verv logo" />
        </Link>
        <div className="text-lg flex justify-end items-center gap-14">
          <div className="font-medium">
            <ul className="flex justify-between items-center gap-6">
              {/* className="flex justify-center items-center" */}
              <li>
                {/* About
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 10L12 14L17 10"
                    stroke="#314660"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg> */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-lg p-0 m-0">
                      About
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 10L12 14L17 10"
                          stroke="#314660"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-36">
                    <DropdownMenuGroup>
                      <Link href="/about-landlord">
                        <DropdownMenuItem>About Landlord</DropdownMenuItem>
                      </Link>
                      <Link href="/verv-pricing">
                        <DropdownMenuItem>Verv Pricing</DropdownMenuItem>
                      </Link>
                      <Link href="/create-profile">
                        <DropdownMenuItem>Create Profile</DropdownMenuItem>
                      </Link>
                      <Link href="/rental-process">
                        <DropdownMenuItem>Rental Process</DropdownMenuItem>
                      </Link>
                      <Link href="/home-page">
                        <DropdownMenuItem>Home Page</DropdownMenuItem>
                      </Link>
                      <Link href="/checkout-page">
                        <DropdownMenuItem>Checkout Page</DropdownMenuItem>
                      </Link>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
             
            </ul>
          </div>
          <div className="flex justify-end items-center gap-6 font-medium">
            {/* <ul className="flex items-center justify-center gap-2">
              {user?.userEmail ? (
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Avatar className="cursor-pointer">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-36">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Setting</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleLogout()}>
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              ) : (
                <li>
                  <Link
                    href="/login"
                    className="flex justify-center items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488"
                        stroke="#314660"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="3"
                        cy="3"
                        r="3"
                        transform="matrix(1 0 0 -1 9 12)"
                        stroke="#314660"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Sign In/Register
                  </Link>
                </li>
              )}
            </ul> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
