# TODO-PLAN-DONE

I am playing around with parsing my TODO-PLAN-DONE daily note format

Be cool to be able to query it and modify it in a browser, and parsing like this would allow me to more easily create a projection of where I've spent my time over the hours of the day that's easier to scan than plain text

## Dev loop

Edit the example-file so it contains what you're implementing and run:
```
npx tree-sitter generate && npx tree-sitter parse example-file
```

## Catch regressions

Add input/output test cases in test/corpus/statements.txt
```
npx tree-sitter test [-f <test>]
```

## Try in playground

Prerequisites
- if you've made changes to grammar.js then you've run `npx tree-sitter generate && npx tree-sitter build-wasm`
- you've started and have open the playground `npx tree-sitter playground`

Example input:
```
TODO mow the lawn
DONE update subscriptions with new card details
DONE post letter to friend
```

Example query:
```
(
  (task
    state: (state) @state
    description: (description))
  (#match? @state "DONE")
)
```

Expected output is that you'll see the two DONE items highlighted blue
