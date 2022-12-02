import LayoutAdmin from "../../components/layout-admin";
import Image from "next/image";
import homeroute from "../../public/homeroute.svg";
export default function Index() {
  return (
    <LayoutAdmin>
      <div className="flex p-4 place-items-center gap-2">
        <Image width={20} src={homeroute} alt={"#"} />
        <h1 className="text-xs">Admin</h1>
      </div>
    </LayoutAdmin>
  );
}
