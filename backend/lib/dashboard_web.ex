defmodule DashboardWeb do
  def controller do
    quote do
      use Phoenix.Controller, namespace: DashboardWeb
      import Plug.Conn
      alias DashboardWeb.Router.Helpers, as: Routes
    end
  end

  def router do
    quote do
      use Phoenix.Router
      import Plug.Conn
    end
  end

  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end
