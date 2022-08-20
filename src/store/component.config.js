import {
    TEXT_DATA,
    VIDEO_DATA,
    IMAGE_DATA,
    BAR_CHART_DATA,
    TABLE_DATA,
    LINE_DATA,
    RECT_DATA,
    URL_DATA
} from './component.data';
import {
    VIDEO_STYLE,
    IMAGE_STYLE,
    TEXT_STYLE,
    BAR_CHART_STYLE,
    TABLE_STYLE,
    LINE_CHART_STYLE,
    RECT_STYLE,
    URL_STYLE
} from './component.style';

export const TEXT = {
    name: '',
    x: 0,
    y: 0,
    width: 200,
    height: 100,
    bgcolor: '',
    active: false,
    id: Math.random(),
    data: {
        type: 'text',
        componentStyle: TEXT_STYLE,
        componentData: TEXT_DATA,
    },
};

export const RECT = {
    name: '',
    x: 0,
    y: 0,
    width: 200,
    height: 100,
    bgcolor: '#000',
    active: false,
    id: Math.random(),
    data: {
        type: 'rect',
        componentStyle: RECT_STYLE,
        componentData: RECT_DATA,
    },
};

export const VIDEO = {
    name: '',
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    bgcolor: '',
    active: false,
    id: Math.random(),
    data: {
        type: 'video',
        componentStyle: VIDEO_STYLE,
        componentData: VIDEO_DATA,
    },
};

export const URL = {
    name: '',
    x: 0,
    y: 0,
    width: 287,
    height: 27,
    bgcolor: '#F0FFFF',
    active: false,
    id: Math.random(),
    data: {
        type: 'text',
        componentStyle: URL_STYLE,
        componentData: URL_DATA,
    },
};

export const IMAGE = {
    name: '',
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    bgcolor: '',
    active: false,
    id: Math.random(),
    data: {
        type: 'image',
        componentStyle: IMAGE_STYLE,
        componentData: IMAGE_DATA,
    },
};

export const BAR = {
    name: '',
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    bgcolor: '',
    active: false,
    id: Math.random(),
    data: {
        type: 'bar',
        componentStyle: BAR_CHART_STYLE,
        componentData: BAR_CHART_DATA,
    },
};

export const TABLE = {
    name: '',
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    bgcolor: '',
    active: false,
    id: Math.random(),
    data: {
        type: 'table',
        componentStyle: TABLE_STYLE,
        componentData: TABLE_DATA,
    },
};

export const LINE = {
    name: '',
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    bgcolor: '',
    active: false,
    id: Math.random(),
    data: {
        type: 'line',
        componentStyle: LINE_CHART_STYLE,
        componentData: LINE_DATA,
    },
};