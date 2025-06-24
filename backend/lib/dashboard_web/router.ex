defmodule DashboardWeb.Router do
  use DashboardWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", DashboardWeb do
    pipe_through :api

    post "/register", AuthController, :register
    post "/login", AuthController, :login

    resources "/widgets", WidgetController, only: [:index, :create, :delete]
  end
end
