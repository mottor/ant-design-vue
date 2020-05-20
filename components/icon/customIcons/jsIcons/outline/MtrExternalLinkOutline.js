const MtrExternalLinkOutline = {
  name: 'mtr-external-link',
  theme: 'outline',
  icon: {
    tag: 'svg',
    attrs: {
      fill: 'none',
      height: '24',
      stroke: 'currentColor',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      viewBox: '0 0 24 24',
      width: '24',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
        },
      },
      {
        tag: 'polyline',
        attrs: {
          points: '15 3 21 3 21 9',
        },
      },
      {
        tag: 'line',
        attrs: {
          x1: '10',
          x2: '21',
          y1: '14',
          y2: '3',
        },
      },
    ],
  },
};
export default MtrExternalLinkOutline;
