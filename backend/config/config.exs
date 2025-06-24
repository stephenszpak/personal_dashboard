import Config

config :dashboard, DashboardWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "SECRET_KEY_BASE",
  render_errors: [view: DashboardWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: Dashboard.PubSub

config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :dashboard, ecto_repos: [Dashboard.Repo]

import_config "#{config_env()}.exs"
