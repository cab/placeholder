# placeholder

A sweetjs macro for the identity function.

## examples

```javascript
> [0, 1, 2].map(_ + 1)
// desugars to [0, 1, 2].map(i => i + 1)
// results in [1, 2, 3]
```

```javascript
> [["oh"], ["hello"], ["world"]].map(_.map(_.length))
// desugars to [["oh"], ["hello"], ["world"]].map(i => i.map(j => j.length))
// results in [[2], [5], [5]]
```
