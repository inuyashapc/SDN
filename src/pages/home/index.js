import HeaderUser from "@/components/Header/header";
import React from "react";
import { IconSearch } from "../../../public/Icon";

export default function Home() {
  return (
    <div>
      <HeaderUser />
      <h1 className="mb-4">New Feed</h1>
      <div className="flex items-center gap-4">
        <div className="p-2 flex gap-1 border rounded-lg">
          <IconSearch />
          <input placeholder="Tìm kiếm sản phẩm" />
        </div>
        <button className="bg-blue-600 py-1 px-2 rounded-lg">Search</button>
      </div>
    </div>
  );
}
