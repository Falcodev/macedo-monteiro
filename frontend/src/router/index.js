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

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "login", component: LoginComponent },
    {
      path: "/home",
      name: "home",
      component: HomeComponent,
      meta: { requiresAuth: true }
    },
    {
      path: "/divulgacao-de-resultados",
      name: "divulgacao-de-resultados",
      component: DivulgResultComponent,
      meta: { requiresAuth: true }
    },
    { path: "/criarnovo", name: "adcionarnovo", component: CriarNovoComponent },
    { path: "/pendencias", name: "pendencias", component: PendenciasComponent },
    {
      path: "/abrir-pendencia",
      name: "abrir-pendencia",
      component: AbrirPendenciaComponent
    },
    {
      path: "/solicitaraprovacao",
      name: "solicitar_aprovacao",
      component: SolicitarAprovacaoComponent
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    const token = localStorage.getItem("token");
    if (!token) next({ path: "/" });
  }
  next();
});

export default router;
