/**
 * Jest 配置文件 (ESM 格式)
 *
 * 使用前请安装必要依赖：
 *   npm i -D jest ts-jest @types/jest
 *
 * 如果需要测试 Node 相关逻辑，已设置 testEnvironment 为 'node'。
 * 已启用 ts-jest 来处理 TypeScript 转换。
 *
 * 测试文件匹配规则：
 *   - 任意目录下的 __tests__/*.test.ts / .spec.ts
 *   - 任意 *.(test|spec).ts / .tsx
 */

export default {
    // 基础根目录
    rootDir: ".",

    // 使用 ts-jest 预设处理 TypeScript
    preset: "ts-jest",

    // 测试运行环境
    testEnvironment: "node",

    // 是否自动清理模拟
    clearMocks: true,

    // 测试文件匹配
    testMatch: [
        "**/__tests__/**/*.(test|spec).ts?(x)",
        "**/?(*.)+(test|spec).ts?(x)",
    ],

    // 支持的模块后缀
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "mjs", "cjs", "json"],

    // 转换规则
    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                tsconfig: "tsconfig.json",
                // 若需要支持 ESM，可开启下面配置
                // useESM: true
            },
        ],
    },

    // 收集覆盖率（根据需要启用）
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
    coverageDirectory: "coverage",

    // 覆盖率阈值（可按需调整）
    // coverageThreshold: {
    //   global: {
    //     branches: 80,
    //     functions: 80,
    //     lines: 80,
    //     statements: 80
    //   }
    // },

    // 详细输出
    verbose: true,

    // 映射路径（如果你在 tsconfig 中用 paths，可在此同步）
    // moduleNameMapper: {
    //   '^@src/(.*)$': '<rootDir>/src/$1'
    // }
};
