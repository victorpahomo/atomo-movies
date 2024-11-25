import { Link } from "react-router";

import MarginLayout from "@/components/layouts/margin-layout/MarginLayout";
import MainLayout from "@/components/layouts/main-layout/MainLayout";
import noRouteImg from "@/assets/img/routeNotFound.webp";

import "./NotFoundError.css";

export default function NotFoundError() {
  return (
    <MainLayout>
      <MarginLayout>
        <div className="not-found">
          <img src={noRouteImg} alt="Página no encontrada" width={200} />
          <h2>¡Ups! Parece que esta página no existe.</h2>
          <p>¿Quieres volver a la página principal?</p>
          <Link className="not-found__link" to="/">
            Página principal
          </Link>
        </div>
      </MarginLayout>
    </MainLayout>
  );
}
