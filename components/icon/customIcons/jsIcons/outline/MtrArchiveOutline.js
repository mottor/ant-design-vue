const MtrArchiveOutline = {
  name: 'mtr-archive',
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
        tag: 'polyline',
        attrs: {
          points: '21 8 21 21 3 21 3 8',
        },
      },
      {
        tag: 'rect',
        attrs: {
          height: '5',
          width: '22',
          x: '1',
          y: '3',
        },
      },
      {
        tag: 'line',
        attrs: {
          x1: '10',
          x2: '14',
          y1: '12',
          y2: '12',
        },
      },
    ],
  },
};
export default MtrArchiveOutline;
