const createMultiplyTable = require('../main');

it ('should return multiply table from 2 to 4 when call createMultiplyTable given 2 to 4', () => {
    expect(createMultiplyTable(2, 4)).toBe("2*2=4\r\n" +
                                           "2*3=6\t3*3=9\r\n" +
                                           "2*4=8\t3*4=12\t4*4=16");
});

it ('should return multiply table from 2 to 4 when call createMultiplyTable given 2 to 4', () => {
    expect(createMultiplyTable(4, 2)).toBe("start不能大于end");
});

it ('should return multiply table from 2 to 4 when call createMultiplyTable given 2 to 4', () => {
    expect(createMultiplyTable(2, 2)).toBe("2*2=4");
});

it ('should return multiply table from 2 to 4 when call createMultiplyTable given 2 to 4', () => {
    expect(createMultiplyTable(-1, 2)).toBe("-1*-1=1\r\n" +
        "-1*0=0\t0*0=0\r\n" +
        "-1*1=-1\t0*1=0\t1*1=1\r\n"+
        "-1*2=-2\t0*2=0\t1*2=2\t2*2=4");
});

it ('should return multiply table from 2 to 4 when call createMultiplyTable given 2 to 4', () => {
    expect(createMultiplyTable(0.2, 0.5)).toBe("错误的参数类型");
});

it ('should return multiply table from 2 to 4 when call createMultiplyTable given 2 to 4', () => {
    expect(createMultiplyTable("A", 2)).toBe("错误的参数类型");
});

it ('should return multiply table from 2 to 4 when call createMultiplyTable given 2 to 4', () => {
    expect(createMultiplyTable(3, "")).toBe("错误的参数类型");
});

it ('should return multiply table from 2 to 4 when call createMultiplyTable given 2 to 4', () => {
    expect(createMultiplyTable(3, 1001)).toBe("超出内存限制");
});

