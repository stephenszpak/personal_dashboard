defmodule Dashboard.Application do
  use Application

  def start(_type, _args) do
    children = [
      Dashboard.Repo,
      DashboardWeb.Endpoint
    ]

    opts = [strategy: :one_for_one, name: Dashboard.Supervisor]
    Supervisor.start_link(children, opts)
  end

  def config_change(changed, _new, removed) do
    DashboardWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
