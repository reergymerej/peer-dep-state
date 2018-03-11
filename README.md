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
