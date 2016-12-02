'use strict';

const stripIndent = require('strip-indent');

module.exports = function (params) {
  let hash = arguments[arguments.length - 1].hash || {};
  let opts = Object.assign({
    width: '100%',
    height: '100%',
    bg: '#dddddd',
    fg: '#ffffff',
    font: 'sans-serif',
    size: '14px',
    weight: 'bold'
  }, hash);

  if (!hash.text) {
    opts.text = `${opts.width}x${opts.height}`;
  }

  const svg = encodeURIComponent(stripIndent(`
    <svg width="${opts.width}" height="${opts.height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${opts.width} ${opts.height}" preserveAspectRatio="none">
      <defs>
        <style type="text/css">
          #holder text {
            fill: ${opts.fg};
            font-family: ${opts.font};
            font-size: ${opts.size};
            font-weight: ${opts.weight};
          }
        </style>
      </defs>
      <g id="holder">
        <rect width="100%" height="100%" fill="${opts.bg}"></rect>
        <g>
          <text text-anchor="middle" x="50%" y="50%" dy=".3em">${opts.text}</text>
        </g>
      </g>
    </svg>`));

  return `data:image/svg+xml;charset=UTF-8,${svg}`;
}
