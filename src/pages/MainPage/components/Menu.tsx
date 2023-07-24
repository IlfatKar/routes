import { Menu as MenuAnt } from "antd";
import Sider from "antd/es/layout/Sider";
import { IMenuProps } from "../types/index";

export default function Menu({ routes, onClick }: IMenuProps) {
  return (
    <Sider breakpoint="md">
      {routes.length && (
        <MenuAnt
          onClick={(item) => onClick(item.key)}
          mode="vertical"
          theme="dark"
          defaultSelectedKeys={[routes[0]]}
          items={routes.map((item) => ({
            key: item,
            label: item,
          }))}
        />
      )}
    </Sider>
  );
}
