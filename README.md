Repo to demonstrate Rollup not transpiling a node module with JSX syntax during build

To reproduce:

```
npm run build
```

Output:

```
▲ ~/s/vite-gifted npm run build

> vite-gifted@0.0.0 build
> tsc && vite build

vite v4.0.4 building for production...
✓ 12 modules transformed.
[commonjs--resolver] Unexpected token (356:26) in /Users/ollie/sites/vite-gifted/node_modules/react-native-gifted-chat/lib/GiftedChat.js
file: /Users/ollie/sites/vite-gifted/node_modules/react-native-gifted-chat/lib/GiftedChat.js:356:26
354:     renderMessages() {
355:         const { messagesContainerStyle, ...messagesContainerProps } = this.props;
356:         const fragment = (<View style={[
                               ^
357:                 {
358:                     height: this.state.messagesContainerHeight,
error during build:
SyntaxError: Unexpected token (356:26) in /Users/ollie/sites/vite-gifted/node_modules/react-native-gifted-chat/lib/GiftedChat.js
    at Object.pp$4.raise (file:///Users/ollie/sites/vite-gifted/node_modules/rollup/dist/es/shared/rollup.js:20337:13)
    at Object.pp$9.unexpected (file:///Users/ollie/sites/vite-gifted/node_modules/rollup/dist/es/shared/rollup.js:17638:8)
    at Object.pp$5.parseExprAtom (file:///Users/ollie/sites/vite-gifted/node_modules/rollup/dist/es/shared/rollup.js:19721:10)
    at Object.pp$5.parseExprSubscripts (file:///Users/ollie/sites/vite-gifted/node_modules/rollup/dist/es/shared/rollup.js:19513:19)
    at Object.pp$5.parseMaybeUnary (file:///Users/ollie/sites/vite-gifted/node_modules/rollup/dist/es/shared/rollup.js:19479:17)
    at Object.pp$5.parseExprOps (file:///Users/ollie/sites/vite-gifted/node_modules/rollup/dist/es/shared/rollup.js:19406:19)
    at Object.pp$5.parseMaybeConditional (file:///Users/ollie/sites/vite-gifted/node_modules/rollup/dist/es/shared/rollup.js:19389:19)
    at Object.pp$5.parseMaybeAssign (file:///Users/ollie/sites/vite-gifted/node_modules/rollup/dist/es/shared/rollup.js:19356:19)
    at Object.pp$5.parseParenAndDistinguishExpression (file:///Users/ollie/sites/vite-gifted/node_modules/rollup/dist/es/shared/rollup.js:19817:28)
    at Object.pp$5.parseExprAtom (file:///Users/ollie/sites/vite-gifted/node_modules/rollup/dist/es/shared/rollup.js:19680:41)
```
