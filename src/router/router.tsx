import { Router } from "types/Router";

export const router: Router[] = [
  {
    path: "/",
    // redirect: "/auth/login",
    redirect: "/form/123/edit",
  },
  {
    path: "/auth",
    componentPath: "layouts/AuthLayout",
    redirect: "/auth/login",
    children: [
      {
        path: "login",
        componentPath: "pages/Auth/Login",
      },
      {
        path: "register",
        componentPath: "pages/Auth/Register",
      },
      {
        path: "change-password",
        componentPath: "pages/Auth/ChangePassword",
      },
      {
        path: "recover-password",
        componentPath: "pages/Auth/RecoverPassword",
      },
    ],
  },
  {
    path: "/form",
    componentPath: "layouts/FormLayout",
    children: [
      {
        path: ":formId/edit",
        componentPath: "pages/Form/Edit",
      },
      {
        path: ":formId/view",
        componentPath: "pages/Form/View",
      },
    ],
  },
  {
    path: "*",
    componentPath: "pages/404",
  },
];
