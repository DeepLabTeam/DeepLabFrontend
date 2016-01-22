/// <reference path="d3.d.ts" />
interface IDataSeries {
    desc: string;
    data: IRun[];
}
interface IRun {
    date: Date;
    pass: boolean;
}
interface IPerfDataSeries {
    desc: string;
    data: IPerfRun[];
}
interface IPerfRun {
    x: Date;
    y: number;
}
declare module Chart {
    class Base {
        element: any;
        iso8601: ID3TimeFormat;
        chartWidth: number;
        constructor(element: any);
    }
    class Bar extends Base {
        element: ID3Selection;
        constructor(element: ID3Selection);
        chartHeight: number;
        chartWidth: number;
        legendItemHeight: number;
        legendWidth: number;
        colors: string[];
        xAxisHashHeight: number;
        layout: string;
        render(data: IPerfDataSeries[]): void;
    }
    class DailyBuild extends Base {
        element: ID3Selection;
        constructor(element: ID3Selection);
        labelWidth: number;
        labelGutter: number;
        chartWidth: number;
        private getTextDataString(data);
        render(data: IDataSeries[]): ID3Selection;
    }
}
declare var start: Date;
declare var end: Date;
declare var days: Date[];
declare var buildData: IRun[];
declare var compilerTestData: IRun[];
declare var servicesTestData: IRun[];
declare function decreasingRandom(start: number, deviation: number, factor: number): () => number;
declare var parseRandom: () => number;
declare var typecheckRandom: () => number;
declare var emitRandom: () => number;
declare var parseData: IPerfRun[];
declare var typecheckData: IPerfRun[];
declare var emitData: IPerfRun[];
