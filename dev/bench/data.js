window.BENCHMARK_DATA = {
  "lastUpdate": 1761919255229,
  "repoUrl": "https://github.com/hulk8/cayleypy",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "khalturinmv@it.mos.ru",
            "name": "Михаил Халтурин"
          },
          "committer": {
            "email": "khalturinmv@it.mos.ru",
            "name": "Михаил Халтурин"
          },
          "distinct": true,
          "id": "a51411873b2941b29bc3baa97c5ddac3fc77f09a",
          "message": "Use pytest marks and add benchmark jobs\n\n- Pytest runs now utilize marks for better test selection.\n- Benchmark jobs have been added to the CI pipeline.",
          "timestamp": "2025-10-31T16:32:59+03:00",
          "tree_id": "ce9a2ca98c2c8b0dc721f09f81b7155fc4d3bc8a",
          "url": "https://github.com/hulk8/cayleypy/commit/a51411873b2941b29bc3baa97c5ddac3fc77f09a"
        },
        "date": 1761919254857,
        "tool": "pytest",
        "benches": [
          {
            "name": "cayleypy/cayley_graph_test.py::test_benchmark_top_spin[26-baseline]",
            "value": 0.1474378067439646,
            "unit": "iter/sec",
            "range": "stddev: 0.04623832359399118",
            "extra": "mean: 6.78252086139999 sec\nrounds: 5"
          },
          {
            "name": "cayleypy/cayley_graph_test.py::test_benchmark_top_spin[26-bit_encoded]",
            "value": 0.5998103584867923,
            "unit": "iter/sec",
            "range": "stddev: 0.01761436859590613",
            "extra": "mean: 1.6671936151999944 sec\nrounds: 5"
          },
          {
            "name": "cayleypy/cayley_graph_test.py::test_benchmark_top_spin[26-bfs_numpy]",
            "value": 0.4990530860447077,
            "unit": "iter/sec",
            "range": "stddev: 0.03864054459131491",
            "extra": "mean: 2.0037948426000014 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}