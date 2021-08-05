# studyspots

## Todo list

> Frontend

[ ] Setup E2E walking skeleton
[ ] Setup page object pattern
[ ] Develop and test a thin slice of functionality that works E2E and can refresh
  > The test that we're going to test E2E is going to be "Post Spot". It will exercise everything from the FE to the graph, the use case, the unit of work, the transaction for both the state and the event, the channel adapter, the message bus, and it should store the spot details in the redis cache (infra subscriber) and trigger a subscription to be picked up by another subscriber (application).
  > This will leave only the query side left to be tested
  > The stage of the walking skeleton:
    - We build out the tiniest slice of functionality that threads across all of the main architectural components, or as many of them as possible. 
    - As we do this, we'll be fleshing out the majority of our infrastructural components (stuff that lives in /infra) and it's going to be the stuff that we use to power the use cases and acceptance test-driven development loops that we do in functionality sprints.
      - This is the zero-functionality sprint right now. 
      - We've said that this is the kind of thing that can take time to do. I'm already seeing that it's quite true. I fought with Docker for pretty much an entire day just trying to get a local development environment set up as well as test scripts, startup scripts, deployment scripts, and so on.

> **Deploying and testing**: (or further reason why we should think about testability of deployed environments very early on instead of later)
      - I've been thinking a little bit more about when we deploy this thing, how are we going to test it?
      - This is good to for us to figure out now when the cost of doing so is very very low.
      - For example, I want to test that something gets cached, and I have a plan to do that by manually inspecting the cache from my cypress script. That's cool and all, but when I deploy that to a production-like environment (staging, similar to prod hopefully), how will I be able to do that? Redis won't be public. It'll be behind a private VPN. 
        - You see? These are the kinds of things we want to figure out early on.
        - Options for this predicament are:
          1. Just test in staging with a less secure setup
          2. Write the test in a way where I can confirm it works without needing to actually manually introspect the cache remotely.
        - How the fugg would we do this?
        - Thinking...
        - And you know what? Option 2 is a better way to do it. YOU SEE? And just by being forced to think about it, I already found a better way. The way that we'll test that is by putting headers on the response data for anything that is cached. We'll get to know when it was cached and when it expires. That'll come back in the response.

> Backend

[x] Set up dev environment script (reloading, local database, adminer, docker for everything else)
[x] Test that we can connect to mysql
[x] Test that we can connect to redis

[ ] Figure out how I'm going to do this messaging thing, end to end.
  [ ] Writing messages -- transaction (unit of work to aggregate + event table)
  [ ] Sequelize hook into Event table 
  [ ] Publish event into Redis (so that other applications could also use it)
  [ ] Subscribe to events

[x] Set up test environment script (docker for everything)
[ ] Set up prod environment script (real services - heroku)


[ ] Develop the acceptance testing architecture for use cases
[ ] Develop the contract/integration tests for redis and confirm that we can cache and evict things by identifier (set, get, evict)
[ ] Set up the GraphQL API
[ ] Set up the Apollo Studio schema registration scripts
[ ] Have separate scripts for unit tests and integration tests
[ ] Build out a unit of work pattern that works for transactions
[ ] Build out event storage 


