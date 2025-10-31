window.BENCHMARK_DATA = {
  "lastUpdate": 1761919271595,
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
      },
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
        "date": 1761919266100,
        "tool": "pytest",
        "benches": [
          {
            "name": "cayleypy/cayley_graph_test.py::test_benchmark_top_spin[26-baseline]",
            "value": 0.1443255417468104,
            "unit": "iter/sec",
            "range": "stddev: 0.058952740618953885",
            "extra": "mean: 6.928780504800011 sec\nrounds: 5"
          },
          {
            "name": "cayleypy/cayley_graph_test.py::test_benchmark_top_spin[26-bit_encoded]",
            "value": 0.6048481292602503,
            "unit": "iter/sec",
            "range": "stddev: 0.011334592954566946",
            "extra": "mean: 1.6533075851999968 sec\nrounds: 5"
          },
          {
            "name": "cayleypy/cayley_graph_test.py::test_benchmark_top_spin[26-bfs_numpy]",
            "value": 0.5490296997238324,
            "unit": "iter/sec",
            "range": "stddev: 0.024103411743449522",
            "extra": "mean: 1.821395091200003 sec\nrounds: 5"
          }
        ]
      },
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
        "date": 1761919270617,
        "tool": "pytest",
        "benches": [
          {
            "name": "cayleypy/cayley_graph_test.py::test_benchmark_top_spin[26-baseline]",
            "value": 0.1458156261465479,
            "unit": "iter/sec",
            "range": "stddev: 0.0741681511411705",
            "extra": "mean: 6.857975557399987 sec\nrounds: 5"
          },
          {
            "name": "cayleypy/cayley_graph_test.py::test_benchmark_top_spin[26-bit_encoded]",
            "value": 0.5973205554367228,
            "unit": "iter/sec",
            "range": "stddev: 0.012061980276446763",
            "extra": "mean: 1.6741429553999922 sec\nrounds: 5"
          },
          {
            "name": "cayleypy/cayley_graph_test.py::test_benchmark_top_spin[26-bfs_numpy]",
            "value": 0.538675121058636,
            "unit": "iter/sec",
            "range": "stddev: 0.019863411347682533",
            "extra": "mean: 1.8564065072000004 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}