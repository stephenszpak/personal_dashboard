import Config

config :dashboard, Dashboard.Repo,
  username: System.get_env("POSTGRES_USER") || "admin",
  password: System.get_env("POSTGRES_PASSWORD") || "postgres",
  database: System.get_env("POSTGRES_DB") || "fp_db_qunw",
  hostname: System.get_env("POSTGRES_HOST") || "dpg-d19bsdadbo4c73d56f2g-a.ohio-postgres.render.com",
  port: String.to_integer(System.get_env("POSTGRES_PORT") || "5432"),
  pool: Ecto.Adapters.SQL.Sandbox
