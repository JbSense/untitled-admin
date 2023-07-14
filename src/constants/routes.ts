export const ROUTES = {
  private: {
    dashboard: '/dashboard',
    usuarios: '/dashboard/usuarios',
    adicionarUsuarios: '/dashboard/usuarios/adicionar',
    editarUsuarios: '/dashboard/usuarios/editar',
    simulador: '/dashboard/simulador',
    ofertas: '/dashboard/ofertas',
    visualizarOferta: '/dashboard/ofertas/', // :id
    adicionarOferta: '/dashboard/ofertas/adicionar'
  },
  public: {
    signIn: '/auth/signIn'
  }
};
