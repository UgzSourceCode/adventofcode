import { describe, expect, test } from "vitest";
import {getDayManager} from "./dayManager";

describe("DayManager test", () => {
    test("Should possible to add day and run it", () => {
        let result: string = "";
        const dayManager = getDayManager();
        dayManager.addDay(async () => {result= "ok";});
        dayManager.runAll().then(() => {
            expect(result).toBe("ok");
        });
    });

    test("Should runAll days one by one", () => {
        let counter = "";
        const dayManager = getDayManager();
        dayManager.addDay(async () => {counter += "|";});
        dayManager.addDay(async () => {counter += ".";});
        dayManager.addDay(async () => {counter += "|";});
        dayManager.runAll().then(() => {
            expect(counter).toBe("|.|");
        });
    });
});