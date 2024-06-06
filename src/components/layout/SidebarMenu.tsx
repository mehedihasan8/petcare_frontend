import Link from "next/link";
import { CiSettings } from "react-icons/ci";
import { FaHouseUser } from "react-icons/fa";
import {
  MdDashboard,
  MdOutlineInventory2,
  MdOutlinePets,
} from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

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
];

const customer = [
  {
    key: 1,
    icon: <RxDashboard />,
    label: <Link href={"/dashboard/customer"}>Dashboard</Link>,
  },
  {
    key: 2,
    icon: <MdOutlineInventory2 />,
    label: <Link href={"/dashboard/pet-management"}>Pet Management</Link>,
  },
  {
    key: 3,
    icon: <CiSettings />,
    label: <Link href={"/dashboard/user-management"}>User Management</Link>,
  },
];

export const sidebarMenuItems = {
  admin,
  customer,
};
