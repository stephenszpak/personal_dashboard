defmodule DashboardWeb.WidgetController do
  use DashboardWeb, :controller

  def index(conn, _params) do
    json(conn, %{widgets: []})
  end

  def create(conn, params) do
    # TODO: persist widget
    json(conn, %{widget: params})
  end

  def delete(conn, %{"id" => id}) do
    # TODO: delete widget
    send_resp(conn, 204, "")
  end
end
