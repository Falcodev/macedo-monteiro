import Vue from "vue";
import VueRouter from "vue-router";

import LoginComponent from "../pages/Login/LoginComponent";
import HomeComponent from "../pages/Home/HomeComponent";
import DivulgResultComponent from "../pages/DivulgacaoResultado/DivulgResultComponent";
import CriarNovoComponent from "../pages/CriarNovo/CriarNovoComponent";
import PendenciasComponent from "../pages/Pendencias/PendenciasComponent";
import AbrirPendenciaComponent from "../pages/AbrirPendencia/AbrirPendenciaComponent";
import SolicitarAprovacaoComponent from "../pages/SolicitarAprovacao/SolicitarAprovacaoComponent";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: LoginComponent },
  { path: "/home", name: "home", component: HomeComponent },
  {
    path: "/divulgacao-de-resultados",
    name: "divulgacao-de-resultados",
    component: DivulgResultComponent
  },
  { path: "/criarnovo", name: "adcionarnovo", component: CriarNovoComponent },
  { path: "/pendencias", name: "pendencias", component: PendenciasComponent },
  {
    path: "/abrirpendencia",
    name: "abrirpendencia",
    component: AbrirPendenciaComponent
  },
  {
    path: "/solicitaraprovacao",
    name: "solicitar_aprovacao",
    component: SolicitarAprovacaoComponent
  }
];

const router = new VueRouter({
  routes
});

export default router;
