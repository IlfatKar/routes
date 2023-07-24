import "./MainPage.css";
import { Layout, notification } from "antd";
import Menu from "./components/Menu";
import MapEl from "./components/Map";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { changeCurrent } from "../../entities/routes";
import { getPath } from "../../entities/routes/";
import { useEffect } from "react";

function MainPage() {
  const [api, contextHolder] = notification.useNotification();

  const routes = useSelector((state: RootState) => state.routes.routesList);
  const currentRoute = useSelector(
    (state: RootState) => state.routes.currentRoute
  );
  const path = useSelector((state: RootState) => state.routes.currentPath);
  const err = useSelector((state: RootState) => state.routes.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPath(routes[currentRoute]));
  }, [routes, currentRoute]);

  useEffect(() => {
    if (err) {
      api.error({ message: "Ошибка!", description: err });
    }
  }, [err]);

  return (
    <Layout>
      {contextHolder}
      <Menu
        routes={Object.keys(routes)}
        onClick={(key) => dispatch(changeCurrent(key))}
      />
      <MapEl path={path} />
    </Layout>
  );
}

export default MainPage;
