# Peer Dependency State

Does a dependency share state across a project?


### Hypothesis

Yes.  The code will only be interpretted once.


### Test

Create a package that has a singleton state. (shared-dep)

feature
* uses shared-dep as a peer dependency
* set/read state in shared-dep

host
* uses shared-dep as a dependency
* set/read state in shared-dep

If the state persists across app, peer dep state is shared.


### Result

```bash
~/code/js/peer-dep-state/host$ yarn start
yarn run v1.3.2
$ node ./index.js
I am shared-dep.
initial state 1234
I am host.
get 1234
set 200
get 200
I am feature.
get 200
set 100
get 100
```


### Conclusion

State is shared across the app.



## With Webpack (Peer Dependencies)


### Question

Is state shared across the peer dependency when packaged with Webpack?


### Hypothesis

Peer dependencies will still share state, since there will be only one instance
of the dependency across the project.


### Result

```bash
~/code/js/peer-dep-state/host$ yarn start
yarn run v1.3.2
$ node ./dist/host.js
I am shared-dep, built by Webpack!
initial state 1234
I am host, built by Webpack!
get 1234
set 200
get 200
I am shared-dep, built by Webpack!
initial state 1234
I am feature, built by Webpack!
get 1234
set 100
get 100
```

The state is not shared as the modules are not shared.

Peer dependency is just how the module is found when requiring.  If the
shared dependency is bundled with _another_ dependency _and_ the host, they
will each have their own copy.


