# &lt;paper-canvas&gt;

[Paper.js](http://paperjs.org/) and canvas element wrapper.

## Demo

> [Check it live](http://octavioturra.github.io/paper-canvas).

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install paper-canvas --save
```

Or [download as ZIP](https://github.com/octavioturra/paper-canvas/archive/master.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/paper-canvas/dist/paper-canvas.html">
    ```

3. Start using it!

    ```html
    <paper-canvas></paper-canvas>
    ```

## Options

Attribute    | Options    | Default  | Description
---          | ---        | ---      | ---
`width`      | *string*   | `800px`  | Specifies entire element width.
`height`     | *string*   | `600px`  | Specifies entire element height.
`background` | *string*   | `#FFF`   | Specifies the background color of the layer.

> See Paper.js [official documentation](http://paperjs.org/reference/).

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

* Install [Bower](http://bower.io/) & [Grunt](http://gruntjs.com/):

    ```sh
    $ [sudo] npm install -g bower grunt-cli
    ```

* Install local dependencies:

    ```sh
    $ bower install && npm install
    ```

* To test your project, start the development server and open `http://localhost:8000`.

    ```sh
    $ grunt server
    ```

* To build the distribution files before releasing a new version.

    ```sh
    $ grunt build
    ```

* To provide a live demo, send everything to `gh-pages` branch.

    ```sh
    $ grunt deploy
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/octavioturra/paper-canvas/releases).

## License

[MIT License](http://octavioturra.mit-license.org/) © Octavio Turra