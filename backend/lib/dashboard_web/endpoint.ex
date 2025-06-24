defmodule DashboardWeb.Endpoint do
  use Phoenix.Endpoint, otp_app: :dashboard

  plug Plug.Static,
    at: "/",
    from: :dashboard,
    gzip: false

  plug Plug.RequestId
  plug Plug.Telemetry, event_prefix: [:phoenix, :endpoint]

  plug Plug.Parsers,
    parsers: [:urlencoded, :multipart, :json],
    pass: ["*/*"],
    json_decoder: Jason

  plug Plug.MethodOverride
  plug Plug.Head
  plug DashboardWeb.Router
end
