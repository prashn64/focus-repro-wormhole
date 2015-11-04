# Focus-repro

### BUG 1: focus loss on wormhole activation in iOS chrome

#### Steps:

1. Open Chrome on iOS
2. Click on the input
3. Type a character

Expected: Focus retains on input
Actual: Focus is lost

### BUG 2: focus loss on wormhole deactivation in iOS chrome

#### Steps

1. Open Chrome on iOS.
2. Click on the input
3. Type a character
4. Refocus and type a few more characters
5. Delete your query all the way

Expected: Focus retains on input
Actual: Focus is lost

### Bug 3: Keystrokes dropping

#### Steps

1. Open browser on any mobile device (preferably one with older hardware)
2. type 3 characters very fast.

Expected: All keys are in the input
Actual: The 2nd or 3rd keys are dropped occassionaly

This problem is exacerbated on more complex apps.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

