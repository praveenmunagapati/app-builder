/*
    Model grid:

    |       8       |   4   |
    |           12          |
    |           12          |
    |           12          |
*/

// eslint-disable-next-line import/prefer-default-export
export const PAYLOAD = {
  code: 'missing_sketch',
  descr: 'Missing Sketch',
  template: '<html></html>',
  configuration: {
    frames: [
      {
        defaultWidget: null,
        descr: 'Frame with no sketch 1',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 0,
      },
      {
        defaultWidget: null,
        descr: 'Frame with no sketch 2',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 1,
      },
      {
        defaultWidget: null,
        descr: 'Main Bar 1',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 2,
        sketch: {
          x1: 0,
          x2: 7,
          y1: 1,
          y2: 1,
        },
      },
      {
        defaultWidget: null,
        descr: 'Main Bar 2',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 3,
        sketch: {
          x1: 8,
          x2: 11,
          y1: 1,
          y2: 1,
        },
      },
      {
        defaultWidget: null,
        descr: 'Footer with no sketch 3',
        jaxbDefaultWidget: null,
        mainFrame: false,
        pos: 4,
      },
    ],
  },
};

export const CELL_MAP = {
  'col:0-0/0-0': {
    key: 'col:0-0/0-0',
    parentKey: 'row:0-0/11-0',
    type: 'col',
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
  },
  'col:0-1/7-1': {
    frameDescr: 'Main Bar 1',
    framePos: 2,
    frameIsMainFrame: false,
    key: 'col:0-1/7-1',
    parentKey: 'row:0-1/11-1',
    type: 'col',
    x1: 0,
    x2: 7,
    y1: 1,
    y2: 1,
  },
  'col:0-2/11-2': {
    frameDescr: 'Frame with no sketch 1',
    framePos: 0,
    frameIsMainFrame: false,
    key: 'col:0-2/11-2',
    parentKey: 'row:0-2/11-2',
    type: 'col',
    x1: 0,
    x2: 11,
    y1: 2,
    y2: 2,
  },
  'col:0-3/11-3': {
    frameDescr: 'Frame with no sketch 2',
    framePos: 1,
    frameIsMainFrame: false,
    key: 'col:0-3/11-3',
    parentKey: 'row:0-3/11-3',
    type: 'col',
    x1: 0,
    x2: 11,
    y1: 3,
    y2: 3,
  },
  'col:0-4/11-4': {
    frameDescr: 'Footer with no sketch 3',
    framePos: 4,
    frameIsMainFrame: false,
    key: 'col:0-4/11-4',
    parentKey: 'row:0-4/11-4',
    type: 'col',
    x1: 0,
    x2: 11,
    y1: 4,
    y2: 4,
  },
  'col:1-0/1-0': {
    key: 'col:1-0/1-0',
    parentKey: 'row:0-0/11-0',
    type: 'col',
    x1: 1,
    x2: 1,
    y1: 0,
    y2: 0,
  },
  'col:10-0/10-0': {
    key: 'col:10-0/10-0',
    parentKey: 'row:0-0/11-0',
    type: 'col',
    x1: 10,
    x2: 10,
    y1: 0,
    y2: 0,
  },
  'col:11-0/11-0': {
    key: 'col:11-0/11-0',
    parentKey: 'row:0-0/11-0',
    type: 'col',
    x1: 11,
    x2: 11,
    y1: 0,
    y2: 0,
  },
  'col:2-0/2-0': {
    key: 'col:2-0/2-0',
    parentKey: 'row:0-0/11-0',
    type: 'col',
    x1: 2,
    x2: 2,
    y1: 0,
    y2: 0,
  },
  'col:3-0/3-0': {
    key: 'col:3-0/3-0',
    parentKey: 'row:0-0/11-0',
    type: 'col',
    x1: 3,
    x2: 3,
    y1: 0,
    y2: 0,
  },
  'col:4-0/4-0': {
    key: 'col:4-0/4-0',
    parentKey: 'row:0-0/11-0',
    type: 'col',
    x1: 4,
    x2: 4,
    y1: 0,
    y2: 0,
  },
  'col:5-0/5-0': {
    key: 'col:5-0/5-0',
    parentKey: 'row:0-0/11-0',
    type: 'col',
    x1: 5,
    x2: 5,
    y1: 0,
    y2: 0,
  },
  'col:6-0/6-0': {
    key: 'col:6-0/6-0',
    parentKey: 'row:0-0/11-0',
    type: 'col',
    x1: 6,
    x2: 6,
    y1: 0,
    y2: 0,
  },
  'col:7-0/7-0': {
    key: 'col:7-0/7-0',
    parentKey: 'row:0-0/11-0',
    type: 'col',
    x1: 7,
    x2: 7,
    y1: 0,
    y2: 0,
  },
  'col:8-0/8-0': {
    key: 'col:8-0/8-0',
    parentKey: 'row:0-0/11-0',
    type: 'col',
    x1: 8,
    x2: 8,
    y1: 0,
    y2: 0,
  },
  'col:8-1/11-1': {
    frameDescr: 'Main Bar 2',
    framePos: 3,
    frameIsMainFrame: false,
    key: 'col:8-1/11-1',
    parentKey: 'row:0-1/11-1',
    type: 'col',
    x1: 8,
    x2: 11,
    y1: 1,
    y2: 1,
  },
  'col:9-0/9-0': {
    key: 'col:9-0/9-0',
    parentKey: 'row:0-0/11-0',
    type: 'col',
    x1: 9,
    x2: 9,
    y1: 0,
    y2: 0,
  },
  'root:0-0/11-4': {
    key: 'root:0-0/11-4',
    type: 'root',
    x1: 0,
    x2: 11,
    y1: 0,
    y2: 4,
  },
  'row:0-0/11-0': {
    key: 'row:0-0/11-0',
    parentKey: 'root:0-0/11-4',
    type: 'row',
    x1: 0,
    x2: 11,
    y1: 0,
    y2: 0,
  },
  'row:0-1/11-1': {
    key: 'row:0-1/11-1',
    parentKey: 'root:0-0/11-4',
    type: 'row',
    x1: 0,
    x2: 11,
    y1: 1,
    y2: 1,
  },
  'row:0-2/11-2': {
    key: 'row:0-2/11-2',
    parentKey: 'root:0-0/11-4',
    type: 'row',
    x1: 0,
    x2: 11,
    y1: 2,
    y2: 2,
  },
  'row:0-3/11-3': {
    key: 'row:0-3/11-3',
    parentKey: 'root:0-0/11-4',
    type: 'row',
    x1: 0,
    x2: 11,
    y1: 3,
    y2: 3,
  },
  'row:0-4/11-4': {
    key: 'row:0-4/11-4',
    parentKey: 'root:0-0/11-4',
    type: 'row',
    x1: 0,
    x2: 11,
    y1: 4,
    y2: 4,
  },
};
