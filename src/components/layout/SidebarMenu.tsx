import Link from "next/link";
import { FaHouseUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdDashboard, MdOutlinePets } from "react-icons/md";
import { RiGitPullRequestFill } from "react-icons/ri";
import { TbHexagonPlusFilled } from "react-icons/tb";

const admin = [
  {
    key: 1,
    icon: <MdDashboard className="w-5 h-5 !text-secondary" />,
    label: (
      <Link className="text-base " href={"/dashboard/admin"}>
        Dashboard
      </Link>
    ),
  },
  {
    key: 2,
    icon: <MdOutlinePets className="w-5 h-5 !text-secondary" />,
    label: (
      <Link className="text-base " href={"/dashboard/admin/pet-management"}>
        Pet Management
      </Link>
    ),
  },
  {
    key: 3,
    icon: <FaHouseUser className="w-5 h-5 !text-secondary" />,
    label: (
      <Link className="text-base " href={"/dashboard/admin/user-management"}>
        User Management
      </Link>
    ),
  },
  {
    key: 4,
    icon: <RiGitPullRequestFill className="w-5 h-5 !text-secondary" />,
    label: (
      <Link className="text-base" href={"/dashboard/admin/request-management"}>
        Adaption Management
      </Link>
    ),
  },
  {
    key: 5,
    icon: <IoSettings className="w-5 h-5 !text-secondary" />,
    label: (
      <Link className="text-base " href={"/dashboard/admin/settings"}>
        Settings
      </Link>
    ),
  },
];

const customer = [
  {
    key: 1,
    icon: <MdDashboard className="w-5 h-5 !text-secondary" />,
    label: (
      <Link className="text-base " href={"/dashboard/customer"}>
        Dashboard
      </Link>
    ),
  },
  {
    key: 2,
    icon: <TbHexagonPlusFilled className="w-5 h-5 !text-secondary" />,
    label: (
      <Link className="text-base " href={"/dashboard/customer/pet-adaption"}>
        Add Adaption Request
      </Link>
    ),
  },
  {
    key: 3,
    icon: <RiGitPullRequestFill className="w-5 h-5 !text-secondary" />,
    label: (
      <Link className="text-base " href={"/dashboard/customer/my-adaption"}>
        My Adaption Request
      </Link>
    ),
  },
  {
    key: 4,
    icon: <IoSettings className="w-5 h-5 !text-secondary" />,
    label: (
      <Link className="text-base " href={"/dashboard/customer/settings"}>
        Settings
      </Link>
    ),
  },
];

export const sidebarMenuItems = {
  admin,
  customer,
};
