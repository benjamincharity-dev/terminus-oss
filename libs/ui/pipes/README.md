<h1>Pipes</h1>

[![CI/CD Status][github-action-badge]][github-action-link] [![Codecov][codecov-badge]][codecov-project] [![MIT License][license-image]][license-url]  
[![NPM version][npm-version-image]][npm-package] [![Github release][gh-release-badge]][gh-releases] [![Library size][file-size-badge]][raw-distribution-js]

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Available pipes](#available-pipes)
- [Usage](#usage)
  - [HTML](#html)
  - [Class](#class)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Available pipes

| Pipe                                              | Notes                                       |
|---------------------------------------------------|---------------------------------------------|
| [`tsAbbreviateNumber`][src-pipes-abbreviateNumber]| Abbreviate a number                         |
| [`tsDate`][src-pipes-date]                        | `short`, `medium`, `extended`, `timestamp`  |
| [`tsRoundNumber`][src-pipes-roundNumber]          | Round a number to a specific precision      |
| [`tsSentenceCase`][src-pipes-sentenceCase]        | Convert string casing to sentence-case      |
| [`tsTimeAgo`][src-pipes-timeAgo]                  | Human-readable time span                    |
| [`tsTitleCase`][src-pipes-titleCase]              | Title Case A String                         |
| [`tsTruncateAt`][src-pipes-truncate]              | Truncate a string, `start`, `middle`, `end` |


## Usage

### HTML

Import the `TsPipesModule` module into your app:

```typescript
import { TsPipesModule } from '@terminus/ui-pipes';

@NgModule({
  imports: [
    ...
    TsPipesModule,
  ],
  ...
})
export class AppModule {}
```

Then use the pipe in HTML:

```html
{{ 'HERE IS MY STRING' | tsSentenceCase }}
```


### Class

Import the pipes module to your app:

```typescript
import { TsPipesModule } from '@terminus/ui-pipes';

@NgModule({
  ...
  imports: [
    TsPipesModule,
  ],
  ...
})
export class AppModule {}
```

Then inject the pipe into your class and use:

```typescript
import { TsSentenceCasePipe } from '@terminus/ui-pipes';

@Component({
  ...
})
export class PipesComponent {
  myString = this.sentenceCasePipe.transform('ANOTHER STRING');

  constructor(private sentenceCasePipe: TsSentenceCasePipe) {}
}
```

<!-- Links -->
[src-pipes-abbreviateNumber]: src/lib/abbreviate-number/abbreviate-number.pipe.ts
[src-pipes-date]:             src/lib/date/date.pipe.ts
[src-pipes-roundNumber]:      src/lib/round-number/round-number.pipe.ts
[src-pipes-sentenceCase]:     src/lib/sentence-case/sentence-case.pipe.ts
[src-pipes-timeAgo]:          src/lib/time-ago/time-ago.pipe.ts
[src-pipes-titleCase]:        src/lib/title-case/title-case.pipe.ts
[src-pipes-truncate]:         src/lib/truncate/truncate.pipe.ts
[license-url]:                https://github.com/GetTerminus/terminus-oss/blob/master/LICENSE
[license-image]:              http://img.shields.io/badge/license-MIT-blue.svg
[codecov-project]:            https://codecov.io/gh/GetTerminus/terminus-oss
[codecov-badge]:              https://codecov.io/gh/GetTerminus/terminus-oss/branch/master/graph/badge.svg
[npm-version-image]:          http://img.shields.io/npm/v/@terminus/ui-pipes.svg
[npm-package]:                https://www.npmjs.com/package/@terminus/ui-pipes
[gh-release-badge]:           https://img.shields.io/github/release/GetTerminus/terminus-oss.svg
[gh-releases]:                https://github.com/GetTerminus/terminus-ui/releases/
[github-action-badge]:        https://github.com/GetTerminus/terminus-oss/workflows/CI%20Release/badge.svg
[github-action-link]:         https://github.com/GetTerminus/terminus-oss/actions?query=workflow%3A%22CI+Release%22
[file-size-badge]:            http://img.badgesize.io/https://unpkg.com/@terminus/ui-pipes/bundles/terminus-ui-pipes.umd.min.js?compression=gzip
[raw-distribution-js]:        https://unpkg.com/@terminus/ui-pipes/bundles/terminus-ui-pipes.umd.js