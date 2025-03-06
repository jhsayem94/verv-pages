import Image from "next/image";
import logo from "../../assets/images/logo.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ResponsiveNavbar = () => {
  return (
    <nav className="w-full m-auto px-[14px] py-3">
      <div className="flex justify-between items-center">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.417969 1.3335C0.417969 0.64314 0.977613 0.0834961 1.66797 0.0834961H18.3346C19.025 0.0834961 19.5846 0.64314 19.5846 1.3335C19.5846 2.02385 19.025 2.5835 18.3346 2.5835H1.66797C0.977613 2.5835 0.417969 2.02385 0.417969 1.3335ZM0.417969 8.00016C0.417969 7.30981 0.977613 6.75016 1.66797 6.75016H18.3346C19.025 6.75016 19.5846 7.30981 19.5846 8.00016C19.5846 8.69052 19.025 9.25016 18.3346 9.25016H1.66797C0.977613 9.25016 0.417969 8.69052 0.417969 8.00016ZM1.66797 13.4168C0.977613 13.4168 0.417969 13.9765 0.417969 14.6668C0.417969 15.3572 0.977613 15.9168 1.66797 15.9168H18.3346C19.025 15.9168 19.5846 15.3572 19.5846 14.6668C19.5846 13.9765 19.025 13.4168 18.3346 13.4168H1.66797Z"
                  fill="#314660"
                />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>About</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <span>About Us</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Our Location</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <span>Contact</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>

              <DropdownMenuItem>
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="w-[100px] h-[40px]">
          <Image width={100} src={logo} alt="" />
        </div>
        <div className="flex justify-between items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.25 9.5C17.25 13.7802 13.7802 17.25 9.5 17.25C5.21979 17.25 1.75 13.7802 1.75 9.5C1.75 5.21979 5.21979 1.75 9.5 1.75C13.7802 1.75 17.25 5.21979 17.25 9.5ZM9.5 18.75C14.6086 18.75 18.75 14.6086 18.75 9.5C18.75 4.39137 14.6086 0.25 9.5 0.25C4.39137 0.25 0.25 4.39137 0.25 9.5C0.25 14.6086 4.39137 18.75 9.5 18.75ZM20.4211 20.4214C19.6499 21.1925 18.3997 21.1925 17.6286 20.4214L15.7557 18.5485C16.8459 17.7934 17.793 16.8463 18.5481 15.7561L20.4211 17.629C21.1922 18.4001 21.1922 19.6503 20.4211 20.4214Z"
              fill="#314660"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11 20.5C11 21.3284 10.3284 22 9.5 22C8.67157 22 8 21.3284 8 20.5C8 19.6716 8.67157 19 9.5 19C10.3284 19 11 19.6716 11 20.5Z"
              stroke="#314660"
              strokeWidth="1.5"
            />
            <path
              d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z"
              stroke="#314660"
              strokeWidth="1.5"
            />
            <path
              d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4ZM6 4C6 2.89543 5.10457 2 4 2H2M6 8H21.5"
              stroke="#314660"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
