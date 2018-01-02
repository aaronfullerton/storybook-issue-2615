This repo is a reproduction of issue https://github.com/storybooks/storybook/issues/2615

Using storybook 3.2.18, the following is rendered:

![working](https://cl.ly/2O3l1w1a3Q27/Image%202018-01-02%20at%204.44.03%20PM.png)

Using storybook 3.3.3, the following is rendered:

![not working](https://cl.ly/1A233m3l1h04/Image%202018-01-02%20at%204.49.09%20PM.png)

and the following is output to the js console

```
app.js:131 Uncaught Error: Target container is not a DOM element.
    at invariant (invariant.js:42)
    at renderSubtreeIntoContainer (react-dom.development.js:15180)
    at Object.render (react-dom.development.js:15290)
    at ./node_modules/@storybook/ui/dist/modules/ui/routes.js.exports.default (routes.js:39)
    at App.init (app.js:119)
    at ./node_modules/@storybook/ui/dist/index.js.exports.default (index.js:41)
    at Object../node_modules/@storybook/react/dist/client/manager/index.js (index.js:16)
    at __webpack_require__ (bootstrap 8a59b57e4180c863b8a8:678)
    at fn (bootstrap 8a59b57e4180c863b8a8:88)
    at Object.0 (browser.js:60)
    at __webpack_require__ (bootstrap 8a59b57e4180c863b8a8:678)
    at ./.storybook/addons.js.Object.defineProperty.value (bootstrap 8a59b57e4180c863b8a8:724)
    at bootstrap 8a59b57e4180c863b8a8:724
```
