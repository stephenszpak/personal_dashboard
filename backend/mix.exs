defmodule Dashboard.MixProject do
  use Mix.Project

  def project do
    [
      app: :dashboard,
      version: "0.1.0",
      elixir: "~> 1.15",
      elixirc_paths: ["lib"],
      compilers: [:phoenix] ++ Mix.compilers,
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  def application do
    [
      mod: {Dashboard.Application, []},
      extra_applications: [:logger, :runtime_tools]
    ]
  end

  defp deps do
    [
      {:phoenix, "~> 1.7"},
      {:phoenix_pubsub, "~> 2.1"},
      {:phoenix_html, "~> 3.3"},
      {:phoenix_ecto, "~> 4.4"},
      {:ecto_sql, "~> 3.9"},
      {:postgrex, "~> 0.16"},
      {:jason, "~> 1.2"},
      {:plug_cowboy, "~> 2.5"},
      {:guardian, "~> 2.0"}
    ]
  end
end
