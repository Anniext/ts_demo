// index.test.ts
describe("index.ts", () => {
    beforeEach(() => {
        // 让 Jest 清空模块缓存，保证下一次 import 会重新执行顶层代码
        jest.resetModules();
    });

    it("在导入时输出 Hello world typescript !!!", async () => {
        const spy = jest.spyOn(console, "log").mockImplementation(() => {});

        // 关键：在 spy 建立之后 **再** 动态加载模块
        await import("./index");

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith("Hello world typescript !!!");

        spy.mockRestore();
    });
});
