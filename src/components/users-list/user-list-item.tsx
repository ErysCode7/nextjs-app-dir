"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

type UserListItemProps = {
  id: string | number;
  name: string;
};

const UserListItem = ({ id, name }: UserListItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const clickUserItem = () => {
    // PUSH TO THE DYNAMIC ROUTES
    router.push(`${pathname}/${id}`);

    // USE THE QUERY TO GET THE ID STATE
    const query = `?id=${id}` || "";
    // router.push(`${pathname}${query}`);
  };

  return (
    <div
      key={id}
      className="w-full bg-slate-100 px-2 py-5 flex items-center gap-2 cursor-pointer rounded-sm"
      onClick={clickUserItem}
    >
      <div className="relative h-8 w-8 cursor-pointer">
        <Image
          src={"https://mui.com/static/images/cards/contemplative-reptile.jpg"}
          alt={"Image"}
          className={`rounded-full absolute`}
          fill
        />
      </div>
      <h3 className="text-sm">{name}</h3>
    </div>
  );
};

export default UserListItem;
