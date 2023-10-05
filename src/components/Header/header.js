import Image from "next/image";
import React from "react";
import fptLogo from "../../../public/images/fptLogo.png";
import notification from "../../../public/images/notification.png";
import avatar from "../../../public/images/avatar.png";
import dropdown from "../../../public/images/dropdown.png";

export default function HeaderUser() {
  return (
    <div className="bg-[#F3B78C] flex justify-between py-2 px-1">
      <Image src={fptLogo} alt="logo" />
      <div className="flex items-center gap-x-2">
        <div>
          <Image src={notification} alt="notification" />
        </div>
        <Image src={avatar} alt="logo" />
        <h4>Admin</h4>
        <div>
          <Image src={dropdown} alt="logo" />
        </div>
      </div>
    </div>
  );
}
