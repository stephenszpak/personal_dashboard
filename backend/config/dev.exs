import Config

config :dashboard, Dashboard.Repo,
  username: System.get_env("POSTGRES_USER") || "admin",
  password: System.get_env("POSTGRES_PASSWORD") || "postgres",
  database: System.get_env("POSTGRES_DB") || "fp_db_qunw",
  hostname: System.get_env("POSTGRES_HOST") || "dpg-d19bsdadbo4c73d56f2g-a.ohio-postgres.render.com",
  port: String.to_integer(System.get_env("POSTGRES_PORT") || "5432"),
  ssl: true,
  ssl_opts: [verify: :verify_none],
  show_sensitive_data_on_connection_error: true,
  pool_size: String.to_integer(System.get_env("POOL_SIZE") || "10")

config :dashboard, DashboardWeb.Endpoint,
  http: [port: 4000],
  debug_errors: true,
  code_reloader: true,
  check_origin: false,
  watchers: []

config :logger, :console, format: "[$level] $message\n"
