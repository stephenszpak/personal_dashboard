defmodule DashboardWeb.AuthController do
  use DashboardWeb, :controller

  def register(conn, params) do
    # TODO: implement user registration
    json(conn, %{status: "registered", email: params["email"]})
  end

  def login(conn, params) do
    # TODO: implement user login
    json(conn, %{status: "logged_in", user: %{email: params["email"]}})
  end
end
