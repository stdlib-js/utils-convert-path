<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Convert Path

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert between POSIX and Windows paths.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->





<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->



<!-- Package usage examples. -->



<!-- Section for describing a command-line interface. -->



<section class="cli">



<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/utils-convert-path-cli
```

</section>
<!-- CLI usage documentation. -->


<section class="usage">

## Usage

```text
Usage: convert-path [options] [<path>] --out=<output>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  -o,    --out output          Output path convention.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'c:/foo/bar\n./docs/eslint' | convert-path --out=posix --split /\r?\n/
    # Escaped...
    $ echo -n $'c:/foo/bar\n./docs/eslint' | convert-path --out=posix --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

## Examples

```bash
$ convert-path /c/foo/bar --out=mixed
c:/foo/bar
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '/c/foo/bar' | convert-path --out=win32
c:\foo\bar
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'c:/foo/bar\t./docs/eslint' | convert-path  --out=win32 --split '\t'
c:\foo\bar
.\docs\eslint
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

## See Also

-   <span class="package-name">[`@stdlib/utils-convert-path`][@stdlib/utils-convert-path]</span><span class="delimiter">: </span><span class="description">convert between POSIX and Windows paths.</span>


</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-convert-path-cli.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-convert-path-cli

[test-image]: https://github.com/stdlib-js/utils-convert-path/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-convert-path/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-convert-path/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-convert-path?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-convert-path.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-convert-path/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/utils-convert-path#cli
[cli-url]: https://github.com/stdlib-js/utils-convert-path/tree/cli
[@stdlib/utils-convert-path]: https://github.com/stdlib-js/utils-convert-path/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-convert-path/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-convert-path/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-convert-path/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-convert-path/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-convert-path/main/LICENSE

[extended-length-path]: https://msdn.microsoft.com/en-us/library/windows/desktop/aa365247(v=vs.85).aspx

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
