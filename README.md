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


## Use Externals

If we specify peer dependencies as externals, they should not be bundled.  That
means that only the host would have a copy.

As an external, shared-dep is not included in the bundle for feature.
If we run host, shared-dep is used once as expected.
If we bundle host and run it, shared-dep is initialized twice.



```bash
~/code/js/peer-dep-state/host$ yarn start
yarn run v1.3.2
$ node ./dist/host.js
>>> HOST >>>
>>> shared-dep >>>, initializing
HOST get 1234
HOST set 200
HOST get 200
>>> FEATURE >>>
>>> shared-dep >>>, initializing
FEATURE get 1234
FEATURE set 100
FEATURE get 100
HOST get 200
HOST set 200
HOST get 200
✨  Done in 0.15s.

~/code/js/peer-dep-state/host$ node src/index.js
>>> HOST >>>
>>> shared-dep >>>, initializing
HOST get 1234
HOST set 200
HOST get 200
>>> FEATURE >>>
FEATURE get 200
FEATURE set 100
FEATURE get 100
HOST get 100
HOST set 200
HOST get 200
```
