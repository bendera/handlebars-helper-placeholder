'use strict';

const stripIndent = require('strip-indent');

module.exports = function (params) {
  let hash = arguments[arguments.length - 1].hash || {};
  let opts = Object.assign({
    width: '100%',
    height: '100%',
    bgColor: '#dddddd',
    fgColor: '#ffffff',
    fontFamily: 'sans-serif',
    fontSize: '14px',
    fontWeight: 'bold'
  }, hash);

  if (!hash.text) {
    opts.text = `${opts.width}x${opts.height}`;
  }

  const svg = encodeURIComponent(stripIndent(`
    <svg width="${opts.width}" height="${opts.height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${opts.width} ${opts.height}" preserveAspectRatio="none">
      <defs>
        <style type="text/css">
          #holder text {
            fill: ${opts.fgColor};
            font-family: ${opts.fontFamily};
            font-size: ${opts.fontSize};
            font-weight: ${opts.fontWeight};
          }
        </style>
      </defs>
      <g id="holder">
        <rect width="100%" height="100%" fill="${opts.bgColor}"></rect>
        <g>
          <text text-anchor="middle" x="50%" y="50%" dy=".3em">${opts.text}</text>
        </g>
      </g>
    </svg>`));

  return `data:image/svg+xml;charset=UTF-8,${svg}`;
}
